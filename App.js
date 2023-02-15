function getResponse() {
    let endPoint = "https://isro.vercel.app/api/centres";

    fetch(endPoint)
        .then((response) => {
            return response.json();
        })
        .then((responseData) => {
            showData(responseData);
        })
        .catch((error) => {
            alert(error);
        });
}

function showData(responseData) {
    let outerTable = document.getElementById("dynamic");
    let city = document.getElementById("city");
    let state = document.getElementById("state");
    let center = document.getElementById("center");
    let inputData = document.getElementById("search");

    city.addEventListener("click", () => {
        outerTable.innerHTML = "";
        let flag = false;
        if (inputData.value === "") {
            alert("Please type something");
            return;
        }

        responseData.centres.forEach((element) => {
            let name = element.name;
            let place = element.Place;
            let states = element.State;

            if (inputData.value.toUpperCase() === place.toUpperCase()) {
                let innerTable = document.createElement("table");
                innerTable.classList = "box";
                let tr = document.createElement("tr");

                let th = document.createElement("th");
                th.innerHTML = "<strong>CENTER</strong>";
                tr.appendChild(th);

                let td1 = document.createElement("td");
                td1.innerHTML = "<strong>CITY</strong>";
                tr.appendChild(td1);

                let td2 = document.createElement("td");
                td2.innerHTML = "<strong>STATE</strong>";
                tr.appendChild(td2);

                let tr2 = document.createElement("tr");
                let tdName = document.createElement("td");
                tdName.innerText = name;
                tr2.appendChild(tdName);

                let tdPlace = document.createElement("td");
                tdPlace.innerText = place;
                tr2.appendChild(tdPlace);

                let tdState = document.createElement("td");
                tdState.innerText = states;
                tr2.appendChild(tdState);

                innerTable.appendChild(tr);
                innerTable.appendChild(tr2);
                outerTable.appendChild(innerTable);
                flag = true;
            }
        });
        if (flag == false) {
            alert("Record not found!");
        }
    });

    state.addEventListener("click", () => {
        outerTable.innerHTML = "";
        let flag = false;
        if (inputData.value === "") {
            alert("Please type something");
            return;
        }

        responseData.centres.forEach((element) => {
            let name = element.name;
            let place = element.Place;
            let states = element.State;

            if (inputData.value.toUpperCase() === states.toUpperCase()) {
                let innerTable = document.createElement("table");
                innerTable.classList = "box";
                let tr = document.createElement("tr");

                let th = document.createElement("th");
                th.innerHTML = "<strong>CENTER</strong>";
                tr.appendChild(th);

                let td1 = document.createElement("td");
                td1.innerHTML = "<strong>CITY</strong>";
                tr.appendChild(td1);

                let td2 = document.createElement("td");
                td2.innerHTML = "<strong>STATE</strong>";
                tr.appendChild(td2);

                let tr2 = document.createElement("tr");
                let tdName = document.createElement("td");
                tdName.innerText = name;
                tr2.appendChild(tdName);

                let tdPlace = document.createElement("td");
                tdPlace.innerText = place;
                tr2.appendChild(tdPlace);

                let tdState = document.createElement("td");
                tdState.innerText = states;
                tr2.appendChild(tdState);

                innerTable.appendChild(tr);
                innerTable.appendChild(tr2);
                outerTable.appendChild(innerTable);
                flag = true;
            }
        });
        if (flag == false) {
            alert("Record not found!");
        }
    });

    center.addEventListener("click", () => {
        outerTable.innerHTML = "";
        responseData.centres.forEach((element) => {
            let name = element.name;
            let place = element.Place;
            let states = element.State;

            let innerTable = document.createElement("table");
            innerTable.classList = "box";
            let tr = document.createElement("tr");

            let th = document.createElement("th");
            th.innerHTML = "<strong>CENTER</strong>";
            tr.appendChild(th);

            let td1 = document.createElement("td");
            td1.innerHTML = "<strong>CITY</strong>";
            tr.appendChild(td1);

            let td2 = document.createElement("td");
            td2.innerHTML = "<strong>STATE</strong>";
            tr.appendChild(td2);

            let tr2 = document.createElement("tr");
            let tdName = document.createElement("td");
            tdName.innerText = name;
            tr2.appendChild(tdName);

            let tdPlace = document.createElement("td");
            tdPlace.innerText = place;
            tr2.appendChild(tdPlace);

            let tdState = document.createElement("td");
            tdState.innerText = states;
            tr2.appendChild(tdState);

            innerTable.appendChild(tr);
            innerTable.appendChild(tr2);
            outerTable.appendChild(innerTable);
        });
    });
}
window.onload = getResponse;
