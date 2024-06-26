"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeService = void 0;
const common_1 = require("@nestjs/common");
const stripe_1 = require("stripe");
const stripeConfig_1 = require("../stripeConfig");
let StripeService = class StripeService {
    constructor() {
        this.stripe = new stripe_1.Stripe(stripeConfig_1.STRIPE_SECRET_KEY);
    }
    async createCheckoutSession(id, res) {
        const session = await this.stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        product_data: {
                            name: 'T-shirt',
                        },
                        currency: 'eur',
                        unit_amount: 2000,
                    },
                    quantity: 1,
                },
            ],
            payment_method_types: [
                'card',
            ],
            mode: 'payment',
            success_url: 'http://localhost:3000/success-payment',
            cancel_url: 'http://localhost:3000/failed-payment',
        });
        return session;
    }
    successPayment() {
        return `success payment`;
    }
    failedPayment() {
        return `failed payment`;
    }
};
exports.StripeService = StripeService;
exports.StripeService = StripeService = __decorate([
    (0, common_1.Injectable)()
], StripeService);
//# sourceMappingURL=stripe.service.js.map