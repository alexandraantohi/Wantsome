const req = () => {
    const xmlReq = new XMLHttpRequest();
    xmlReq.open("GET", "https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json");
    xmlReq.onload = () => {
        const serverResponse = JSON.parse(xmlReq.response);
        //console.log(serverResponse);
        for(var item in serverResponse){
            console.log(item);
            var node = document.createElement("LI");
            var square = document.createElement("DIV");
            square.style.height = "100px";
            square.style.width = "100px";
            square.style.backgroundColor = serverResponse[item];
            var textnode = document.createTextNode(item);
            node.appendChild(square);
            node.appendChild(textnode);
            document.getElementById("colorList").appendChild(node);
            console.log(serverResponse[item]);
        }
        


    }
    xmlReq.send();
}

req();