"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEmployee = exports.deleteEmployee = exports.getEmployee = exports.createEmployee = exports.getEmployees = void 0;
// Models
var Employee_1 = __importDefault(require("../models/Employee"));
function getEmployees(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var employees;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Employee_1.default.find()];
                case 1:
                    employees = _a.sent();
                    return [2 /*return*/, res.json(employees)];
            }
        });
    });
}
exports.getEmployees = getEmployees;
;
function createEmployee(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, position, office, salary, newEmployee, employee;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, name = _a.name, position = _a.position, office = _a.office, salary = _a.salary;
                    newEmployee = { name: name, position: position, office: office, salary: salary };
                    employee = new Employee_1.default(newEmployee);
                    return [4 /*yield*/, employee.save()];
                case 1:
                    _b.sent();
                    return [2 /*return*/, res.json({
                            message: 'Employee Saved Successfully',
                            employee: employee
                        })];
            }
        });
    });
}
exports.createEmployee = createEmployee;
;
function getEmployee(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, employee;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    return [4 /*yield*/, Employee_1.default.findById(id)];
                case 1:
                    employee = _a.sent();
                    return [2 /*return*/, res.json(employee)];
            }
        });
    });
}
exports.getEmployee = getEmployee;
function deleteEmployee(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, employee;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    return [4 /*yield*/, Employee_1.default.findByIdAndRemove(id)];
                case 1:
                    employee = _a.sent();
                    return [2 /*return*/, res.json({ message: 'Employee Deleted' })];
            }
        });
    });
}
exports.deleteEmployee = deleteEmployee;
;
function updateEmployee(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, _a, name, position, salary, office, updatedEmployee;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    id = req.params.id;
                    _a = req.body, name = _a.name, position = _a.position, salary = _a.salary, office = _a.office;
                    return [4 /*yield*/, Employee_1.default.findByIdAndUpdate(id, {
                            name: name,
                            position: position,
                            salary: salary,
                            office: office
                        })];
                case 1:
                    updatedEmployee = _b.sent();
                    return [2 /*return*/, res.json({
                            message: 'Successfully updated',
                            updatedEmployee: updatedEmployee
                        })];
            }
        });
    });
}
exports.updateEmployee = updateEmployee;
