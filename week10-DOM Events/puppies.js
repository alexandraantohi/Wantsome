const req = () => {
    const xmlReq = new XMLHttpRequest();
    xmlReq.open("GET", "https://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true");
    xmlReq.onload = () => {
        const serverResponse = JSON.parse(xmlReq.response);
        //console.log(serverResponse);
        // For each of the elements in data.children, 
        //append a new <img> element to .text with the src as the child.data.thumbnail
        serverResponse.data.children.forEach(item => {
            //console.log(item);
            var node = document.createElement("img");
            node.src = item.data.thumbnail;
            document.getElementsByClassName("text")[0].appendChild(node); 
        })
    }
    xmlReq.send();
}

document.getElementsByClassName("btn")[0].addEventListener("click", req);