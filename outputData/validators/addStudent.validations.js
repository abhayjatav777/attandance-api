"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addStudentValidatons = void 0;
const yup_1 = require("yup");
exports.addStudentValidatons = (0, yup_1.object)({
    body: (0, yup_1.object)({
        name: (0, yup_1.string)()
            .matches(/^[aA-zZ\s]+$/, "Name can't have special character")
            .trim()
            .max(25, "Name too long")
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkU3R1ZGVudC52YWxpZGF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWxpZGF0b3JzL2FkZFN0dWRlbnQudmFsaWRhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkJBQXFDO0FBRXhCLFFBQUEsb0JBQW9CLEdBQUcsSUFBQSxZQUFNLEVBQUM7SUFDekMsSUFBSSxFQUFFLElBQUEsWUFBTSxFQUFDO1FBQ1gsSUFBSSxFQUFFLElBQUEsWUFBTSxHQUFFO2FBQ1gsT0FBTyxDQUFDLGNBQWMsRUFBRSxtQ0FBbUMsQ0FBQzthQUM1RCxJQUFJLEVBQUU7YUFDTixHQUFHLENBQUMsRUFBRSxFQUFFLGVBQWUsQ0FBQzthQUN4QixRQUFRLENBQUMscUJBQXFCLENBQUM7UUFDbEMsTUFBTSxFQUFFLElBQUEsWUFBTSxHQUFFO2FBQ2IsT0FBTyxDQUFDLDJCQUEyQixFQUFFLHNCQUFzQixDQUFDO2FBQzVELElBQUksRUFBRTthQUNOLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztRQUNoQyxLQUFLLEVBQUUsSUFBQSxZQUFNLEdBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUM7UUFDMUUsUUFBUSxFQUFFLElBQUEsWUFBTSxHQUFFO2FBQ2YsT0FBTyxDQUNOLHFEQUFxRCxFQUNyRCw4REFBOEQsQ0FDL0Q7YUFDQSxJQUFJLEVBQUU7YUFDTixRQUFRLENBQUMsZ0JBQWdCLENBQUM7S0FDOUIsQ0FBQztDQUNILENBQUMsQ0FBQyJ9