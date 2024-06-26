import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar: React.FC = () => {
  const handleDateClick = (arg: any) => {
    alert(`Clicou na data: ${arg.dateStr}`);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      locale="pt-br"
      dateClick={handleDateClick}
      dayCellContent={(e) => (
        <div className="hover-effect p-1 rounded-lg">{e.dayNumberText}</div>
      )}
    />
  );
};

export default Calendar;
