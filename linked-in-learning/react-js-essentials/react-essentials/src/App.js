import './App.css';

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s கையேந்தி பவன் 🤤</h1>
    </header>
  )
}

const stuff = [
  "Idli",
  "Dosa",
  "Vada"
];

const stuffObjects = stuff.map(
  (dishName, i) => ({ id: i, title: dishName }));

function Main({ dishes }) {
  return (
    <section>
      <p> Delicious street food on the road 🤤</p>
      <img src="https://github.com/tvsaru.png" height={200}
        alt="Saru's github profile" />
      <ul style={{ textAlign: "left" }}>
        {dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer({ year }) {
  return (
    <footer>
      <p>Copyright {year}</p>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header name="Saru" />
      <Main dishes={stuffObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
