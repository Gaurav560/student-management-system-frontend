// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const StudentList = () => {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/Students');
//       setStudents(response.data);
//     } catch (error) {
//       console.error("Failed to fetch students:", error);
//       // Handle error appropriately in real applications (e.g., user feedback)
//     }
//   };

//   const deleteStudent = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8080/api/Student/${id}`);
//       fetchStudents(); // Refresh the list after deleting
//     } catch (error) {
//       console.error("Failed to delete student:", error);
//       // Handle error appropriately in real applications
//     }
//   };

//   return (
//     <div className="student-list">
//       <h2>Students</h2>
//       <Link to="/add">Add New Student</Link>
//       <ul>
//         {students.map(student => (
//           <li key={student.id}>
//             {student.name} - {student.className}
//             <button onClick={() => deleteStudent(student.id)}>Delete</button>
//             <Link to={`/edit/${student.id}`}>Edit</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StudentList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './StudentList.css'; // Make sure to import the CSS file

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/Students');
      setStudents(response.data);
    } catch (error) {
      console.error("Failed to fetch students:", error);
      // Handle error appropriately in real applications (e.g., user feedback)
    }
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/Student/${id}`);
      fetchStudents(); // Refresh the list after deleting
    } catch (error) {
      console.error("Failed to delete student:", error);
      // Handle error appropriately in real applications
    }
  };

  return (
    <div className="student-list">
    <h2>List of all Students</h2>
    <Link to="/add">Add New Student</Link>
    <div className="student-container">
      {students.map((student) => (
        <div key={student.id} className="student-item">
          <div>Name: {student.name}</div>
          <div>Email: {student.email}</div>
          <div>Address: {student.address}</div>
          <div>Phone Number: {student.phoneNumber}</div>
          <div>Class: {student.className}</div>
          <div>Father's Name: {student.fathersName}</div>
          <button onClick={() => deleteStudent(student.id)}>Delete</button>
          <Link to={`/edit/${student.id}`}>Edit</Link>
        </div>
      ))}
    </div>
  </div>
  );
};

export default StudentList;

