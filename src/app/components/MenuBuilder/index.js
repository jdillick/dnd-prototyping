/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import React, { Component, Fragment } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import initialMenu from './initialMenu';
import MenuItem from './MenuItem';
import op from 'object-path';

/**
 * -----------------------------------------------------------------------------
 * React Component: MenuBuilder
 * -----------------------------------------------------------------------------
 */
export default class MenuBuilder extends Component {
    constructor(props) {
        super(props);
        const items = MenuBuilder.inflate(
            MenuBuilder.flatten(initialMenu.items),
        );
        this.state = { items };
    }

    static flatten(menu, parent = null, depth = 0) {
        return menu
            .reduce((flattened, item, idx) => {
                const { id, children, ...itemProps } = item;
                flattened.push({ id, idx, parent, depth, ...itemProps });
                return flattened.concat(
                    children ? this.flatten(children, id, depth + 1) : [],
                );
            }, [])
            .sort((a, b) => (a.idx < b.idx ? -1 : a.idx > b.idx ? 1 : 0))
            .sort((a, b) =>
                a.depth < b.depth ? -1 : a.depth > b.depth ? 1 : 0,
            );
    }

    static inflate(flattened = [], parent = null, depth = 0) {
        return flattened
            .filter(item => item.parent === parent)
            .reduce(
                (inflated, { id, idx, parent, depth, ...itemProps }, index) => {
                    inflated.push({
                        id,
                        idx: index,
                        ...itemProps,
                        children: this.inflate(flattened, id, depth + 1),
                    });
                    return inflated;
                },
                [],
            );
    }

    renderMenu({ item, index }, depth = 0) {
        return (
            <MenuItem
                item={item}
                index={index}
                depth={depth}
                key={`menu-item-${item.id}`}>
                {item.children &&
                    item.children.map((item, index) =>
                        this.renderMenu({ item, index }, depth + 1),
                    )}
            </MenuItem>
        );
    }

    handleDragEnd = results => {
        const { draggableId, combine, source, destination } = results;
        const { droppableId: sId, index: sIdx } =
            op.get(results, 'source') || {};
        const { droppableId: dId, index: dIdx } =
            op.get(results, 'destination') || {};
        const { droppableId: cId, index: cIdx, draggableId: combineId } =
            op.get(results, 'combine') || {};

        const flattened = MenuBuilder.flatten(this.state.items);

        // Possible move of menu item
        if (source && destination) {
            if (sId === dId && sIdx === dIdx) return; // do nothing, no change
            if (dId === draggableId) return; // do nothing;

            // builder is top level of menu
            let parent = dId === 'builder' ? null : dId;

            return this.setState(() => {
                const updated = flattened
                    .map(item => {
                        // move dragged item to new position
                        if (item.id === draggableId) {
                            return {
                                ...item,
                                parent,
                                idx: dIdx,
                            };
                        }

                        // reorder siblings
                        if (item.parent === parent) {
                            if (item.idx > dIdx) {
                                return {
                                    ...item,
                                    idx: item.idx + 1,
                                };
                            }

                            if (item.idx === dIdx) {
                                return {
                                    ...item,
                                    idx:
                                        sIdx > dIdx
                                            ? item.idx + 1
                                            : item.idx - 1,
                                };
                            }
                        }

                        return item;
                    })
                    .sort((a, b) =>
                        a.idx < b.idx ? -1 : a.idx > b.idx ? 1 : 0,
                    );

                return { items: MenuBuilder.inflate(updated) };
            });
        }

        // two menu items were "combined"
        if (combine && combineId && draggableId && combineId !== draggableId) {
            return this.setState(() => {
                const updated = flattened
                    .map(item => {
                        // move dragged item to new position
                        if (item.id === draggableId) {
                            return {
                                ...item,
                                parent: combineId,
                                idx: 1000,
                            };
                        }
                        return item;
                    })
                    .sort((a, b) =>
                        a.idx < b.idx ? -1 : a.idx > b.idx ? 1 : 0,
                    );

                return { items: MenuBuilder.inflate(updated) };
            });
        }

        // no target
        if (!combine && !destination && draggableId) {
            return this.setState(() => {
                const updated = flattened
                    .map(item => {
                        // move dragged item to new position
                        if (item.id === draggableId) {
                            return {
                                ...item,
                                parent: null,
                                idx: 1000,
                            };
                        }
                        return item;
                    })
                    .sort((a, b) =>
                        a.idx < b.idx ? -1 : a.idx > b.idx ? 1 : 0,
                    );

                return { items: MenuBuilder.inflate(updated) };
            });
        }
    };

    render() {
        const { items } = this.state;

        return (
            <DragDropContext onDragEnd={this.handleDragEnd}>
                <Droppable
                    droppableId='builder'
                    type='top'
                    isCombineEnabled={true}>
                    {(
                        { innerRef, droppableProps, placeholder },
                        { isDraggingOver, draggingOverWith },
                    ) => (
                        <div
                            className={'menu-builder'}
                            ref={innerRef}
                            {...droppableProps}>
                            {items.map(item =>
                                this.renderMenu({ item, index: item.idx }),
                            )}
                            {placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}

MenuBuilder.defaultProps = {};
