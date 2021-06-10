
//*** Create Connection Using SignalR
var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();


//***** Client Side ****
connection.on("ReceiveMessage", function (fromUser, message) {

    var ul = document.createElement('ul');
    var li = document.createElement('li');
    ul.setAttribute("id", "child")
    li.textContent = message;
    ul.append(li);

    if (fromUser == "Eslam") {
        $(ul).css({ "listStyleImage": " url('../images/eslam.png')" });
    }
    else if (fromUser == "Adel") {
        $(ul).css({ "listStyleImage": " url('../images/engAdel.png')" });
        $(ul).css({ "padding-left": "50%" });
    }
    else {
        $(ul).css({ "listStyleImage": " url('../images/default.png')" });
    }
    $("#list").append(ul);


});


//open and  start Connection
connection.start();


//******* Server ******

$("#btnSend").on("click", function () {
    var fromUser = $("#txtUser").val();
    var message = $("#txtMessage").val();

    connection.invoke("SendMessage", fromUser, message);
    $("#txtUser").val('');
    $("#txtMessage").val('');
});





