"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.App = void 0;
const cors = require("cors");
const express = require("express");
const debug_1 = require("debug");
require('express-async-errors');
class App {
    constructor() {
        this.app = express();
        this.debugLog = (0, debug_1.default)('app');
        this.config();
    }
    config() {
        const accessControl = (_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT, PATCH');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use(express.json());
        this.app.use(accessControl);
        this.app.use(cors());
    }
    start(PORT) {
        this.app.listen(PORT, () => {
            console.log('iniciado porta:', PORT);
        });
    }
}
exports.App = App;
// A execução dos testes de cobertura depende dessa exportação
exports.app = new App().app;
//# sourceMappingURL=app.js.map