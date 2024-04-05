declare const storage: any;
export function set(key: any, value: any): any;
export function get(key: any): any;
export namespace middleware {
    function localAction(next: any): (ctx: any) => any;
}
export { storage as namespace };
