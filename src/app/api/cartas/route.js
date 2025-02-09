import { getCartas } from '@/utils/dbFunctions';

export async function GET(req) {

  try {
    const cartas = await getCartas()
    return new Response(JSON.stringify({cartas}), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
    
  } catch (error) {
    console.error('Error al recuperar las cartas:', error);
    return new Response(
      JSON.stringify({
        error: 'Error del servidor',
        details: error.message,
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
