
/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import React, { Component, Fragment } from 'react';
import initialData from './initialData';
import Column from 'components/Column';
import { DragDropContext } from 'react-beautiful-dnd';

/**
 * -----------------------------------------------------------------------------
 * React Component: DnDTodo
 * -----------------------------------------------------------------------------
 */

export default class DnDTodo extends Component {
    constructor(props) {
        super(props);
        this.state = { ...initialData };
    }

    onDragEnd(result) {
        // console.log({result});

        const { source, destination, draggableId } = result;

        if ( ! destination ) return;

        const { droppableId: from, index: fromIndex } = source;
        const { droppableId: to, index: toIndex } = destination;

        // no move
        if ( from === to && fromIndex === toIndex ) return;

        this.setState(state => {
            const newFrom = state.columns[from];
            const newTo = state.columns[to];

            newFrom.taskIds.splice(fromIndex, 1);
            newTo.taskIds.splice(toIndex, 0, draggableId);

            return {
                ...state,
                columns: {
                    ...state.columns,
                    [from]: newFrom,
                    [to]: newTo,
                },
            };
        })
        // console.log({from, fromIndex, to, toIndex});
    }

    render() {
        // console.log({state: this.state});
        const { tasks: allTasks, columns, columnOrder } = this.state;
        return (
            <DragDropContext onDragEnd={this.onDragEnd.bind(this)}>
                <div className="columns">
                    {columnOrder.map(columnId => {
                        const column = columns[columnId];
                        const tasks = column.taskIds.map(taskId => allTasks[taskId]);
                        return <Column key={columnId} column={column} tasks={tasks} />
                    })}
                </div>
            </DragDropContext>
        );
    }
}

DnDTodo.defaultProps = {};
