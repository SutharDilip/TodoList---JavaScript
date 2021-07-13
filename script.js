function update() {
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    } else {
        itemJsonArraystr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArraystr);
    }
    let tableBody = document.getElementById('tablebody');
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
                              <tr>
                                <th>${index + 1}</th>
                                <td>${element[0]}</td>
                                <td>${element[1]}</td>
                                <td><button onclick=removed(${index})>Delete</button></td>
                            </tr>
            
            `
    });
    tableBody.innerHTML = str;
}

function getAndupdate() {
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    } else {
        itemJsonArraystr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArraystr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    update();
}
add1 = document.getElementById("Adding");
add1.addEventListener('click', getAndupdate)
update();

function removed(itemIndex) {
    console.log("delete", itemIndex);
    itemJsonArraystr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArraystr);

    itemJsonArray.splice(itemIndex, 1)
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();
}

function alclr() {
    console.log("clearing")
    localStorage.clear();
    update();
}