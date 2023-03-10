import React from 'react';
import portfolio from '../../data/portfolio';
import PortfolioItem from './PortfolioItem';
import Title from './Title';

function Portfolio() {
   return (
      <>
      <div className='margin-auto'>
         <Title >&lt;projects&gt;</Title>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center px-4">
         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xlg:grid-cols-3 gap-4 ">
            {portfolio.map(project => (
               <PortfolioItem key={project.title}
                    imgURL={project.imgURL}
                    title={project.title}
                    stack={project.stack}
                    link={project.link}
               />
            ))}
         </div>
      </div>
      <div className='margin-auto mt-6'>
         <Title >&lt;/projects&gt;</Title>
      </div>
      </>)
}

export default Portfolio;