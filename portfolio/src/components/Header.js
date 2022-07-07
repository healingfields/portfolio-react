import './Header.css';
import { Link as RouterLink } from 'react-router-dom';


function Header({ logo }) {
    return (
        <header className='app-header'>
            <img src={logo} className='app-logo' alt='logo' />
            <h1>Portfolio</h1>
            <nav>
                <RouterLink to='/' className='app-link'>
                    About me
                </RouterLink>
                <RouterLink to='/projects' className='app-link'>
                    Projects
                </RouterLink>
            </nav>
        </header>

    )
}

export default Header;