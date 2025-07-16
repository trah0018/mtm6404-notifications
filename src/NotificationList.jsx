import Notification from './Notification';

function NotificationList({ notifications, onRemove }) {
  return (
    <div>
      {notifications.map((note) => (
        <Notification
          key={note.id}
          notification={note}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default NotificationList;
