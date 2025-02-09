import { scheduleEmails } from '@/lib/mails/scheduleEmail';



export async function GET(req) {
    try {
      scheduleEmails();
      return new Response(JSON.stringify({mensaje: 'correo enviado'}))
    } catch (error) {
      return new Response(
        JSON.stringify({
          error: 'Error del servidor',
          details: error.message,
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
}
