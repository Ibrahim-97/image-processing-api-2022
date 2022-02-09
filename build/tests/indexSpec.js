"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var supertest_1 = (0, tslib_1.__importDefault)(require("supertest"));
var index_1 = (0, tslib_1.__importDefault)(require("../index"));
var request = (0, supertest_1.default)(index_1.default);
describe("test endpoint responses", function () {
    it("gets the api endpoint", function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var respons;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get("/api/images?filename=madra&width=500&height=500")];
                case 1:
                    respons = _a.sent();
                    expect(respons.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
