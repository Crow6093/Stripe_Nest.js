import { Injectable } from '@nestjs/common';
import { Stripe } from 'stripe';
import {STRIPE_SECRET_KEY} from '../stripeConfig'; //importar la clave secreta de stripe desde el archivo de configuracion


@Injectable()
export class StripeService {

  stripe  = new Stripe(STRIPE_SECRET_KEY);
  // primera parte de la clave secreta de la cuenta de stripe  desde la web https://stripe.com
  //targetas de prueba para probar que el metodo funciona https://docs.stripe.com/testing#cards

//orden de compra
async createCheckoutSession(id: Request, res: Response){ //en los parametros deberia pasar un json con los datos de producto a pagar 
const session = await this.stripe.checkout.sessions.create({
    line_items: [
      //primer profucto
        {
          price_data: {
            product_data: {
              name: 'T-shirt',
            },
            currency: 'eur', //modena    usd, eur, mxn
            unit_amount: 2000,// en centimos , es decir 20$
          },
          quantity: 1, //cantidad de producto
        },
      //fin primer profucto
    ],
    payment_method_types: [
      'card',
    ],  
    mode: 'payment', //modo de pago , payment es para pago directo ( unico pago)

    success_url: 'http://localhost:3000/success-payment', //rusta para pago correcto
    cancel_url: 'http://localhost:3000/failed-payment', //rusta para pago incorrecto

  })
  return session;
}


//Success payment
successPayment(){
  return `success payment`;
}

//failed payment
failedPayment(){
  return `failed payment`;
}

}
