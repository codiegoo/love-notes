// lib/scheduleEmails.js
import schedule from 'node-schedule';
import Carta from '@/models/Carta';
import { sendEmail } from './SendEmail';

export async function scheduleEmails() {
  const cartas = await Carta.find();

  cartas.forEach((carta) => {
    const { fecha, hora, texto } = carta;
    const [horaStr, minutoStr] = hora.split(':');
    const fechaEnvio = new Date(fecha);
    fechaEnvio.setHours(parseInt(horaStr), parseInt(minutoStr), 0, 0);

    schedule.scheduleJob(fechaEnvio, () => {

      sendEmail('nidian201056@gmail.com', 'Nota de amor', texto);
    });
  });
}
