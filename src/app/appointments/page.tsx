"use client";

import { useSearchParams } from "next/navigation";

async function AppointmentDay() {
	const searchParams = useSearchParams();
	const date = searchParams.get("date"); //Parametro da pagina em date

	const response = await fetch("/api", {
		method: "get",
		body: JSON.stringify({ date: date }),
	});
	if (!response) return;

	return (
		<div className="container mx-auto mt-10">
			<h1>{date}</h1>
		</div>
	);
}

export default AppointmentDay;
