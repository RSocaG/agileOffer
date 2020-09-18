"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let BotService = class BotService {
    onModuleInit() {
        this.botMessage();
    }
    botMessage() {
        const TelegramBot = require('node-telegram-bot-api');
        const token = '1142132320:AAE4O4pJHKU-6L-rBwxts3qJepq5RCkFJwI';
        const bot = new TelegramBot(token, { polling: true });
        bot.on('message', (msg) => {
            let hi = "hi";
            if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
                bot.sendMessage(msg.from.id, "Hello " + msg.from.first_name + " what would you like to know about me ?");
            }
        });
        bot.on('message', (msg) => {
            let hi = "/ayuda";
            if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
                bot.sendMessage(msg.from.id, "Puedes emplear los siguientes comandos : \n\n/alcaldia - Información sobre La Alcaldía \n/casas - Lista de sus propiedades \n/invitar - Invitar amigo(a) al juego\n/ayuda - Guía para utilizar el bot.\n\n");
            }
        });
        bot.on('message', (msg) => {
            let hi = "/alcaldia";
            if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
                bot.sendMessage(msg.from.id, "La Alcaldía permite que sus invitados puedan hacerse de un conjunto de propiedades que le brinden ganancias diarias para comprar nuevas propiedades o mejorar las actuales. Además, brinda la posibilidad de invertir su propio monedero de bitcoin para la compra de propiedades y aumentar su capital invitando a nuevos jugadores.");
            }
        });
        bot.on('message', (msg) => {
            let hi = "/start";
            if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
                bot.sendMessage(msg.from.id, "Bienvenidos a La Alcaldía");
                bot.sendMessage(msg.from.id, "La Alcaldía permite que sus invitados puedan hacerse de un conjunto de propiedades que le brinden ganancias diarias para comprar nuevas propiedades o mejorar las actuales. Además, brinda la posibilidad de invertir su propio monedero de bitcoin para la compra de propiedades y aumentar su capital invitando a nuevos jugadores.");
                bot.sendMessage(msg.from.id, "Puedes emplear los siguientes comandos : \n\n/alcaldia - Información sobre La Alcandía \n/casas - Lista de sus propiedades \n/invitar - Invitar amigo(a) al juego\n/ayuda - Guía para utilizar el bot.\n\n");
            }
        });
    }
};
BotService = __decorate([
    common_1.Injectable()
], BotService);
exports.BotService = BotService;
//# sourceMappingURL=bot.service.js.map