import { useState } from "react";
import "./App.css";
import Day from "./Day";
import FormCalendar from "./FormCalendar";

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
  "Dimanche",
];

const DAY_LETTER = DAY.map((day) => day.charAt(0));

const EVENT_LIST = [];
for (let i = 0; i <= 30; i++) {
  EVENT_LIST.push({ confirmed: false });
}

function App() {
  const [eventList, setEventList] = useState(EVENT_LIST);

  function handleClick(event) {
    const DIV_DAYS = document.querySelectorAll(".days div");
    DIV_DAYS.forEach((day) =>
      day != event.target ? day.classList.remove("selected") : null,
    );
    event.target.classList.toggle("selected");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      e.target.eventAdress.value == "" ||
      e.target.eventHour.value == "" ||
      e.target.eventName.value == ""
    ) {
      alert("Veuillez remplir tout les champs");
      return;
    }

    const DATE = [...document.querySelectorAll(".days div")];

    let selected;
    DATE.forEach((el, index) => {
      if (el.classList.contains("selected")) {
        selected = index;
      }
    });

    if (selected == null) {
      alert("Veuillez selectionner un jour");
      return;
    }

    const NEW_EVENEMENT = {
      nom: e.target[0].value,
      heure: e.target[1].value,
      lieu: e.target[2].value,
      index: selected,
      confirmed: true,
    };

    const TAB = [...eventList];
    TAB[selected] = NEW_EVENEMENT;
    setEventList(TAB);
  }

  const ROW = [];

  for (let i = 1; i <= 31; i++) {
    ROW.push(
      <Day
        className="backgroundOrange"
        key={i}
        day={i}
        onClick={handleClick}
      />,
    );
  }

  return (
    <div className="App">
      <div className="calendarApp">
        <article className="card">
          <Day className="month" key={MONTH[9]} day={MONTH[9]} />
        </article>
        <section className="grid-7">
          {DAY_LETTER.map((day, index) => (
            <Day key={index} day={day} className="days" />
          ))}
        </section>
        <section className="grid-7 days">{ROW}</section>
      </div>
      <div className="formApp">
        <FormCalendar onSubmit={handleSubmit} />
      </div>
      <div className="eventApp">
        <h2>Evénements</h2>
        {eventList
          .filter((e) => e.confirmed)
          .map((e, index) => (
            <p key={index}>
              {e.nom} - {e.lieu} : {e.index+1} {MONTH[9]} {e.heure}
            </p>
          ))}
          
      </div>
    </div>
  );
}

export default App;
