"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminValidationSchema = void 0;
const yup_1 = require("yup");
exports.adminValidationSchema = (0, yup_1.object)({
    body: (0, yup_1.object)({
        name: (0, yup_1.string)()
            .matches(/^[aA-zZ\s]+$/, "Name can't have special character")
            .trim()
            .max(18, "Name too long")
            .required("Name can't be empty"),
        mobile: (0, yup_1.string)()
            .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "phone number invalid")
            .trim()
            .required("Phone is required"),
        email: (0, yup_1.string)().email("Enter a valid email").required("Email is required"),
        password: (0, yup_1.string)()
            .matches(/^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/, "password must contain one of special, lower, upper character")
            .trim()
            .required("Enter password"),
    }),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4udmFsaWRhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdmFsaWRhdG9ycy9hZG1pbi52YWxpZGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2QkFBcUM7QUFFeEIsUUFBQSxxQkFBcUIsR0FBRyxJQUFBLFlBQU0sRUFBQztJQUMxQyxJQUFJLEVBQUUsSUFBQSxZQUFNLEVBQUM7UUFDWCxJQUFJLEVBQUUsSUFBQSxZQUFNLEdBQUU7YUFDWCxPQUFPLENBQUMsY0FBYyxFQUFFLG1DQUFtQyxDQUFDO2FBQzVELElBQUksRUFBRTthQUNOLEdBQUcsQ0FBQyxFQUFFLEVBQUUsZUFBZSxDQUFDO2FBQ3hCLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQztRQUNsQyxNQUFNLEVBQUUsSUFBQSxZQUFNLEdBQUU7YUFDYixPQUFPLENBQUMsMkJBQTJCLEVBQUUsc0JBQXNCLENBQUM7YUFDNUQsSUFBSSxFQUFFO2FBQ04sUUFBUSxDQUFDLG1CQUFtQixDQUFDO1FBQ2hDLEtBQUssRUFBRSxJQUFBLFlBQU0sR0FBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztRQUUxRSxRQUFRLEVBQUUsSUFBQSxZQUFNLEdBQUU7YUFDZixPQUFPLENBQ04scURBQXFELEVBQ3JELDhEQUE4RCxDQUMvRDthQUNBLElBQUksRUFBRTthQUNOLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztLQUM5QixDQUFDO0NBQ0gsQ0FBQyxDQUFDIn0=