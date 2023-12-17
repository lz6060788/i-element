/** 给予一个基础路径，获取到一个以此为基准计算绝对路径的方法 */
export declare function usePathAbs(basePath: string): (...paths: string[]) => string;
/** 获取相对于当前脚本执行位置的绝对路径 */
export declare const absCwd: (...paths: string[]) => string;
/** 给予一个基础路径，获取到一个以此为基准计算相对路径的方法 */
export declare function usePathRel(basePath: string): (path: string, ignoreLocalSignal?: boolean) => string;
/** 获取相对于当前脚本执行位置的相对路径 */
export declare const relCwd: (path: string, ignoreLocalSignal?: boolean) => string;
