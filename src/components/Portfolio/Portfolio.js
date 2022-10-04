import React from 'react';


const ProjectList = () => {

  const Projects = [
    {
      name: 'Run Buddy',
      link: 'https://konopie.github.io/run-buddy/',
      src: 'run-buddy.png'
    },
    {
      name: 'Cat Generator',
      link: 'https://konopie.github.io/cat-generator/',
      src: 'cat-genie.png'
    },
    {
      name: 'Hungry Guys',
      link: 'https://hungry-guys.herokuapp.com/',
      src: 'hungry-guys.png'
    },
    {
      name: 'Just Another Text Editor',
      link: 'https://konopies-text-editor.herokuapp.com/',
      src: 'JATE.png'
    },
    {
      name: 'Note Taker',
      link: 'https://tranquil-shore-49299.herokuapp.com/',
      src: 'note-taker.png'
    },
    {
      name: 'Work Day Scheduler',
      link: 'https://konopie.github.io/Day-Scheduler/',
      src: 'day-scheduler.png'
    }
  ];

  const currentProjects = Projects

  return (
    
      <div className="flex-row project-container" >
        {currentProjects.map((project, i) => (
          <img
            src={require(`../../assets/${project.src}`)}
            alt={project.name}
            className={`img `}
            onClick={()=>{window.location.href = `${project.link}`;}}
            key={project.name}
          />
        ))}
      </div>
  );
};

export default ProjectList;
