import * as dotenv from 'dotenv';// importar para leer la varuiable de entorno .env donde esta la calve sereta de stripe
dotenv.config(); //configurar el modulo dotenv

export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;