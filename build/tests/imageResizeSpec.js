"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var imageResize_1 = (0, tslib_1.__importDefault)(require("../imageResize"));
it("should get the image path", function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    var image;
    return (0, tslib_1.__generator)(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, imageResize_1.default)("naruto", 500, 500)];
            case 1:
                image = _a.sent();
                expect(image).toEqual("public/naruto-500x500.jpg");
                return [2 /*return*/];
        }
    });
}); });
