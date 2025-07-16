function Notification({ notification, onRemove }) {
  return (
    <div>
      <h3>{notification.name}</h3>
      <p>{notification.message}</p>
      <button onClick={() => onRemove(notification.id)}>Clear</button>
    </div>
  );
}

export default Notification;