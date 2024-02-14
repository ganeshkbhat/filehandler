/**
 *
 * Package: stream-fs
 * Author: Ganesh B
 * Description: Read and Write files in files using streaming
 * Install: npm i stream-fs --save
 * Github: https://github.com/ganeshkbhat/filehandler
 * npmjs Link: https://www.npmjs.com/package/stream-fs
 * File: index.js
 * File Description: Read and Write files in files using streaming
 *
 *
*/
/**
 *
 *
 * @export
 * @interface FileHandlerStaticInterface
 */
export interface FileHandlerStaticInterface {
    readFileStreaming: (filePath: string, options?: object | null | undefined) => Promise<any>;
    writeFileStreaming: (filePath: string, iterableData: any[], options?: object | null | undefined) => Promise<any>;
}
/**
 *
 *
 * @export
 * @interface FileHandlerInterface
 */
export interface FileHandlerInterface {
    filePath: string;
    options: object | null | undefined;
    readFileStreaming: () => Promise<any>;
    writeFileStreaming: (iterableData: any[]) => Promise<any>;
}
/**
 *
 *
 * @export
 * @class FileHandlerStatic
 * @implements {FileHandlerStaticInterface}
 */
export declare class FileHandlerStatic implements FileHandlerStaticInterface {
    /**
     *
     *
     * @param {string} filePath
     * @param {(string | null | undefined)} [options]
     * @return {*}  {Promise<any>}
     * @memberof FileHandlerStatic
     */
    readFileStreaming(filePath: string, options?: object | null | undefined): Promise<any>;
    /**
     *
     *
     * @param {string} filePath
     * @param {any[]} iterableData
     * @param {(string | null | undefined)} [options]
     * @return {*}  {Promise<any>}
     * @memberof FileHandlerStatic
     */
    writeFileStreaming(filePath: string, iterableData: any[], options?: object | null | undefined): Promise<any>;
}
/**
 *
 *
 * @export
 * @class FileHandler
 * @implements {FileHandlerInterface}
 */
export declare class FileHandler implements FileHandlerInterface {
    filePath: string;
    options: object | null | undefined;
    /**
     * Creates an instance of FileHandler.
     * @param {string} filePath
     * @param {(string | null | undefined)} [options]
     * @memberof FileHandler
     */
    constructor(filePath: string, options?: object | null | undefined);
    /**
     *
     *
     * @return {*}  {Promise<any>}
     * @memberof FileHandler
     */
    readFileStreaming(): Promise<any>;
    /**
     *
     *
     * @param {any[]} iterableData
     * @return {*}  {Promise<any>}
     * @memberof FileHandler
     */
    writeFileStreaming(iterableData: any[]): Promise<any>;
}
declare const _default: {
    FileHandler: typeof FileHandler;
    FileHandlerStatic: typeof FileHandlerStatic;
};
export default _default;
//# sourceMappingURL=filehandler.d.ts.map