import { getElementWithId, getElementsWithClassName, getFirstElementWithClassName, getElementsWithName, getFirstElementWithName } from '../dist/instance-verification.mjs'

const btn = getElementWithId('btn', HTMLButtonElement)

const executeFunction = () => {
    alert('it Works!')
    const text = getFirstElementWithClassName('text', HTMLTextAreaElement)
    btn.classList.add('invisible')
    setTimeout(()=>btn.style.display='none', 1000)

    text.classList.add('redBorder')

    const li = getElementsWithName('redColor', HTMLLIElement)

    li.forEach((e) => {
        e.classList.add('redColor')
    })

    const tr = getFirstElementWithName('TR', HTMLTableRowElement)

    tr.classList.add('firstTR')

    const inputs = getElementsWithClassName('inputs', HTMLInputElement)
}

btn?.addEventListener('click', executeFunction)



