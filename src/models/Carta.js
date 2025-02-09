// models/Carta.js

import mongoose from 'mongoose';

const collectionName = "notes"

const collectionSchema = new mongoose.Schema({
  fecha: {
    type: Date,
    required: true,
  },
  texto: {
    type: String,
    required: true,
  },
});

const Cartas = mongoose.models[collectionName] || mongoose.model(collectionName, collectionSchema);
export default Cartas;
