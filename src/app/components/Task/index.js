
/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import React, { Component, Fragment } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import cn from 'classnames';

/**
 * -----------------------------------------------------------------------------
 * React Component: Task
 * -----------------------------------------------------------------------------
 */

export default class DraggableTask extends Component {

    render() {
        const { index, task } = this.props;

        return (
            <Draggable draggableId={task.id} index={index}>
                {
                    ({draggableProps, dragHandleProps, innerRef}, {isDragging, draggingOver}) =>
                    <div
                        className={cn('task', { dragging: isDragging })}
                        ref={innerRef}
                        {...draggableProps}>
                        <div className="task-handle" {...dragHandleProps} />
                        {task.content}
                    </div>
                }
            </Draggable>
        );
    }
}

DraggableTask.defaultProps = {};
