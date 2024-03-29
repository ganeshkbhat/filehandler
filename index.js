/**
 *
 * Package: fs-handlers
 * Author: Ganesh B
 * Description: Read and Write files in files using streaming
 * Install: npm i fs-handlers --save
 * Github: https://github.com/ganeshkbhat/filehandler
 * npmjs Link: https://www.npmjs.com/package/fs-handlers
 * File: index.js
 * File Description: Read and Write files in files using streaming
 *
 *
*/
/* eslint no-console: 0 */
'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileHandler = exports.FileHandlerStatic = exports.FileHandlerStaticInterface = void 0;
var fs = __importStar(require("node:fs"));
var node_buffer_1 = require("node:buffer");
var node_events_1 = require("node:events");
var util = __importStar(require("node:util"));
var stream = __importStar(require("node:stream"));
/**
 *
 *
 * @export
 * @class FileHandlerStaticInterface
 */
var FileHandlerStaticInterface = /** @class */ (function () {
    function FileHandlerStaticInterface() {
    }
    return FileHandlerStaticInterface;
}());
exports.FileHandlerStaticInterface = FileHandlerStaticInterface;
/**
 *
 *
 * @export
 * @class FileHandlerStatic
 * @implements {FileHandlerStaticInterface}
 */
var FileHandlerStatic = /** @class */ (function () {
    function FileHandlerStatic() {
    }
    /**
     *
     *
     * @param {string | URL} filePath
     * @param {(string | null | undefined)} [options]
     * @return {*}  {Promise<any>}
     * @memberof FileHandlerStatic
     */
    FileHandlerStatic.readFileStreaming = function (filePath, options) {
        return new Promise(function (resolve, reject) {
            var readStream = fs.createReadStream(filePath, options || {});
            var chunks = [];
            // readerStream.setEncoding(encoding || { encoding: 'UTF8' });
            readStream.on('error', function (err) { reject(err); });
            readStream.on('data', function (chunk) { chunks.push(chunk); });
            readStream.on('end', function () {
                node_buffer_1.Buffer.isBuffer(chunks[0]) ? resolve(node_buffer_1.Buffer.concat(chunks)) : resolve(chunks.join(""));
            });
        });
    };
    /**
     *
     *
     * @param {string | URL} filePath
     * @param {any[]} iterableData
     * @param {(string | null | undefined)} [options]
     * @return {*}  {Promise<any>}
     * @memberof FileHandlerStatic
     */
    FileHandlerStatic.writeFileStreaming = function (filePath, iterableData, options) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var finished, writable, _a, iterableData_1, iterableData_1_1, chunk, e_1_1, e_2;
            var _b, e_1, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 15, , 16]);
                        finished = util.promisify(stream.finished);
                        writable = fs.createWriteStream(filePath, options || "utf8");
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 7, 8, 13]);
                        _a = true, iterableData_1 = __asyncValues(iterableData);
                        _e.label = 2;
                    case 2: return [4 /*yield*/, iterableData_1.next()];
                    case 3:
                        if (!(iterableData_1_1 = _e.sent(), _b = iterableData_1_1.done, !_b)) return [3 /*break*/, 6];
                        _d = iterableData_1_1.value;
                        _a = false;
                        chunk = _d;
                        if (!!writable.write(chunk)) return [3 /*break*/, 5];
                        return [4 /*yield*/, (0, node_events_1.once)(writable, 'drain')];
                    case 4:
                        _e.sent();
                        _e.label = 5;
                    case 5:
                        _a = true;
                        return [3 /*break*/, 2];
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 13];
                    case 8:
                        _e.trys.push([8, , 11, 12]);
                        if (!(!_a && !_b && (_c = iterableData_1.return))) return [3 /*break*/, 10];
                        return [4 /*yield*/, _c.call(iterableData_1)];
                    case 9:
                        _e.sent();
                        _e.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13:
                        writable.end();
                        return [4 /*yield*/, finished(writable)];
                    case 14:
                        _e.sent();
                        resolve(true);
                        return [3 /*break*/, 16];
                    case 15:
                        e_2 = _e.sent();
                        reject(e_2);
                        return [3 /*break*/, 16];
                    case 16: return [2 /*return*/];
                }
            });
        }); });
    };
    return FileHandlerStatic;
}());
exports.FileHandlerStatic = FileHandlerStatic;
/**
 *
 *
 * @export
 * @class FileHandler
 * @implements {FileHandlerInterface}
 */
