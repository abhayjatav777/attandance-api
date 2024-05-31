"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassValidation = void 0;
const yup_1 = require("yup");
exports.resetPassValidation = (0, yup_1.object)({
    body: (0, yup_1.object)({
        password: (0, yup_1.string)()
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "password must contain one of special, number, lower, upper character")
            .trim()
            .required("Enter password"),
    }),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXRQYXNzLnZhbGlkYXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZhbGlkYXRvcnMvcmVzZXRQYXNzLnZhbGlkYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZCQUFxQztBQUV4QixRQUFBLG1CQUFtQixHQUFHLElBQUEsWUFBTSxFQUFDO0lBQ3hDLElBQUksRUFBRSxJQUFBLFlBQU0sRUFBQztRQUNYLFFBQVEsRUFBRSxJQUFBLFlBQU0sR0FBRTthQUNmLE9BQU8sQ0FDTixnRUFBZ0UsRUFDaEUsc0VBQXNFLENBQ3ZFO2FBQ0EsSUFBSSxFQUFFO2FBQ04sUUFBUSxDQUFDLGdCQUFnQixDQUFDO0tBQzlCLENBQUM7Q0FDSCxDQUFDLENBQUMifQ==