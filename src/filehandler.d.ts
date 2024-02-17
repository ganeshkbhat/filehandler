/**
 *
 * Package: fs-handlers
 * Author: Ganesh B
 * Description: Read and Write files in files using streaming
 * Install: npm i fs-handlers --save
 * Github: https://github.com/ganeshkbhat/filehandler
 * npmjs Link: https://www.npmjs.com/package/fs-handlers
 * File: index.js
 * File Description: Read and Write files in files using streaming
 *
 *
*/
/// <reference types="node" />
/**
 *
 *
 * @export
 * @interface FileHandlerStaticInterface
 */
export declare class FileHandlerStaticInterface {
    static readFileStreaming: (filePath: string | URL, options?: BufferEncoding | any | undefined) => Promise<any>;
    static writeFileStreaming: (filePath: string | URL, iterableData: any[], options?: BufferEncoding | any | undefined) => Promise<any>;
}
/**
 *
 *
 * @export
 * @interface FileHandlerInterface
 */
export interface FileHandlerInterface {
    filePath: string | URL;
    options: BufferEncoding | any | undefined;
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
     * @param {string | URL} filePath
     * @param {(string | null | undefined)} [options]
     * @return {*}  {Promise<any>}
     * @memberof FileHandlerStatic
     */
    static readFileStreaming(filePath: string | URL, options?: BufferEncoding | any | undefined): Promise<any>;
    /**
     *
     *
     * @param {string | URL} filePath
     * @param {any[]} iterableData
     * @param {(string | null | undefined)} [options]
     * @return {*}  {Promise<any>}
     * @memberof FileHandlerStatic
     */
    static writeFileStreaming(filePath: string | URL, iterableData: any[], options?: BufferEncoding | any | undefined): Promise<any>;
}
/**
 *
 *
 * @export
 * @class FileHandler
 * @implements {FileHandlerInterface}
 */
export declare class FileHandler implements FileHandlerInterface {
    filePath: string | URL;
    options: BufferEncoding | any | undefined;
    /**
     * Creates an instance of FileHandler.
     * @param {string | URL} filePath
     * @param {(string | null | undefined)} [options]
     * @memberof FileHandler
     */
    constructor(filePath: string | URL, options?: BufferEncoding | any | undefined);
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