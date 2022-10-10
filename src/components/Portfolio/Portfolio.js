import React from 'react';


const ProjectList = () => {

  const Projects = [
    {
      name: 'Run Buddy',
      link: 'https://konopie.github.io/run-buddy/',
      src: 'run-buddy',
      github: 'https://github.com/Konopie/run-buddy'
    },
    {
      name: 'Cat Generator',
      link: 'https://konopie.github.io/cat-generator/',
      src: 'cat-genie',
      github: 'https://github.com/Konopie/cat-generator'
    },
    {
      name: 'Hungry Guys',
      link: 'https://hungry-guys.herokuapp.com/',
      src: 'hungry-guys',
      github: 'https://github.com/Konopie/hungry-guys'
    },
    {
      name: 'Just Another Text Editor',
      link: 'https://konopies-text-editor.herokuapp.com/',
      src: 'JATE',
      github: 'https://github.com/Konopie/text-editor'
    },
    {
      name: 'Note Taker',
      link: 'https://tranquil-shore-49299.herokuapp.com/',
      src: 'note-taker',
      github: 'https://github.com/Konopie/note-taker'
    },
    {
      name: 'Football Fantasy',
      link: 'https://fantasy-football-draft-app.herokuapp.com/',
      src: 'football-fantasy',
      github: 'https://github.com/MosNes/fantasy-football-draft'
    },
  ];

  const currentProjects = Projects

  return (
    
      <div className="flex-row project-container" >
        {currentProjects.map((project, i) => (
          <section className="container">
          <div className={`img ${project.src}`}>
          <a className='portfolio-link' href = {`${project.link}`}>Website</a>
          <a className='portfolio-link' href = {`${project.github}`}>GitHub</a>
          {/* <img
            src={require(`../../assets/${project.src}`)}
            alt={project.name}
            className={`img`}
            onClick={()=>{window.location.href = `${project.link}`;}}
            key={project.name}
          /> */}
          </div>
          </section>
        ))}
      </div>
  );
};

export default ProjectList;
