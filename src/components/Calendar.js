import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Calendar() {
    const [date, setDate] = useState(new Date());
    const [events, setEvents] = useState([]);

    const handleDateChange = (date) => {
        setDate(date);
    };

    const handleEventCreation = () => {
        const event = prompt('Escribe el evento para este día:');
        if (event) {
            setEvents([...events, { date, event }]);
        }
    };

    return (
        <div>
            <h2>Calendario de Intercambio</h2>
            <ReactCalendar onChange={handleDateChange} value={date} />
            <button onClick={handleEventCreation}>Agendar Evento</button>

            <h3>Eventos Programados</h3>
            <ul>
                {events
                    .filter((e) => e.date.toDateString() === date.toDateString())
                    .map((e, index) => (
                        <li key={index}>{e.event}</li>
                    ))}
            </ul>
        </div>
    );
}

export default Calendar;
