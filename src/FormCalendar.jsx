export default function FormCalendar({onSubmit}){

    return (
        <div className="formCalendar">
        <h2>Nouvel Evénement</h2>
        <form action="" onSubmit={onSubmit} className="form">
            <input type="text" name="eventName" placeholder="Nom événement"/>
            <input type="text" name="eventHour" placeholder="12H00"/>
            <input type="text" name="eventAdress" placeholder="Adresse"/>
            <input type="submit" value="Envoyer" />
        </form>
        </div>
    )
}