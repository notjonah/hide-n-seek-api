"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const game_repository_1 = require("../repositories/game.repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
let GameController = class GameController {
    constructor(gameRepo) {
        this.gameRepo = gameRepo;
    }
    async setupGame(game) {
        return await this.gameRepo.create(game);
    }
};
__decorate([
    rest_1.post('/game'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Game]),
    __metadata("design:returntype", Promise)
], GameController.prototype, "setupGame", null);
GameController = __decorate([
    __param(0, repository_1.repository(game_repository_1.GameRepository)),
    __metadata("design:paramtypes", [game_repository_1.GameRepository])
], GameController);
exports.GameController = GameController;
//# sourceMappingURL=game.controller.js.map