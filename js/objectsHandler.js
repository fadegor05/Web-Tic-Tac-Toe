const tableIDs = [["0-0","0-1","0-2"], ["1-0","1-1","1-2"], ["2-0","2-1","2-2"]];

const tableObjects = document.getElementsByTagName("td");

let tableObjectsCoords = Array();

tableIDs.forEach(element =>{
    let subObjects = Array();
    element.forEach(subElement =>{
        subObjects.push(document.getElementById(subElement));
    })
    tableObjectsCoords.push(subObjects)
})

function getField(){
    let field = Array();
    tableObjectsCoords.forEach(element =>{
        let row = Array();
        element.forEach(subElement => {
            row.push(subElement.textContent);
        })
        field.push(row);
    })
    return field;
}