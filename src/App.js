import Header from './components/Header';

function App() {

  let name = 'everett';

  return (
    <div className="container">
      <Header/>
      <p>Hello world it is {name}</p>
    </div>
  );
}

export default App;
