const button = document.getElementById("btn");

var listobj = []
function deleted(event) {

    var index = [].indexOf.call(event.target.parentNode.parentNode.parentElement.children, event.target.parentNode.parentNode);
    event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode)
    listobj.pop(index)

    console.log(listobj);
    // var demo = document.getElementById("demo")
    // demo.removeChild(obj)
}
function checked(event) {
    // console.log("hi")


    if (event.target.checked == true) {
        var index = [].indexOf.call(event.target.parentNode.parentNode.parentElement.children, event.target.parentNode.parentNode);
        listobj[index].finished = "Done";
        event.target.parentNode.parentNode.children[2].innerHTML ="Finished:"+ listobj[index].finished;
        console.log(event.target.parentNode.parentNode.children[2])
        
        setTimeout(function () {
            event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode)
            listobj.pop(index);
        }, 3000)

        console.log(listobj);
    }

}

function add() {
    var type = document.getElementById("todo").value
    if (type == "") {

    }
    else {
        var date = new Date();
        var obj = {};
        obj['todo'] = type;
        obj['date'] = date;
        obj['finished'] = "undone";
        obj['checkBox'] = "unchecked";
        obj['deleteBtn'] = "undeleted";
        listobj.push(obj);
        var demo = document.getElementById("demo");

        var item = obj;
        var child = document.createElement('tr');
        var toDo = document.createElement('td');
        var text = document.createTextNode('Todo:' + item.todo);//+ '  Date:' + item.date + '  Finished:' + item.finished
        toDo.appendChild(text)
        child.appendChild(toDo);

        var date = document.createElement('td');
        var text = document.createTextNode('Date:' + item.date);//+ '  Date:' + item.date + '  Finished:' + item.finished
        date.appendChild(text)
        child.appendChild(date);

        var finished = document.createElement('td');
        var text = document.createTextNode('Finished:' + item.finished);//+ '  Date:' + item.date + '  Finished:' + item.finished
        finished.appendChild(text)
        child.appendChild(finished);

        var checkBox = document.createElement('td');
        var checkbox = document.createElement('input');
        checkbox.setAttribute('type', "checkbox");
        checkbox.onclick = checked;
        // checkbox.setAttribute('onclick', "checked()");
        checkBox.appendChild(checkbox);
        child.appendChild(checkBox);

        var deleteB = document.createElement("td");
        var deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("onclick", "deleted(event)");
        deleteBtn.innerHTML = "delete";
        deleteB.appendChild(deleteBtn);
        child.appendChild(deleteB);
        demo.appendChild(child);
        // demo.innerHTML += "<li>" + "Todo:" + item.todo + "  Date:" +
        //     item.date + "  Finished:" + item.finished +
        //     "<input type=" + "'checkbox'" + "id=" + "'checkbox'" + "onclick = " + "'checked()'" + ">" +
        //     "<button onclick=" + "'deleted()'>delete</button>" + "</li>";
    }


}

button.addEventListener("click", add);

