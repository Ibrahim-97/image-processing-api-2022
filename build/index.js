"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express_1 = (0, tslib_1.__importDefault)(require("express"));
var imageResize_1 = (0, tslib_1.__importDefault)(require("./imageResize"));
var app = (0, express_1.default)();
app.get("/api/images", function (req, res) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    var filename, width, height, image, error_1;
    return (0, tslib_1.__generator)(this, function (_a) {
        switch (_a.label) {
            case 0:
                filename = req.query.filename;
                width = Number(req.query.width) || 300;
                height = Number(req.query.height) || 300;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, imageResize_1.default)(filename, width, height)];
            case 2:
                image = _a.sent();
                res.sendFile("".concat(__dirname, "/").concat(image));
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                res.status(404).json({ message: "No Such Image with this ID" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.listen(3000, function () { return console.log("Server is Running..."); });
exports.default = app;
