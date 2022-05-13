import {NavLink} from 'react-router-dom'
import './styles.css'
const Index = ({length}) => {
	return (
		<nav>
			<ul className='navUl'>
				<li className='navLi'>
					<NavLink className={({isActive})=> `navLink ${isActive? 'isActive': ''}`} to="/"><img className='solatiLogo' src="https://www.solati.co//wp-content/uploads/2020/06/software-cobranzas.png" alt="" /></NavLink>
				</li>
				<li className='navLi'>
					<NavLink className={({isActive})=> `navLink ${isActive? 'isActive': ''}`} to="/records">My Records</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Index;
