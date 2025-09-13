import React from 'react';

function TaskModal({ task, onClose }) {
  if (!task) return null;
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.3)' }} onClick={onClose}>
      <div style={{ background: '#fff', margin: '10% auto', padding: 20, maxWidth: 400 }} onClick={e => e.stopPropagation()}>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        {/* TODO: Add comments, attachments, assignees, etc. */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default TaskModal;
