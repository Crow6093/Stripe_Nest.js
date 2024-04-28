import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { CreateStripeDto } from './dto/create-stripe.dto';


@Controller()
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}
  
//orden de compra
@Post('/create-checkout-session')
createCheckoutSession(@Body() req: Request, res: Response) {
  return this.stripeService.createCheckoutSession(req, res);
}
//pago excitoso
@Get('/success-payment')
successPayment(@Body() createStripeDto: CreateStripeDto) {
  return this.stripeService.successPayment();
}
//poasgo fallido
@Get('/failed-payment')
failedPayment(@Body() createStripeDto: CreateStripeDto) {
  return this.stripeService.failedPayment();
}


}
