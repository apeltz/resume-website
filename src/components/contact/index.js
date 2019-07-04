import React from 'react';
import style from './index.less';

function Contact() {

	let divStyle = {
		backgroundImage: 'url(./assets/envelope.jpg)',
		backgroundSize: 'auto 90%',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center'
	};
	return (
		<div className={style.contact}>
			<div className={style.inner_wrapper} style={divStyle}>
				<table>
					<thead />
					<tbody>
						<tr>
							<td >Name:</td>
							<td className={style.value}>Aaron Peltz</td>
						</tr>
						<tr>
							<td>LinkedIn:</td>
							<td className={style.value}><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/apeltz">linkedin.com/in/apeltz</a></td>
						</tr>
						<tr>
							<td>Github:</td>
							<td className={style.value}><a target="_blank" rel="noopener noreferrer" href="https://www.github.com/apeltz">github.com/apeltz</a></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Contact;
