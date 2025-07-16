import { useState } from 'react';
import './App.css';
import notificationsData from './notifications';
import Layout from './Layout';
import NotificationList from './NotificationList';

function App() {
  const [notifications, setNotifications] = useState(notificationsData);

  const handleRemove = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const handleClearAll = () => {
    setNotifications([]);
  };

  return (
    <Layout>
      <p>You have {notifications.length} notification(s).</p>
      <button onClick={handleClearAll}>Clear All</button>
      <NotificationList notifications={notifications} onRemove={handleRemove} />
    </Layout>
  );
}

export default App;
