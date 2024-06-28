import React, { useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

const testCalendar: React.FC = () => {
  const calendarRef = useRef<FullCalendar>(null);

  const handleDateClick = (arg: any) => {
    alert(`Clicou na data: ${arg.dateStr}`);
  };

  return (
    <FullCalendar
      ref={calendarRef}
      plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]}
      initialView="timeGridWeek"
      locale="pt-br"
      dateClick={handleDateClick}
      slotMinTime="06:00:00"
      slotMaxTime="20:00:00"
      allDaySlot={false}
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek',
      }}
      buttonText={{
        today: 'Hoje',
        month: 'Mês',
        week: 'Semana',
        day: 'Dia',
      }}
    />
  );
};

export default testCalendar;
