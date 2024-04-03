declare module 'instance-verification' {
    export const getElementWithId: <Instance extends HTMLElement>(id: string, instance: new () => Instance) => Instance;
    export const getFirstElementWithClassName: <Instance extends HTMLElement>(className: string, instance: new () => Instance) => Instance;
    export const getElementsWithClassName: <Instance extends HTMLElement>(className: string, instance: new () => Instance) => HTMLCollectionOf<Instance>;
    export const getElementsWithName: <Instance extends HTMLElement>(name: string, instance: new () => Instance) => NodeListOf<Instance>;
    export const getFirstElementWithName: <Instance extends HTMLElement>(name: string, instance: new () => Instance) => Instance;
}