'use client';
import { useState } from 'react';
import dayjs from 'dayjs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';

export default function modal() {
  const [clientName, setClientName] = useState('');
  const [data, setData] = useState('');
  const [time, setTime] = useState('');
  const [petName, setPetName] = useState('');
  const [reason, setReason] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleCancel = () => {
    setClientName('');
    setData('');
    setPetName('');
    setReason('');
    setTime('');
    setErrorMessage('');
    setModalOpen(false);
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidDate = (dateString: string) => {
      const regex = /^\d{4}-\d{2}-\d{2}$/;

      if (!regex.test(dateString)) {
        return false;
      }

      const year = parseInt(dateString.substring(0, 4), 10);
      if (isNaN(year) || year.toString().length !== 4) {
        return false;
      }

      return true;
    };
    if (!clientName || !data || !time || !petName || !reason) {
      setErrorMessage('Todos os campos devem ser preenchidos.');
      return;
    }
    if (!isValidDate(data)) {
      setErrorMessage('O ano deve conter apenas 4 dígitos');
      return;
    }

    const dateTimeString = dayjs(`${data} ${time}`).toISOString();
    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'VetQuery/json',
        },
        body: JSON.stringify({
          clientName,
          data: dateTimeString,
          petName,
          reason,
        }),
      });

      if (response.ok) {
        console.log('Dados enviados com sucesso!');
        console.log(response.json());
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
    }

    handleCancel();
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
          <DialogTitle>Registre um agendamento</DialogTitle>
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
                  Data
                </label>
                <input
                  type="date"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={(e) => setData(e.target.value)}
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
              <div className="flex justify-between">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={handleCancel}
                >
                  Cancelar
                </button>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Cadastrar
                </button>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
