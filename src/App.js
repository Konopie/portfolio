import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import ContactForm from './components/Contact/Contact';

function App() {
  const [categories] = useState([
    {
      name: 'about',
      description: 'Who is Cody Cooper?',
    },
    { name: 'portfolio', description: 'Portfolio of projects' },
    { name: 'resume', description: "Cody's resume" }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  const toggleHide = (currentCategory)=>{
    if (currentCategory.name === 'portfolio'){
        const hiddenimg = document.querySelectorAll('.img')
        hiddenimg.forEach(img => {
        img.classList.remove("hidden")}) 
    }
    else if (currentCategory.name !== 'portfolio'){
    const hiddenimg = document.querySelectorAll('.img')
        hiddenimg.forEach(img => {
        img.classList.add("hidden")})}
    if (currentCategory.name === 'about'){
          const hiddentext = document.querySelectorAll('#about')
          hiddentext.forEach(text => {
          text.classList.remove("hidden")}) 
      }
    else if (currentCategory.name !== 'about'){
      const hiddentext = document.querySelectorAll('#about')
          hiddentext.forEach(text => {
          text.classList.add("hidden")})}
  }

  useEffect(()=>{
    toggleHide(currentCategory)}
  , [currentCategory])

  return (
    <div>
      <Header
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Header>
      <main>
      {!contactSelected ? (
        <>
        <Content
        currentCategory={currentCategory}
        ></Content>
        <About className="text"></About>
        </>
      ) : (
        <ContactForm id="contact"></ContactForm>
      )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
