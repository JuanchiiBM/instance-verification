var e=function(e,n){var t=document.getElementById(e);if(t instanceof n)return t;throw new Error("There is no element "+n.name+" that has the id: '"+e+"'")},n=function(e,n){var t=document.getElementsByClassName(e);return Array.from(t).forEach(function(t,r){if(!(t instanceof n))throw new Error("The children element '"+r+"' with the class: '"+e+"' isn't an "+n.name)}),t},t=function(e,n){var t=document.getElementsByName(e);return Array.from(t).forEach(function(t,r){if(!(t instanceof n))throw new Error("The children element '"+r+"' with the class: '"+e+"' isn't an "+n.name)}),t},r=function(e,n){var t=document.getElementsByClassName(e)[0];if(t instanceof n)return t;throw new Error("There is no element "+n.name+" that has the class: '"+e+"'")},a=function(e,n){var t=document.getElementsByName(e)[0];if(t instanceof n)return t;throw new Error("There is no element "+n.name+" that has the name: '"+e+"'")};export{e as getElementWithId,n as getElementsWithClassName,t as getElementsWithName,r as getFirstElementWithClassName,a as getFirstElementWithName};
//# sourceMappingURL=instance-verification.mjs.map
