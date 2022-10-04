import React from 'react';

function Nav() {

  return (
    <footer className="footer">
    <h2>Made With 💕 By Cody Cooper</h2>
    <ul className="list-container ">
        <li className='list-item'>
            <a className='list-link' href="mailto:codycooper06@gmail.com">codycooper06@gmail.com</a>
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