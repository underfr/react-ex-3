import "./App.css";
import Day from "./Day";

const MONTH = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const DAY = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche"
]

const DAY_LETTER = DAY.map(day => day.charAt(0))

function App() {

  function handleClick(e){
    document.querySelectorAll(".selected").forEach(el => {
      el.classList.remove("selected")
    })
    e.target.classList.add("selected")
  }

  const ROW = []

  for(let i=1; i<=31; i++){
    ROW.push(<Day className="backgroundOrange" key={i} day={i} onClick={handleClick}/>)
  }

  return (
    <>
      <article className="card">
        <Day className="month" key={MONTH[9]} day={MONTH[9]}/>
      </article>
      <section className="grid-7">
        {DAY_LETTER.map((day, index) => <Day key={index} day={day} className="days"/>)}
      </section>
      <section className="grid-7 days">
        {ROW}
      </section>
    </>
  );
}

export default App;
