import schedule from 'node-schedule';
import sgMail from '@sendgrid/mail';
import Cartas from '@/models/Carta';


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function scheduleEmails() {
  try {

    const cartas = await Cartas.find();

    cartas.forEach((carta) => {
      const { fecha, texto } = carta;

      if (fecha > new Date()) {
        schedule.scheduleJob(fecha, () => {
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
