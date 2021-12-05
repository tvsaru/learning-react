import './App.css';

function Header() {
  return (
    <header>
      <h1>Saru's கையேந்தி பவன் 🤤</h1>
    </header>
  )
}

function Main() {
  return (
    <section>
      <p> Deliciious street food on the road 🤤</p>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>மெய்யாலுமே!</p>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
