exports.getElementWithId=function(e,t){var n=document.getElementById(e);if(n instanceof t)return n;throw new Error("There is no element "+t.name+" that has the id: '"+e+"'")},exports.getElementsWithClassName=function(e,t){var n=document.getElementsByClassName(e);return Array.from(n).forEach(function(n,r){if(!(n instanceof t))throw new Error("The children element '"+r+"' with the class: '"+e+"' isn't an "+t.name)}),n},exports.getElementsWithName=function(e,t){var n=document.getElementsByName(e);return Array.from(n).forEach(function(n,r){if(!(n instanceof t))throw new Error("The children element '"+r+"' with the class: '"+e+"' isn't an "+t.name)}),n},exports.getFirstElementWithClassName=function(e,t){var n=document.getElementsByClassName(e)[0];if(n instanceof t)return n;throw new Error("There is no element "+t.name+" that has the class: '"+e+"'")},exports.getFirstElementWithName=function(e,t){var n=document.getElementsByName(e)[0];if(n instanceof t)return n;throw new Error("There is no element "+t.name+" that has the name: '"+e+"'")};
//# sourceMappingURL=instance-verification.js.map
