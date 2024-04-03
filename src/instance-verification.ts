export const getElementWithId = <Instance extends HTMLElement>(id: string, instance: { new(): Instance }): Instance => {
    const element = document.getElementById(id)
    if (element instanceof instance) {
        return element
    } else {
        throw new Error(`There is no element ${instance.name} that has the id: '${id}'`)
    } 
}

export const getElementsWithClassName = <Instance extends HTMLElement>(className: string, instance: { new(): Instance }): HTMLCollectionOf<Instance> => {
    const elements = document.getElementsByClassName(className)
    Array.from(elements).forEach((element, index) => {
        if (!(element instanceof instance)) {
            throw new Error(`The children element '${index}' with the class: '${className}' isn't an ${instance.name}`)
        }
    })
    return elements as HTMLCollectionOf<Instance>
}

export const getElementsWithName = <Instance extends HTMLElement>(name: string, instance: { new(): Instance }): NodeListOf<Instance> => {
    const elements = document.getElementsByName(name)
    Array.from(elements).forEach((element, index) => {
        if (!(element instanceof instance)) {
            throw new Error(`The children element '${index}' with the class: '${name}' isn't an ${instance.name}`)
        }
    })
    return elements as NodeListOf<Instance>
}

export const getFirstElementWithClassName = <Instance extends HTMLElement>(className: string, instance: { new(): Instance }): Instance => {
    const element = document.getElementsByClassName(className)[0]
    if (element instanceof instance) {
        return element
    } else {
        throw new Error(`There is no element ${instance.name} that has the class: '${className}'`)
    } 
}

export const getFirstElementWithName = <Instance extends HTMLElement>(name: string, instance: { new(): Instance }): Instance => {
    const element = document.getElementsByName(name)[0]
    if (element instanceof instance) {
        return element
    } else {
        throw new Error(`There is no element ${instance.name} that has the name: '${name}'`)
    } 
}