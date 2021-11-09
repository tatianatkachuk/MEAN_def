"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    name: String,
    position: String,
    office: String,
    salary: String,
}, {
    timestamps: true,
    versionKey: false
});
exports.default = (0, mongoose_1.model)('Employee', schema);
