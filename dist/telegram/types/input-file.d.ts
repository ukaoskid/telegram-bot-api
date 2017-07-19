/// <reference types="node" />
import { Stream } from "stream";
export declare class InputFile {
    /**
     * Filename and ContentType are (not mandatory) needed only if you define a Readable.
     * If you are using the file with a file path string them are not needed.
     * @param {string | "stream".internal.Readable} file
     * @param {string} filename
     * @param {string} contentType
     * @returns {{value: ("fs".ReadStream | "stream".internal.Readable); options: {filename: (string | T); contentType: (string | any)}}}
     */
    constructor(file: string | Stream, filename?: string, contentType?: string);
}
