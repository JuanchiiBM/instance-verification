const e=(e,t)=>{const n=document.getElementById(e);if(n instanceof t)return n;throw new Error(`There is no element ${t.name} that has the id: '${e}'`)},t=(e,t)=>{const n=document.getElementsByClassName(e);return Array.from(n).forEach((n,r)=>{if(!(n instanceof t))throw new Error(`The children element '${r}' with the class: '${e}' isn't an ${t.name}`)}),n},n=(e,t)=>{const n=document.getElementsByName(e);return Array.from(n).forEach((n,r)=>{if(!(n instanceof t))throw new Error(`The children element '${r}' with the class: '${e}' isn't an ${t.name}`)}),n},r=(e,t)=>{const n=document.getElementsByClassName(e)[0];if(n instanceof t)return n;throw new Error(`There is no element ${t.name} that has the class: '${e}'`)},o=(e,t)=>{const n=document.getElementsByName(e)[0];if(n instanceof t)return n;throw new Error(`There is no element ${t.name} that has the name: '${e}'`)};export{e as getElementWithId,t as getElementsWithClassName,n as getElementsWithName,r as getFirstElementWithClassName,o as getFirstElementWithName};
//# sourceMappingURL=instance-verification.modern.mjs.map