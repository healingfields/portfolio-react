import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ProjectDetails({ username }) {

    const [loading, setLoading] = useState(true);
    const [project, setProject] = useState({});
    const { name } = useParams();

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(
                `https://api.github.com/repos/${username}/${name}`
            );

            const result = await data.json();

            if (result) {
                setLoading(false);
                setProject(result);
                console.log(project);
            }

        }
        console.log(project);

        fetchData();

    }, [username, name]);
    return (
        <div className='project-container'>

            {loading ? (<span>Loading ...</span>)
                :
                (<div>
                    <h2>Project: {project.full_name}</h2>
                    <h4>Url: <a href={project.url}>{project.url}</a></h4>
                    <p> created at : {project.created_at}</p>
                </div>)
            }
        </div>
    )
}

export default ProjectDetails