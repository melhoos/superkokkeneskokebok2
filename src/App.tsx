import React from 'react';
import './styles/App.scss';
import Logo from './components/logo';
import Footer from './components/footer';
import Filters from './components/filters';
import Recipies from './components/recipies';

function App(): JSX.Element {
  return (
    <div className="App">
      <header>
        <Logo />
      </header>
      <main>
        <Filters />
        <Recipies />
      </main>
      <Footer />
    </div>
  );
}

export default App;
