"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var image_js_1 = require("image-js");
function imageResize(filename, width, height) {
    var _this = this;
    return new Promise(function (resolve, reject) { return (0, tslib_1.__awaiter)(_this, void 0, void 0, function () {
        var image, resImage, error_1;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, image_js_1.Image.load("".concat(__dirname, "/images/").concat(filename, ".jpg"))];
                case 1:
                    image = _a.sent();
                    resImage = image.resize({ width: width, height: height });
                    return [4 /*yield*/, resImage.save("".concat(__dirname, "/public/").concat(filename, "-").concat(width, "x").concat(height, ".jpg"))];
                case 2:
                    _a.sent();
                    resolve("public/".concat(filename, "-").concat(width, "x").concat(height, ".jpg"));
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    reject(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
}
exports.default = imageResize;
