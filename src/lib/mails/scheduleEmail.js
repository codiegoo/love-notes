import schedule from 'node-schedule';
import sgMail from '@sendgrid/mail';
import Cartas from '@/models/Carta';
import moment from 'moment-timezone'; // Importa moment-timezone para manejar zonas horarias

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function scheduleEmails() {
  try {

    const cartas = await Cartas.find();

    cartas.forEach((carta) => {
      const { fecha, texto } = carta;

      // Convertir la fecha de UTC a la zona horaria local
      const fechaUTC = moment(fecha); // Fecha en UTC de MongoDB
      const zonaHorariaLocal = 'America/Mexico_City'; // Reemplaza con la zona horaria de tu servidor
      const fechaLocal = fechaUTC.tz(zonaHorariaLocal);

      // Verificar si la fecha ya pasó
      if (fechaLocal > moment()) {
        schedule.scheduleJob(fechaLocal.toDate(), () => {
          const msg = {
            to: 'codiegodev@gmail.com', // Reemplaza con el correo del destinatario
            from: 'codiegodev@gmail.com', // Reemplaza con tu correo verificado en SendGrid
            subject: 'Nota de amor',
            text: texto,
          };

          sgMail
            .send(msg)
            .then(() => {
              console.log(`Correo enviado a codiegodev`);
            })
            .catch((error) => {
              console.error('Error al enviar el correo:', error);
            });
        });
      } else {
        console.log(`La fecha de envío para la carta con texto "${texto}" ya ha pasado.`);
      }
    });
  } catch (error) {
    console.error('Error al programar los correos:', error);
  }
}
