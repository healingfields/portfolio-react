import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ProjectDetails({ username }) {

    const [loading, setLoading] = useState(true);
    const [project, setProject] = useState({});
    const { name } = useParams();

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(
                'https://api.github.com/repos/healingfields/Design_Area'
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
            <h2>Project: {project.full_name}</h2>
            <h3>Owner: {project.owner.login}</h3>
            <h4>Url: <a href={project.url}>{project.url}</a></h4>
            <p> created at : {project.created_at}</p>
            {loading ? (<span>Loading ...</span>)
                :
                (<div>
                    <h2>{project.id}</h2>
                </div>)
            }
        </div>
    )
}

export default ProjectDetails