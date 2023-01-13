async function getAPI() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    var data = await response.json();
    if (response) {
        document.getElementById("loading").style.display = "none";
        showData(data);
    }
}

function showData(data) {
    let table =
        `<tr>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
    </tr>`;
    for (let employee of data) {
        table += `
        <tr>
            <td>${employee.name}</td>
            <td>${employee.username}</td>
            <td>${employee.email}</td>
        </tr>
        `;
    }
    document.getElementById("employees").innerHTML = table;
}
getAPI();