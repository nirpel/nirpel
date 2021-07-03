import { Line, Logo } from 'UI-Kit';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = (props) => {


    return (
        <div className='Navbar'>
            <Line justify='between' width='100%'>
                <Logo />
                <Line justify='between'>
                    <NavLink exact to='/'>Hello</NavLink> | 
                    <NavLink to='/about'>About</NavLink> | 
                    <NavLink to='/work'>Work</NavLink> | 
                    <NavLink to='/contact'>Contact</NavLink>
                </Line>
            </Line>
        </div>
    )
}

export default Navbar;