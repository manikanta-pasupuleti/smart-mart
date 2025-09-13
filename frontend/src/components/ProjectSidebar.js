import React from 'react';

function ProjectSidebar({ projects, onSelect }) {
  return (
    <aside style={{ width: 200, background: '#eee', padding: 16 }}>
      <h2>Projects</h2>
      <ul>
        {projects.map(p => (
          <li key={p._id}>
            <button onClick={() => onSelect(p._id)}>{p.name}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default ProjectSidebar;
