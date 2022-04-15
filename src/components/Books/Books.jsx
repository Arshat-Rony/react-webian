import React from 'react';
import { useParams } from 'react-router-dom';
import useCourses from '../../hooks/useCourses';
import SingleCourse from '../SingleCourse/SingleCourse';

const Books = () => {
    const [courses, setCourses] = useCourses("books")
    let params = useParams()
    console.log(params.coursesId)
    return (
        <div>
            {
                courses.map(course => <SingleCourse
                    key={course.id}
                    course={course}
                ></SingleCourse>)
            }
        </div>
    );
};

export default Books;