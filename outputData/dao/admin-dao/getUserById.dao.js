"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const models_1 = require("../../models");
const getUserById = (id) => {
    return models_1.models.admin.findOne({ _id: id });
};
exports.getUserById = getUserById;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0VXNlckJ5SWQuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Rhby9hZG1pbi1kYW8vZ2V0VXNlckJ5SWQuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFzQztBQUcvQixNQUFNLFdBQVcsR0FBRyxDQUFDLEVBQVUsRUFBRSxFQUFFO0lBQ3hDLE9BQU8sZUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUMzQyxDQUFDLENBQUM7QUFGVyxRQUFBLFdBQVcsZUFFdEIifQ==