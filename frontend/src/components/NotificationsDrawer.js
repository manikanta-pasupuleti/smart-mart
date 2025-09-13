import React from 'react';

function NotificationsDrawer({ notifications }) {
  return (
    <div style={{ position: 'fixed', right: 0, top: 0, width: 300, background: '#fafafa', borderLeft: '1px solid #ccc', height: '100vh', padding: 16 }}>
      <h3>Notifications</h3>
      <ul>
        {notifications.map((n, idx) => (
          <li key={idx}>{n.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default NotificationsDrawer;
