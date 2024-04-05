export const namespace: any;
export function set(key: any, value: any): void;
export function get(key: any): any;
export namespace middleware {
    function localAction(next: any): (ctx: any) => Promise<any>;
}
