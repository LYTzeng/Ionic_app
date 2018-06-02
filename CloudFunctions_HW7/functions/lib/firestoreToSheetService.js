"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const sheetService = require("./services/sheetService");
const sheetColumns = require("./sheetColumns");
exports.firestoreToSheetStudent = functions.firestore.document("Student/{studentId}").onUpdate((change, context) => __awaiter(this, void 0, void 0, function* () {
    const oldStudent = change.before.data();
    const newStudent = change.after.data();
    if (oldStudent.performance.grade != newStudent.performance.grade) {
        console.log(JSON.stringify(newStudent, null, 4));
        const auth = yield sheetService.authorize();
        const queryString = `select ${sheetColumns.performance.id} where ${sheetColumns.performance.studentId} = '${newStudent.studentId}'`;
        const queryResult = yield sheetService.querySheet(auth, queryString, sheetColumns.performance.spreadsheetId, sheetColumns.performance.gid);
        if (queryResult.length > 0) {
            const performanceId = queryResult[0][0];
            const range = encodeURI(`${sheetColumns.performance.sheetName}!${sheetColumns.performance.grade}${performanceId}`);
            yield sheetService.writeSheet(auth, sheetColumns.performance.spreadsheetId, range, [[newStudent.performance.grade]]);
        }
    }
}));
//# sourceMappingURL=firestoreToSheetService.js.map