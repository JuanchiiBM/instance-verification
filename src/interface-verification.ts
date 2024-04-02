export const getElement = <Element extends HTMLElement>(id: string, instance: { new(): Element }): Element => {
    const element = document.getElementById(id)
    if (element instanceof instance) {
        return element
    } else {
        throw new Error(`There is no element ${instance} that has the id: ${id}`)
    }
}