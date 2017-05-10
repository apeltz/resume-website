import React from 'react';


export default class About extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <p>
          {
						`I'm a software engineer dedicated to the creation of powerful web
						platforms. My experience to-date has been mostly in Javascript, with
						an emphasis on font-end frameworks, Node.js, and supportive technologies.`
					}
          </p>
          <p>
          {
						`I started programming because I love creating and am obsessed with
						continuous self-improvement. In an ideal world I would constantly be
						learning something new and using that knowledge to approach increasingly
						difficult problems. In a way, I treat my life like a machine learning
						project where I am both the machine and the engineer. I feel like
						programming is uniquely demanding of this kind of constant self-development
						and personal evolution, and I'm excited to be challenging myself and
						growing every day.`
					}
          </p>
          <p>
          	{
							`No matter how old I get, I don't think my passions will ever age
							past those I had when I was 10. I'm still awed by space and technology,
							am fascinated by other worlds, robots, and lasers, and am curious
							to find out how things work. I also enjoy hearing other people get
							excited up about what they love.`
						}
          </p>
      </div>


    )
  }

} //End of class About
