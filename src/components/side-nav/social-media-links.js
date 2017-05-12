import React from 'react';
import style from './social-media-links.less';

function SocialMediaLinks() {
	return (
		<div className={style.socialMediaLinks}>
			<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/apeltz">
				<div><i className="fa fa-linkedin" /></div>
			</a>
			<a target="_blank" rel="noopener noreferrer" href="https://www.github.com/apeltz">
				<div><i className="fa fa-github" /></div>
			</a>
			<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/aaron.peltz">
				<div><i className="fa fa-facebook" /></div>
			</a>
			<a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/AaronPeltz">
				<div><i className="fa fa-twitter" /></div>
			</a>
		</div>
	);
}

export default SocialMediaLinks;
