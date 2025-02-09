import { dbConnect } from "@/lib/db/dbConnect";
import Cartas from "@/models/Carta";


export async function getCartas() {
  try {
    await dbConnect();

    const cartas = await Cartas.find()
    return cartas;
  } catch (error) {
    console.error('Error al obtener las cartas:', error);
    throw error;
  }
}