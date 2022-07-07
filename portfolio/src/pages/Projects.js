import { useState, useEffect } from 'react'
import './Projects.css'

import List from '../components/List';
import Link from '../components/Link';

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
                                value: <Link url={project.html_url} title={project.html_url} />
                            }

                        ))} styling='project-list' />
                    </div>
                )
            }

        </div>
    )
}

export default Projects