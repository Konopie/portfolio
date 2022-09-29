import React, { useEffect} from 'react';
import Portfolio from '../Portfolio/Portfolio';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Content({ currentCategory }) {
  const { name, description } = currentCategory;

  

  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <Portfolio />
    </section>
  );
}

export default Content;