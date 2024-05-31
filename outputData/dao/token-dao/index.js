"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenDao = void 0;
const deleteUserTokens_dao_1 = require("./deleteUserTokens.dao");
const generateToken_dao_1 = require("./generateToken.dao");
const generateTokenForUsers_1 = require("./generateTokenForUsers");
const getToken_1 = require("./getToken");
const verifyToken_dao_1 = require("./verifyToken.dao");
exports.tokenDao = {
    generateAuthToken: generateToken_dao_1.generateAuthToken,
    verifyTokenDao: verifyToken_dao_1.verifyTokenDao,
    generateTokenForUsers: generateTokenForUsers_1.generateTokenForUsers,
    getToken: getToken_1.getToken,
    removeTokens: deleteUserTokens_dao_1.deleteUserTokensDao,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGFvL3Rva2VuLWRhby9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpRUFBNkQ7QUFDN0QsMkRBQXdEO0FBQ3hELG1FQUFnRTtBQUNoRSx5Q0FBc0M7QUFFdEMsdURBQW1EO0FBRXRDLFFBQUEsUUFBUSxHQUFHO0lBQ3RCLGlCQUFpQixFQUFFLHFDQUFpQjtJQUNwQyxjQUFjLEVBQUUsZ0NBQWM7SUFDOUIscUJBQXFCLEVBQUUsNkNBQXFCO0lBQzVDLFFBQVEsRUFBRSxtQkFBUTtJQUNsQixZQUFZLEVBQUUsMENBQW1CO0NBQ2xDLENBQUMifQ==