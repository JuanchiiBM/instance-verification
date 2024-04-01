export const getElement = <T extends HTMLElement>(id: string, instance: { new(): T }): T => {
    const element = document.getElementById(id);
    if (element instanceof instance) {
        return element;
    } else {
        throw new Error(`No existe un elemento ${instance} que tenga el id ${id}`);
    }
}
