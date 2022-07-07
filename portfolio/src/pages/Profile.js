import { useState, useEffect } from 'react';
import './Profile.css';
import Link from '../components/Link';
import List from '../components/List';

function Profile({ username }) {
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState({});
    const items = [
        {
            field: 'html_url',
            value: <Link url={profile.html_url}
                title={profile.html_url} />,
        },
        {
            field: 'repos_url',
            value: <Link url={profile.repos_url}
                title={profile.repos_url} />
        },
        { field: 'name', value: profile.name },
        { field: 'location', value: profile.location },
        { field: 'bio', value: profile.bio }
    ];

    useEffect(() => {
        async function fetchData() {
            const profile = await fetch(
                `https://api.github.com/users/${username}`
            );
            const result = await profile.json();

            if (result) {
                setLoading(false);
                setProfile(result);
            }
        }

        fetchData();
    }, [username])

    return (
        <div className='profile-container'>
            <h2>About me</h2>
            {loading ?
                (<spa>Loading...</spa>)
                :
                (
                    <div>
                        <img src={profile.avatar_url} alt={profile.name} className='profile-avatar' />
                        <List items={items} styling='profile-list' />
                    </div>
                )
            }

        </div>
    )

}

export default Profile