var FileHandler = /** @class */ (function () {
    /**
     * Creates an instance of FileHandler.
     * @param {string | URL} filePath
     * @param {(string | null | undefined)} [options]
     * @memberof FileHandler
     */
    function FileHandler(filePath, options) {
        // if (!filePath || !options) {
        //   throw new Error('file path and options have to provided \n\n type BufferEncoding = "ascii" | "utf8" | "utf-8" | "utf16le" | "utf-16le" | "ucs2" | "ucs-2" | "base64" | "base64url" | "latin1" | "binary" | "hex" \n\n ')
        // }
        this.filePath = filePath;
        this.options = options;
    }
    /**
     *
     *
     * @return {*}  {Promise<any>}
     * @memberof FileHandler
     */
    FileHandler.prototype.readFileStreaming = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var readStream = fs.createReadStream(_this.filePath, _this.options);
            var chunks = [];
            // readerStream.setEncoding(encoding || { encoding: 'UTF8' });
            readStream.on('error', function (err) { reject(err); });
            readStream.on('data', function (chunk) { chunks.push(chunk); });
            readStream.on('end', function () {
                node_buffer_1.Buffer.isBuffer(chunks[0]) ? resolve(node_buffer_1.Buffer.concat(chunks)) : resolve(chunks.join(""));
            });
        });
    };
    /**
     *
     *
     * @param {any[]} iterableData
     * @return {*}  {Promise<any>}
     * @memberof FileHandler
     */
    FileHandler.prototype.writeFileStreaming = function (iterableData) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var finished, writable, _a, iterableData_2, iterableData_2_1, chunk, e_3_1, e_4;
            var _b, e_3, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 15, , 16]);
                        finished = util.promisify(stream.finished);
                        writable = fs.createWriteStream(this.filePath, this.options);
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 7, 8, 13]);
                        _a = true, iterableData_2 = __asyncValues(iterableData);
                        _e.label = 2;
                    case 2: return [4 /*yield*/, iterableData_2.next()];
                    case 3:
                        if (!(iterableData_2_1 = _e.sent(), _b = iterableData_2_1.done, !_b)) return [3 /*break*/, 6];
                        _d = iterableData_2_1.value;
                        _a = false;
                        chunk = _d;
                        if (!!writable.write(chunk)) return [3 /*break*/, 5];
                        return [4 /*yield*/, (0, node_events_1.once)(writable, 'drain')];
                    case 4:
                        _e.sent();
                        _e.label = 5;
                    case 5:
                        _a = true;
                        return [3 /*break*/, 2];
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        e_3_1 = _e.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 13];
                    case 8:
                        _e.trys.push([8, , 11, 12]);
                        if (!(!_a && !_b && (_c = iterableData_2.return))) return [3 /*break*/, 10];
                        return [4 /*yield*/, _c.call(iterableData_2)];
                    case 9:
                        _e.sent();
                        _e.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        if (e_3) throw e_3.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13:
                        writable.end();
                        return [4 /*yield*/, finished(writable)];
                    case 14:
                        _e.sent();
                        resolve(true);
                        return [3 /*break*/, 16];
                    case 15:
                        e_4 = _e.sent();
                        reject(e_4);
                        return [3 /*break*/, 16];
                    case 16: return [2 /*return*/];
                }
            });
        }); });
    };
    return FileHandler;
}());
exports.FileHandler = FileHandler;
exports.default = {
    FileHandler: FileHandler,
    FileHandlerStatic: FileHandlerStatic
};
//# sourceMappingURL=index.js.map