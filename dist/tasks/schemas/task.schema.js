"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.TaskSchema = new mongoose_1.Schema({
    title: String,
    description: String,
    done: Boolean
});
//# sourceMappingURL=task.schema.js.map