"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { useRouter } from "next/navigation";

const Calendar: React.FC = () => {
	const router = useRouter();

	const handleDateClick = (arg: { dateStr: string }) => {
		router.push(`/appointments?date=${arg.dateStr}`);
	};

	const headerToolbarOptions = {
		left: "prev,next today",
		center: "title",
		right: "dayGridMonth,timeGridWeek",
	};

	return (
		<div>
			<FullCalendar
				plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]}
				initialView="dayGridMonth"
				locale="pt-br"
				dateClick={handleDateClick}
				slotMinTime="06:00:00"
				slotMaxTime="20:00:00"
				allDaySlot={false}
				headerToolbar={headerToolbarOptions}
				buttonText={{
					today: "Hoje",
					month: "Mês",
					week: "Semana",
					day: "Dia",
				}}
			/>
		</div>
	);
};

export default Calendar;
