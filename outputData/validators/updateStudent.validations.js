"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.udateStudentValidatons = void 0;
const yup_1 = require("yup");
exports.udateStudentValidatons = (0, yup_1.object)({
    body: (0, yup_1.object)({
        name: (0, yup_1.string)()
            .matches(/^[aA-zZ\s]+$/, "Name can't have special character")
            .trim()
            .max(25, "Name too long"),
        mobile: (0, yup_1.string)()
            .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "phone number invalid")
            .trim(),
        email: (0, yup_1.string)().email("Enter a valid email"),
        rollNumber: (0, yup_1.string)().trim(),
    }),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlU3R1ZGVudC52YWxpZGF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWxpZGF0b3JzL3VwZGF0ZVN0dWRlbnQudmFsaWRhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkJBQXFDO0FBRXhCLFFBQUEsc0JBQXNCLEdBQUcsSUFBQSxZQUFNLEVBQUM7SUFDM0MsSUFBSSxFQUFFLElBQUEsWUFBTSxFQUFDO1FBQ1gsSUFBSSxFQUFFLElBQUEsWUFBTSxHQUFFO2FBQ1gsT0FBTyxDQUFDLGNBQWMsRUFBRSxtQ0FBbUMsQ0FBQzthQUM1RCxJQUFJLEVBQUU7YUFDTixHQUFHLENBQUMsRUFBRSxFQUFFLGVBQWUsQ0FBQztRQUMzQixNQUFNLEVBQUUsSUFBQSxZQUFNLEdBQUU7YUFDYixPQUFPLENBQUMsMkJBQTJCLEVBQUUsc0JBQXNCLENBQUM7YUFDNUQsSUFBSSxFQUFFO1FBQ1QsS0FBSyxFQUFFLElBQUEsWUFBTSxHQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO1FBQzVDLFVBQVUsRUFBRSxJQUFBLFlBQU0sR0FBRSxDQUFDLElBQUksRUFBRTtLQUM1QixDQUFDO0NBQ0gsQ0FBQyxDQUFDIn0=