
/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import React, { Component, Fragment } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import cn from 'classnames';

/**
 * -----------------------------------------------------------------------------
 * React Component: MenuItem
 * -----------------------------------------------------------------------------
 */

export default class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { item, index, depth = 0 } = this.props;

        return (
            <Draggable draggableId={item.id} index={index}>
                {({innerRef: draggableRef, draggableProps, dragHandleProps}, {isDragging, draggingOver}) => (
                <Droppable droppableId={item.id} type="child" isCombineEnabled={true}>
                    {({ innerRef: droppableRef, droppableProps, placeholder }, { isDraggingOver, draggingOverWith }) => (
                    <div
                        className={cn('menu-item', {'menu-item-child': depth})}
                        ref={el => { droppableRef(el); draggableRef(el); }}
                        {...draggableProps}
                        {...dragHandleProps}
                        {...droppableProps}>
                        <div className="menu-item-dropzone"
                            >
                            {item.id}
                            {this.props.children}
                        </div>
                        {placeholder}
                    </div>
                    )}
                </Droppable>
                )}
            </Draggable>
        );
    }
}

MenuItem.defaultProps = {};
