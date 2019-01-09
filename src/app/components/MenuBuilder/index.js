
/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import React, { Component, Fragment } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import initialMenu from './initialMenu';
import MenuItem from './MenuItem';

/**
 * -----------------------------------------------------------------------------
 * React Component: MenuBuilder
 * -----------------------------------------------------------------------------
 */

export default class MenuBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = { ...initialMenu };
    }

    renderMenu({item, index}, depth = 0) {

        return <MenuItem item={item} index={index} depth={depth} key={`menu-item-${depth}-${index}`}>
            {item.children && item.children.map((item, index) => this.renderMenu({item, index}, depth + 1))}
        </MenuItem>;
    }

    render() {
        const { items } = this.state;

        return (
            <DragDropContext onDragEnd={result => console.log({ result })}>
                <Droppable droppableId="builder" type="top" isCombineEnabled={true}>
                    {({ innerRef, droppableProps, placeholder }, { isDraggingOver, draggingOverWith }) => (
                        <div className={'menu-builder'} ref={innerRef} {...droppableProps}>
                            {items.map((item, index) => this.renderMenu({item, index}))}
                            {placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}

MenuBuilder.defaultProps = {};
