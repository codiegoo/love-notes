import { google } from 'googleapis';
import dotenv from 'dotenv';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];
const TOKEN_PATH = 'token.json';

export async function authenticateGmail() {
  const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env;

  if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI) {
    throw new Error('Faltan variables de entorno necesarias');
  }

  const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

  // Implementar el flujo de autorización para obtener el token
  // Puedes seguir la guía de inicio rápido de Node.js para Gmail para este paso

  return oAuth2Client;
}
