import { useState, useEffect } from 'react'
import './Projects.css'
import { Link } from 'react-router-dom';

import List from '../components/List';


function Projects({ username }) {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState({});

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(
                `https://api.github.com/users/${username}/repos`,
            );
            const result = await data.json();

            if (result) {
                setLoading(false);
                setProjects(result);
            }
        }
        fetchData();

    }, [username])
    return (
        <div className='projects-container'>
            <h2>Projects</h2>
            {loading ?
                (<span>Loading .... </span>)
                :
                (
                    <div>
                        <List items={projects.map((project) => (
                            {
                                field: project.name,
                                value: <Link to={`/projects/${project.name}`} >Open Project</Link>
                            }

                        ))} styling='project-list' />
                    </div>
                )
            }

        </div>
    )
}

export default Projects