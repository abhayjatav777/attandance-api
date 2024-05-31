"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qrCodeQuery = void 0;
const controllers_1 = require("../../../controllers");
const qrCodeQuery = (router) => {
    router.get("/generate-qr", controllers_1.controllers.adminControllers.QR.QrString);
};
exports.qrCodeQuery = qrCodeQuery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVJHZW5lcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcm91dGVzL2FkbWluL3F1ZXJ5L1FSR2VuZXJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHNEQUFtRDtBQUU1QyxNQUFNLFdBQVcsR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFFO0lBQzVDLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLHlCQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZFLENBQUMsQ0FBQztBQUZXLFFBQUEsV0FBVyxlQUV0QiJ9