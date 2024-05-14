import React, { useEffect, useState } from 'react'
import axios from "axios"

const StudentsView = () => {

    const [students, setStudents] = useState([]);

    useEffect(() =>{
        loadStudents();
    }, [])
    
    const loadStudents = async() =>{
        const result = await axios.get("http://localhost:8080/api/student",
        {
            validateStatus: () =>{
                return true;
            },
        }
        );
        if (result.status ===  302){
            setStudents(result.data)
        }
        
    }
    return (
        <section>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (

                    <tr key={student.id}>
                        <th scope='row' key={index}>
                            {index + 1}
                        </th>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.email}</td>
                        <td>{student.department}</td>
                        <td>View</td>
                        <td>Update</td>
                        <td>Delete</td>
                    </tr>

                    ))}


                </tbody>

            </table>
        </section>
  );
};

export default StudentsView;
