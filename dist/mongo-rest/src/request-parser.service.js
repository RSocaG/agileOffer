"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RequestParserService {
    static parseQuery(query) {
        return {
            limit: Number(query.limit || 10),
            skip: Number(query.skip || 0),
        };
    }
}
exports.RequestParserService = RequestParserService;
//# sourceMappingURL=request-parser.service.js.map