'use client';
import { useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';

export default function Modal() {
  const [clientName, setClientName] = useState('');
  const [time, setTime] = useState('');
  const [day, setDay] = useState('');
  const [petName, setPetName] = useState('');
  const [reason, setReason] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!clientName || !time || !day || !petName || !reason) {
      setErrorMessage('Todos os campos devem ser preenchidos.');
      return;
    }

    console.log('Nome do cliente: ' + clientName);
    console.log('Horário: ' + time);
    console.log('Dia: ' + day);
    console.log('Nome do Pet: ' + petName);
    console.log('Motivo: ' + reason);

    setErrorMessage('');
    setModalOpen(false);
  };

  return (
    <Dialog open={modalOpen}>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Marcar um horário
      </button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Registre um cliente</DialogTitle>
          <DialogDescription>
            <form className="space-y-4" onSubmit={handleRegister}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nome do Cliente
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={(e) => setClientName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Horário
                </label>
                <input
                  type="time"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Dia
                </label>
                <input
                  type="date"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={(e) => setDay(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nome do Pet
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={(e) => setPetName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Motivo
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={(e) => setReason(e.target.value)}
                />
              </div>
              {errorMessage && (
                <div className="text-red-500 text-sm">{errorMessage}</div>
              )}
              <button
                onClick={handleRegister}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Cadastrar
              </button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
