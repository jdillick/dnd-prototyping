import React, { Component, Fragment } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from 'components/Task';
import op from 'object-path';
import cn from 'classnames';

/**
 * -----------------------------------------------------------------------------
 * React Component: DroppableColumn
 * -----------------------------------------------------------------------------
 */
export default class DroppableColumn extends Component {
    render() {
        const { title, column, tasks, innerRef } = this.props;

        return (
            <Droppable droppableId={column.id}>
                {
                    ({ innerRef, droppableProps, placeholder }, { isDraggingOver, draggingOverWith }) => (
                        <div className={cn('column', {'drag-over': isDraggingOver})}>
                            <h3 className="column-title">{op.get(column, 'title')}</h3>

                            <div className="column-list" ref={innerRef} {...droppableProps}>
                                {
                                    tasks.map((task, index) =>
                                    <Task key={task.id} task={task} index={index} />)
                                }
                            </div>

                            {placeholder}
                        </div>
                    )
                }
            </Droppable>
        );
    }
}

DroppableColumn.defaultProps = {};
