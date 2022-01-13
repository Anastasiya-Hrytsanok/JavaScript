const url = "https://test-todoist.herokuapp.com/api/tasks"
fetch(url)
.then((res) =>{
    console.log(res.status);
    return res.json();
})
.then((body) => {
    const listElement = document.createElement('ul');
    for(const item of body){
        const listItem = document.createElement('li');
        listItem.innerText = item.description;
        listElement.appendChild(listItem);
    }
    document.body.appendChild(listElement)
})
.catch((err) => {
    console.log(err.status);
})