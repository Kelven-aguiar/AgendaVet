'use client';
import Modal from './modal';

function AppointmentDay() {
  const appointments = [
    {
      id: 1,
      time: '09:00',
      client: 'Cara1',
      pet: 'Bixo1',
      reason: 'Vacinação',
    },
    {
      id: 2,
      time: '10:30',
      client: 'Cara2',
      pet: 'Bixo2',
      reason: 'Consulta de rotina',
    },
    {
      id: 2,
      time: '10:30',
      client: 'Cara2',
      pet: 'Bixo2',
      reason: 'Consulta de rotina',
    },
  ];
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Agenda do Dia</h1>
      <Modal></Modal>
      <div className="grid grid-cols-1 gap-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="bg-gray-100 p-4 rounded-lg shadow-md"
          >
            <p className="text-lg font-semibold">{appointment.time}</p>
            <p>
              <span className="font-semibold">Cliente:</span>{' '}
              {appointment.client}
            </p>
            <p>
              <span className="font-semibold">Pet:</span> {appointment.pet}
            </p>
            <p>
              <span className="font-semibold">Motivo:</span>{' '}
              {appointment.reason}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppointmentDay;
