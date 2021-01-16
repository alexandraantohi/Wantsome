
const req = () => {
    const xmlReq = new XMLHttpRequest();
    xmlReq.open("GET", "https://ron-swanson-quotes.herokuapp.com/v2/quotes");
    xmlReq.onload = () => {
        const serverResponse = JSON.parse(xmlReq.response);
        document.getElementById("quote").innerHTML = serverResponse;
    }

    xmlReq.send();
}

document.getElementById("xhr").addEventListener("click", req);

