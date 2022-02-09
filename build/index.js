"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express_1 = (0, tslib_1.__importDefault)(require("express"));
var image_js_1 = require("image-js");
var app = (0, express_1.default)();
app.get("/api/images", function (req, res) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    var filename, width, height, image, resImage, error_1;
    return (0, tslib_1.__generator)(this, function (_a) {
        switch (_a.label) {
            case 0:
                filename = req.query.filename;
                width = Number(req.query.width) || 300;
                height = Number(req.query.height) || 300;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, image_js_1.Image.load("".concat(__dirname, "/images/").concat(filename, ".jpg"))];
            case 2:
                image = _a.sent();
                resImage = image.resize({ width: width, height: height });
                return [4 /*yield*/, resImage.save("".concat(__dirname, "/public/").concat(filename, "-").concat(width, "x").concat(height, ".jpg"))];
            case 3:
                _a.sent();
                res.sendFile("".concat(__dirname, "/public/").concat(filename, "-").concat(width, "x").concat(height, ".jpg"));
                return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                res.json({ message: "No Such Image with this ID" });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
app.listen(5000, function () { return void console.log("Server is Running..."); });
