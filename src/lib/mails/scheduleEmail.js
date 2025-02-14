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
    
      // Convertimos la fecha UTC a la zona horaria local
      const fechaUTC = moment(fecha);
      const zonaHorariaLocal = 'America/Mazatlan';
      const fechaLocal = fechaUTC.tz(zonaHorariaLocal);
    
      // Tomamos solo la fecha y la hora sin minutos ni segundos
      const fechaCarta = fechaLocal.format('YYYY-MM-DD HH'); // Formato: "2025-02-14 06"
      const fechaActual = moment().tz(zonaHorariaLocal).format('YYYY-MM-DD HH');
    
      console.log(`Fecha actual: ${fechaActual}`);
      console.log(`Fecha de la carta: ${fechaCarta}`);
    
      // Comparamos solo la fecha y la hora
      if (fechaCarta === fechaActual) {
        console.log(`Enviando correo para la carta: "${texto}"`);
    
        const msg = {
          to: 'marleth201059@gmail.com',
          from: 'codiegodev@gmail.com',
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
      } else {
        console.log(`Aún no es la hora para enviar la carta: "${texto}"`);
      }
    });
    
  } catch (error) {
    console.error('Error al programar los correos:', error);
  }
}
