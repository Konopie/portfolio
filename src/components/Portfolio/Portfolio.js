import React from 'react';


const ProjectList = () => {

  const Projects = [
    {
      name: 'Run Buddy',
      link: 'https://konopie.github.io/run-buddy/',
      src: 'run-buddy',
      github: 'https://github.com/Konopie/run-buddy',
      description: 'Main page for an exercise app that has multiple forms and flexbox for a reactive layout'
    },
    {
      name: 'Cat Generator',
      link: 'https://konopie.github.io/cat-generator/',
      src: 'cat-genie',
      github: 'https://github.com/Konopie/cat-generator',
      description: 'Cat site that uses APIs to generate cat pictures and cat facts on request'
    },
    {
      name: 'Hungry Guys',
      link: 'https://hungry-guys.herokuapp.com/',
      src: 'hungry-guys',
      github: 'https://github.com/Konopie/hungry-guys',
      description: 'Recipie sharing platform with login, posts, and comments'
    },
    {
      name: 'Just Another Text Editor',
      link: 'https://konopies-text-editor.herokuapp.com/',
      src: 'JATE',
      github: 'https://github.com/Konopie/text-editor',
      description: 'PWA Text editor that uses IndexDB for data persistence that also utilizes service workers to function offline'
    },
    {
      name: 'Note Taker',
      link: 'https://tranquil-shore-49299.herokuapp.com/',
      src: 'note-taker',
      github: 'https://github.com/Konopie/note-taker',
      description: 'Node taker that uses local storage to store and retrieve note data'
    },
    {
      name: 'Football Fantasy',
      link: 'https://fantasy-football-draft-app.herokuapp.com/',
      src: 'football-fantasy',
      github: 'https://github.com/MosNes/fantasy-football-draft',
      description: 'Fantasy Football site that allows to create an account, a team, a league, and simultaneously start a global draft with league members on different devices'
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
          <p className='portfolio-desc'>{`${project.description}`}</p>
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
