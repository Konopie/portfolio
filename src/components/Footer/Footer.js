import React from 'react';

function Nav() {

  return (
    <footer className="footer">
    <h2>Made With 💕 By Cody Cooper</h2>
    <ul className="list-container ">
        <li className='list-item'>
            <a className='list-link' href="https://stackoverflow.com/users/18122763/konopi">Stack Overflow</a>
        </li>
        <li className='list-item'>
            <a className='list-link' href="https://github.com/Konopie">GitHub</a>
        </li>
        <li className='list-item'>
            <a className='list-link' href="https://placeholder.com/">LinkedIn</a>
        </li>
    </ul>
</footer>
  );
}

export default Nav;