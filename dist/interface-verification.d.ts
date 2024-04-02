declare module 'interface-verification' {
    export const getElement: <Interface extends HTMLElement>(id: string, instance: new () => Interface) => Interface;
}