"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//lógica del servidor
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var employees_routes_1 = __importDefault(require("./routes/employees.routes"));
var cors_1 = __importDefault(require("cors"));
// Initializations
var app = (0, express_1.default)();
// Middlewares
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Routes
app.use('/api', employees_routes_1.default);
exports.default = app;
