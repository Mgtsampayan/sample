const notifications = [
  { id: 1, message: 'Document Transcript.pdf uploaded by John Doe' },
  { id: 2, message: 'Document Diploma.pdf verified by Jane Smith' },
  // Add more notifications here
];

const Notifications = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Notifications for Faculty</h2>
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
