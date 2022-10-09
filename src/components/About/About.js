import React from 'react';
import handsome from '../../assets/handsome.png'
import namePlate from "../../assets/name-plate.png"

function About() {
  return (
    <section id="about">
      <img src={handsome} alt='handsome' className='handsome'></img>
      <img src={namePlate} alt="name-plate" className="namePlate"></img>
      <h2 >
        I am a 20 year old graduate of the coding bootcamp at UNCC. 
        Coding novice trained in the MERN stack, looking for a job to advance my learning. I recently moved to South Carolina, and I'm hoping to start a career in tech.
        Although I may lack experience, I am confident I would be valuable to any team or business, this is supported by the fact that
        I scored better than 93% of applicants on the ASVAB (an aptitude test for the armed forces).
        <br></br>
        <br></br>
        <br></br>
        <br></br>
       </h2>
    </section>
  );
}

export default About;
