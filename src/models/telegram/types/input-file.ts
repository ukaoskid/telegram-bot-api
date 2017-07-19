import * as fs from "fs";
import * as mime from "mime-types";
import { Readable, Stream } from "stream";

const InputFilePattern = (filePath = "", readStream: Stream = null, filename = "", contentType = "") => {

    return {
      value: (!readStream) ? fs.createReadStream(filePath) : readStream,
      options: {
        filename: (!readStream) ? filePath.split("/").pop() : filename,
        contentType: (!readStream) ? mime.contentType(filePath) : contentType
      }
    }
};

export class InputFile {

  /**
   * Filename and ContentType are (not mandatory) needed only if you define a Readable.
   * If you are using the file with a file path string them are not needed.
   * @param {string | "stream".internal.Readable} file
   * @param {string} filename
   * @param {string} contentType
   * @returns {{value: ("fs".ReadStream | "stream".internal.Readable); options: {filename: (string | T); contentType: (string | any)}}}
   */
  constructor(file: string | Stream, filename?: string, contentType?: string) {

    if (file instanceof Stream) {
      return InputFilePattern("", file, filename, contentType);
    } else {
      return InputFilePattern(file, null, filename, contentType);
    }
  }
}