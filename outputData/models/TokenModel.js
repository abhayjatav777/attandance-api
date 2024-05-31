"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const mongoose_1 = require("mongoose");
const TokenSchema = new mongoose_1.Schema({
    token: String,
    expiryDate: Date,
    userId: mongodb_1.ObjectId,
}, {
    timestamps: true,
});
const TokenModel = (0, mongoose_1.model)("tokens", TokenSchema);
exports.default = TokenModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5Nb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvVG9rZW5Nb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFtQztBQUVuQyx1Q0FBZ0Q7QUFFaEQsTUFBTSxXQUFXLEdBQUcsSUFBSSxpQkFBTSxDQUM1QjtJQUNFLEtBQUssRUFBRSxNQUFNO0lBQ2IsVUFBVSxFQUFFLElBQUk7SUFDaEIsTUFBTSxFQUFFLGtCQUFRO0NBQ2pCLEVBQ0Q7SUFDRSxVQUFVLEVBQUUsSUFBSTtDQUNqQixDQUNGLENBQUM7QUFFRixNQUFNLFVBQVUsR0FBdUIsSUFBQSxnQkFBSyxFQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUVwRSxrQkFBZSxVQUFVLENBQUMifQ==