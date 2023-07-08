import { useState } from 'react';
import './App.css';
import CardModel from './CardModel';
import HeadFilter from './HeadFilter';
import { getData } from './storageFunctions/storagefunctions';


function App() {
  const [filter, setFilter] = useState('storage')
  const content = { filter, setFilter }


  let dataToStorage = []
  if (filter === 'storage') {
    dataToStorage = getData()
      .filter((e) => e.qtd > 0)
      .sort((a, b) => b.qtd - a.qtd)
  }
  if (filter === 'most-used') {
    dataToStorage = getData()
      .filter((e) => e.frequecyUsed > 0)
      .sort((a, b) => b.frequecyUsed - a.frequecyUsed)
  }
  if (filter === 'catalog') {
    dataToStorage = getData()
  }

  return (
    <div className="App">
      <h1 className="no-mobile">Visualização disponível somente para smartphone</h1>
      <div className='aplication'>
        <h1>Controle de tinturas</h1>
        <HeadFilter parentState={content} />
        <div className='grade'>
          {dataToStorage.map((content) => (<CardModel key={content.name} props={{ ...content, filter }} />))}
        </div>
      </div>
    </div>
  );
}

export default App;
