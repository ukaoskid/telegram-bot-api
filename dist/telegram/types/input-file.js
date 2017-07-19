"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const mime = require("mime-types");
const stream_1 = require("stream");
const InputFilePattern = (filePath = "", readStream = null, filename = "", contentType = "") => {
    return {
        value: (!readStream) ? fs.createReadStream(filePath) : readStream,
        options: {
            filename: (!readStream) ? filePath.split("/").pop() : filename,
            contentType: (!readStream) ? mime.contentType(filePath) : contentType
        }
    };
};
class InputFile {
    /**
     * Filename and ContentType are (not mandatory) needed only if you define a Readable.
     * If you are using the file with a file path string them are not needed.
     * @param {string | "stream".internal.Readable} file
     * @param {string} filename
     * @param {string} contentType
     * @returns {{value: ("fs".ReadStream | "stream".internal.Readable); options: {filename: (string | T); contentType: (string | any)}}}
     */
    constructor(file, filename, contentType) {
        if (file instanceof stream_1.Stream) {
            return InputFilePattern("", file, filename, contentType);
        }
        else {
            return InputFilePattern(file, null, filename, contentType);
        }
    }
}
exports.InputFile = InputFile;
