const url = "https://test-todoist.herokuapp.com/api/categories"
const getAllCategories = () => {
    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((body) => {
            const list = document.getElementsByTagName("ul")[0];
            if (list) {
                list.remove();
            }
            const listElement = document.createElement('ul');
            for (const item of body) {
                const listItem = document.createElement('li');
                listItem.innerText = item.name;
                listElement.appendChild(listItem);
            }
            document.body.appendChild(listElement)
        })
        .catch((err) => {
            console.log(err.status);
        })
}

getAllCategories();

const addCategory = (category) => {
    fetch(url, {
            method: 'POST',
            body: JSON.stringify(category),
            headers: {
                'Content-Type': 'application/JSON'
            }
        })
        .then(async (res) => {
            getAllCategories(await res.json());
        })
}

const getCategoryToAdd = () => {
    return {
        name: document.getElementById("postText").value
    }
}

const handleClick = () => {
    const category = getCategoryToAdd();
    if (!category.name) {
        alert("enter name");
    } else {
        addCategory(category);
    }
}

console.log(document.getElementById("post"));
document.getElementById("post").addEventListener('click', handleClick);