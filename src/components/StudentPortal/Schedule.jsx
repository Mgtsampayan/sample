const schedule = [
  { id: 1, course: 'Math 101', time: 'Mon 10:00 AM - 11:30 AM' },
  { id: 2, course: 'History 201', time: 'Wed 1:00 PM - 2:30 PM' },
  // Add more schedule items here
];

const Schedule = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Current Schedule</h2>
      <ul>
        {schedule.map(item => (
          <li key={item.id} className="bg-gray-100 p-2 mb-2">
            <strong>{item.course}</strong>: {item.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
