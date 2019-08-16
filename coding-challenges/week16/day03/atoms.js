//         end
//     /        
// N*              end
//     \        /
//         1*,n  
//              \
//                 N


function atoms(molecule) {

    let elements = []
    let atoms = []
    let element = ''
    let count = ''

    for (let i = 0; i < molecule.length; i++) {
        if (molecule[i + 1] == undefined) {
            element += molecule[i]
            if (elements.includes(element)) {
                atoms[elements.indexOf(element)] += isNaN(parseInt(count)) ? 1 : parseInt(count)
            } else {
                elements.push(element)
                atoms.push(isNaN(parseInt(count)) ? 1 : parseInt(count))
            }
            element = ''
        } else if (isNaN(molecule[i + 1]) && molecule[i + 1] == molecule[i + 1].toUpperCase()) {
            element += molecule[i+1]
        } else if (isNaN(molecule[i + 1])) {
            if (molecule[i + 2] == undefined) {
                element += molecule[i] + molecule[i + 1]
                if (elements.includes(element)) {
                    atoms[elements.indexOf(element)] += isNaN(parseInt(count)) ? 1 : parseInt(count)
                } else {
                    elements.push(element)
                    atoms.push(isNaN(parseInt(count)) ? 1 : parseInt(count))
                }
                element = ''
            } else if (!isNaN(molecule[i + 2])) {
                count += molecule[i + 2]
                element += molecule[i]+molecule[i + 1]
            } else if (isNaN(molecule[i + 1]) && molecule[i + 1] == molecule[i + 1].toUpperCase()) {
                count += molecule[i + 2]
                element += molecule[i] + molecule[i + 1]
                if (elements.includes(element)) {
                    atoms[elements.indexOf(element)] += parseInt(count)
                } else {
                    elements.push(element)
                    atoms.push(count)
                    count = ''
                }
                element = ''
            }
        } else if (!isNaN(molecule[i + 1])) {
            if (molecule[i + 2] == undefined) {
                element += molecule[i] + molecule[i + 1]
                if (elements.includes(element)) {
                    atoms[elements.indexOf(element)] += isNaN(parseInt(count)) ? 1 : parseInt(count)
                } else {
                    elements.push(element)
                    atoms.push(isNaN(parseInt(count)) ? 1 : parseInt(count))
                }
                element = ''
            } else if (!isNaN(molecule[i + 2])) {
                count += molecule[i + 1] + molecule[i + 2]
            } else if (isNaN(molecule[i + 2]) && molecule[i + 2] == molecule[i + 2].toUpperCase()) {
                if (elements.includes(element)) {
                    atoms[elements.indexOf(element)] += parseInt(count)
                } else {
                    elements.push(element)
                    element = ''
                    atoms.push(count)
                    count = ''
                }
            }
        }
    }
    return elements
}
console.log(atoms("Fe2Mg4"))