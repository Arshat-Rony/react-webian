import { useEffect, useState } from "react"

const useCourses = (searchtext) => {
    const [courses, setCourses] = useState([])
    const smallSearchtext = searchtext.toLowerCase();
    console.log(searchtext)
    useEffect(() => {
        fetch('coursedb.json')
            .then(res => res.json())
            .then(data => {
                const matched = data.filter(product => product.title.includes(smallSearchtext))
                setCourses(matched)
            })
    }, [searchtext])
    return [courses, setCourses]
}
export default useCourses;