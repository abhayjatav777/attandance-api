"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerStorage = exports.multerImageWhiteList = exports.multerErrorHandler = void 0;
const multer_1 = __importDefault(require("multer"));
const jsonResponse_1 = require("../../utils/jsonResponse");
const multerErrorHandler = (upload, req, res, next) => {
    upload(req, res, (err) => {
        if (err instanceof multer_1.default.MulterError) {
            // A Multer error occurred when uploading.
            return (0, jsonResponse_1.JsonResponse)(res, {
                statusCode: 400,
                status: "error",
                title: "Error",
                message: err.message,
            });
        }
        else if (err) {
            // An unknown error occurred when uploading.
            return (0, jsonResponse_1.JsonResponse)(res, {
                statusCode: 400,
                status: "error",
                title: "file upload error.",
                message: err.message,
            });
        }
        next();
    });
};
exports.multerErrorHandler = multerErrorHandler;
exports.multerImageWhiteList = ["image/png", "image/jpeg", "image/jpg"];
exports.multerStorage = multer_1.default.memoryStorage();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGVyLm1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWlkZGxld2FyZS9tdWx0ZXIvbXVsdGVyLm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsb0RBQTRCO0FBRTVCLDJEQUF3RDtBQUVqRCxNQUFNLGtCQUFrQixHQUFHLENBQ2hDLE1BTUMsRUFDRCxHQUFZLEVBQ1osR0FBYSxFQUNiLElBQWtCLEVBQ2xCLEVBQUU7SUFDRixNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ3ZCLElBQUksR0FBRyxZQUFZLGdCQUFNLENBQUMsV0FBVyxFQUFFO1lBQ3JDLDBDQUEwQztZQUMxQyxPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7Z0JBQ3ZCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLE1BQU0sRUFBRSxPQUFPO2dCQUNmLEtBQUssRUFBRSxPQUFPO2dCQUNkLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTzthQUNyQixDQUFDLENBQUM7U0FDSjthQUFNLElBQUksR0FBRyxFQUFFO1lBQ2QsNENBQTRDO1lBQzVDLE9BQU8sSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtnQkFDdkIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsS0FBSyxFQUFFLG9CQUFvQjtnQkFDM0IsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO2FBQ3JCLENBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxFQUFFLENBQUM7SUFDVCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQWpDVyxRQUFBLGtCQUFrQixzQkFpQzdCO0FBRVcsUUFBQSxvQkFBb0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFFaEUsUUFBQSxhQUFhLEdBQUcsZ0JBQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyJ9