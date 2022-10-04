import React, { useEffect } from 'react';
import Nav from '../Nav/Nav'
import { capitalizeFirstLetter } from '../../utils/helpers';

function Header(props) {
    const {
        categories = [],
        setCurrentCategory,
        contactSelected,
        currentCategory,
        setContactSelected,
      } = props;
    
      useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
      }, [currentCategory]);
    
      return (
        <header>
            <h1 className='Header'>Cody Cooper</h1>
          <Nav
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
          ></Nav>
        </header>
  );
}

export default Header;