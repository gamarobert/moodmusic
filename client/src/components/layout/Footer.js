import React from 'react';
import Dev from '../devs/Dev';
import robertPic from '../../assets/robert_pic.jpg';
import juanPic from '../../assets/juan_pic.jpg';
import pamelaPic from '../../assets/pamela_pic.jpg';

let dev = [
  {
    name: 'Robert Gama',
    img: robertPic,
    description:
      ' From Santa Ana, CA. Robert is currently a computer science student at California State University, Fullerton. Pursuing a career in full stack Web Development. My free time is mostly spent on getting lost in my youtube recommendations.'
  },
  {
    name: 'Juan Carrera',
    img: juanPic,
    description:
      ' From Orange, CA currently a computer science student at California State University, Fullerton. Fields that I am interested in are Web Applications and Mobile Development. I like to enjoy my free time going to music festivals and playing video games.'
  },
  {
    name: 'Pamela Camacho',
    img: pamelaPic,
    description:
      'From Glendale, CA. Currently a senior at California State University, Fullerton. Studying Computer Science to pursue either a career in Cyber Seurity or Software Engineering. Free time spent usually going to watch live music or any type of art entertainment.'
  }
];

const Footer = () => {
  return (
    <div className='footer'>
      <div className='flex-container text-center'>
        {dev.map((dev, index) => (
          <div className='flex-item'>
            <Dev
              key={index}
              id={index}
              name={dev.name}
              img={dev.img}
              description={dev.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
