import React from 'react';
import notFound from '../../assets/notFound.png'
import './styles.css'
export default function NotFound() {
	return <picture>
		<img className='notFoundImg' src={notFound} alt="" />
	</picture>;
}
