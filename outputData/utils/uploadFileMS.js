"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFileMS = void 0;
const form_data_1 = __importDefault(require("form-data"));
const axios_1 = __importDefault(require("axios"));
const uploadFileMS = async (file) => {
    try {
        const formData = new form_data_1.default();
        formData.append("file", file.buffer, file.originalname);
        const headers = {
            Authorization: `Bearer ${process.env.uploadApiKey}`,
            "Content-Type": "multipart/form-data",
        };
        const response = await (0, axios_1.default)({
            url: `https://bucket.meerasolution.com/upload-file?bucketName=${process.env.msBucketName}`,
            method: "POST",
            data: formData,
            headers: headers,
        });
        if (response.status === 201) {
            return response.data.data;
        }
        else {
            throw new Error(response.data.data.message);
        }
    }
    catch (error) {
        throw new Error(error.data);
    }
};
exports.uploadFileMS = uploadFileMS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkRmlsZU1TLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL3VwbG9hZEZpbGVNUy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwwREFBaUM7QUFFakMsa0RBQTBCO0FBRW5CLE1BQU0sWUFBWSxHQUFHLEtBQUssRUFBRSxJQUF5QixFQUFFLEVBQUU7SUFDOUQsSUFBSTtRQUNGLE1BQU0sUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO1FBQ2hDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hELE1BQU0sT0FBTyxHQUFHO1lBQ2QsYUFBYSxFQUFFLFVBQVUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUU7WUFDbkQsY0FBYyxFQUFFLHFCQUFxQjtTQUN0QyxDQUFDO1FBRUYsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFBLGVBQUssRUFBQztZQUMzQixHQUFHLEVBQUUsMkRBQTJELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFO1lBQzFGLE1BQU0sRUFBRSxNQUFNO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxPQUFPLEVBQUUsT0FBTztTQUNqQixDQUFDLENBQUM7UUFFSCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO1lBQzNCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDM0I7YUFBTTtZQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDN0M7S0FDRjtJQUFDLE9BQU8sS0FBVSxFQUFFO1FBQ25CLE1BQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzdCO0FBQ0gsQ0FBQyxDQUFDO0FBeEJXLFFBQUEsWUFBWSxnQkF3QnZCIn0=