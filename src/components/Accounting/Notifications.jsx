const notifications = [
  { id: 1, message: 'Payment of 500 by John Doe verified' },
  { id: 2, message: 'New payment received from Jane Smith' },
  // Add more notifications here
];

const Notifications = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Notifications for Accounting</h2>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id} className="bg-gray-100 p-2 mb-2">
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
