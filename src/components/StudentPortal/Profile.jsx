const Profile = () => {
  const student = {
    name: 'John Doe',
    email: 'john@example.com',
    major: 'Computer Science',
    // Add more profile details here
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Profile</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Major:</strong> {student.major}</p>
      {/* Add more profile details here */}
    </div>
  );
};

export default Profile;
