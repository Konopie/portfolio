import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import ContactForm from './components/Contact/Contact';
import Resume from './components/Resume/Resume'

function App() {
  const [categories] = useState([
    {
      name: 'about',
      description: 'Who is Cody Cooper?',
    },
    { name: 'portfolio', description: 'Portfolio of projects' },
    { name: 'resume', description: "Cody's resume:" }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  const hideAll = ()=> {
    const hiddenImg = document.querySelectorAll('.img')
    hiddenImg.forEach(img => {
      img.classList.add('hidden')
    })
    const hiddenAbout = document.querySelectorAll('#about')
    hiddenAbout.forEach(About => {
      About.classList.add('hidden')
    })
    const hiddenResume = document.querySelectorAll('#resume')
    hiddenResume.forEach(Resume => {
     Resume.classList.add("hidden")})
  }

  const revealCategory = (currentCategory) => {
    if (currentCategory.name === 'portfolio'){
      const hiddenimg = document.querySelectorAll('.img')
      hiddenimg.forEach(img => {
      img.classList.remove("hidden")}) 
  }
  if (currentCategory.name === 'about'){
    const hiddentext = document.querySelectorAll('#about')
    hiddentext.forEach(text => {
    text.classList.remove("hidden")}) 
  }
  if (currentCategory.name === 'resume'){
    const hiddentext = document.querySelectorAll('#resume')
    hiddentext.forEach(text => {
    text.classList.remove("hidden")}) 
  }
  }

  const toggleHide = (currentCategory)=>{
    console.log('running toggle hide')
    if (!contactSelected) {
      hideAll();
      revealCategory(currentCategory)
    }
  }

  useEffect(()=>{
    toggleHide(currentCategory)}
  , [currentCategory])

  useEffect(()=>{
    toggleHide(currentCategory)}
  , [contactSelected])

  return (
    <div>
      <Header
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Header>
      <main className="content">
      {!contactSelected ? (
        <>
        <Content
        currentCategory={currentCategory}
        ></Content>
        <About ></About>
        <Resume ></Resume>
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
