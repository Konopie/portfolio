import React, { useEffect } from 'react';
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
          <nav>
            <ul className="flex-row">
              <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                <a onClick={() => setContactSelected(true)}>Contact</a>
              </li>
              {categories.map((category) => (
                <li
                  className={`mx-1 ${
                    currentCategory.name === category.name && !contactSelected && 'navActive'
                    }`}
                  key={category.name}
                >
                  <a
                    onClick={() => {
                      setCurrentCategory(category);
                      setContactSelected(false);
                    }}
                  >
                    {capitalizeFirstLetter(category.name)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
  );
}

export default Header;