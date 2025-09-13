import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function KanbanBoard({ boards, tasks, onDragEnd }) {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {boards.map((board) => (
          <Droppable droppableId={board._id} key={board._id}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} style={{ minWidth: 250, background: '#f4f4f4', padding: 8 }}>
                <h3>{board.title}</h3>
                {tasks.filter(t => t.boardId === board._id).map((task, idx) => (
                  <Draggable draggableId={task._id} index={idx} key={task._id}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={{ marginBottom: 8, background: '#fff', padding: 8, borderRadius: 4 }}>
                        {task.title}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}

export default KanbanBoard;
