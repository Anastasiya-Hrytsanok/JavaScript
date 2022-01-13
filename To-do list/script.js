const TABS = {
    ALL: 'all',
    ACTIVE: 'active',
    FINISHED: 'finished',
};

const PRIORITY_NAME = {
    HIGH: 'high',
    MEDIUM: 'medium',
    LOW: 'low',
    DEFAULT: 'default',
};

const PRIORITIES = [{
        name: PRIORITY_NAME.HIGH,
        color: "#062f80",
        weight: 3
    },
    {
        name: PRIORITY_NAME.MEDIUM,
        color: "#0743b8",
        weight: 2
    },
    {
        name: PRIORITY_NAME.LOW,
        color: "#2669eb",
        weight: 1
    },
    {
        name: PRIORITY_NAME.DEFAULT,
        color: "#8daff7",
        weight: 0
    }
];

const contentForm = document.getElementsByClassName('content__form')[0];
let activeTab = TABS.ALL;

const addNewTask = (e) => {
    plusTaskForm.elements["addBtn"].innerText = "Add";
    toggleModalDisplay();
}

const cancelClick = (e) => {
    e.preventDefault();
    document.forms[0].reset(); //что это и для чего?
    toggleModalDisplay();
};

const toggleModalDisplay = () => {
    document.getElementsByClassName('modal')[0].classList.toggle("display-none");
}

let data = [{
        id: 1,
        text: "123",
        priority: PRIORITY_NAME.HIGH,
        isActive: true,
    },
    {
        id: 2,
        text: "9035995",
        priority: PRIORITY_NAME.LOW,
        isActive: true,
    },
    {
        id: 3,
        text: "sdjfks",
        priority: PRIORITY_NAME.DEFAULT,
        isActive: true,
    },
    {
        id: 5,
        text: "jgj35",
        priority: PRIORITY_NAME.HIGH,
        isActive: true,
    },
    {
        id: 6,
        text: "00019",
        priority: PRIORITY_NAME.LOW,
        isActive: true,
    },
    {
        id: 7,
        text: "181818",
        priority: PRIORITY_NAME.LOW,
        isActive: true,
    },
    {
        id: 8,
        text: "00019",
        priority: PRIORITY_NAME.MEDIUM,
        isActive: true,
    },
    {
        id: 9,
        text: "klpw",
        priority: PRIORITY_NAME.HIGH,
        isActive: true,
    },
    {
        id: 11,
        text: "undef",
        priority: PRIORITY_NAME.DEFAULT,
        isActive: true,
    },
    {
        id: 12,
        text: "iigj",
        priority: PRIORITY_NAME.DEFAULT,
        isActive: true,
    },
    {
        id: 13,
        text: "undef",
        priority: PRIORITY_NAME.DEFAULT,
        isActive: true,
    },
];

const initPage = () => {
    renderTasks(); 
};

window.onload = initPage; 

class Task {
    constructor(text, priority) {
        this.id = getRandomInt(1, 1000000); //убрать потом
        this.text = text;
        this.priority = priority || PRIORITY_NAME.DEFAULT;
        this.isActive = true;
    }
}

function getRandomInt(min, max) { //убрать потом
    return Math.floor(Math.random() * (max - min)) + min;
}


const addTaskEvent = (taskElement) => {
    taskElement.getElementsByClassName("content__pencil")[0].addEventListener('click', changeTask);
    taskElement.getElementsByClassName("content__check_mark")[0].addEventListener('click', markFinishedTask);
    taskElement.getElementsByClassName("content__cross")[0].addEventListener('click', deleteTask);
}

const addTask = (e) => {
    e.preventDefault();
    const plusTaskForm = document.getElementById("plusTaskForm");
    const text = plusTaskForm.elements['taskText'].value;
    if (text) {
        const priority = plusTaskForm.elements['priority'].value;
        let task = new Task(text, priority);
        data.push(task);
        addTaskToPage(task);
        toggleModalDisplay();
        plusTaskForm.reset();
    } else {
        alert("Enter the task");
    }

}

const getPriorityConfigByName = (priorityName) => {
    const priorityConfig = PRIORITIES.find(p => p.name === priorityName);
    if (!priorityConfig) {
        throw new Error(`Unsupported priority: ${priorityName}`);
    }

    return priorityConfig;
}

const addBackgroundColorByPriority = (task, contentTask) => {
    const priorityConfig = getPriorityConfigByName(task.priority);
    contentTask.style.backgroundColor = priorityConfig.color;
}

const applyTaskActivityStyles = (contentItem, isTaskActive) => {
    if (!isTaskActive) {
        contentItem.style.textDecoration = 'line-through';
        contentItem.style.textDecorationColor = '#fdfdfd';
    }
}

const addTaskToPage = (task) => {
    let contentItem = document.createElement("div");
    contentItem.className = "content__item";
    applyTaskActivityStyles(contentItem, task.isActive);
    contentItem.dataset.id = task.id;
    contentForm.append(contentItem);
    let contentTask = document.createElement("p");
    contentTask.className = "content__task";
    contentTask.textContent = task.text;
    contentItem.append(contentTask);
    contentItem.append(createTaskActionImage("content__pencil", "./images/pencil.svg"));
    contentItem.append(createTaskActionImage("content__check_mark", "./images/check-mark.svg"));
    contentItem.append(createTaskActionImage("content__cross", "./images/cross.svg"));
    addBackgroundColorByPriority(task, contentTask);
    addTaskEvent(contentItem);
}

const createTaskActionImage = (className, src) => {
    let contentCheckMark = document.createElement("img");
    contentCheckMark.className = className;
    contentCheckMark.src = src;
    return contentCheckMark;
}

const cleanAll = () => { //переписать по id

    // const contentItem = e.target.parentElement;
    // const task = getTaskById(Number(contentItem.dataset.id));
    // task.isActive = !task.isActive;
    // renderTasks();

    for (let i = data.length - 1; i >= 0; i--) {
        if (document.getElementById("finished").style.opacity === "1" && data[i].isActive === false) {
            document.getElementsByClassName("content__item")[i].remove();
            data.splice(i, 1);
        } else if (document.getElementById("active").style.opacity === "1" && data[i].isActive === true) {
            document.getElementsByClassName("content__item")[i].remove();
            data.splice(i, 1);
        } else if (document.getElementById("all").style.opacity === "1") {
            document.getElementsByClassName("content__item")[i].remove();
            data = [];
        }
    }
}

const changeTask = (e) => {
    const contentItem = e.target.parentElement;
    const task = getTaskById(Number(contentItem.dataset.id));
    plusTaskForm.elements["addBtn"].innerText = "Change";
    console.log(plusTaskForm.elements["taskText"]);
    plusTaskForm.elements["taskText"].value = task.text;
    toggleModalDisplay();
    renderTasks();
    //найти по id, вытащить имеющийся текст и изменить на новый
    
}

const getTaskById = (id) => {
    // add check for undefined (case when there is no task with given id in the data array)
    return data.find(t => t.id === id);
}

const markFinishedTask = (e) => {
    const contentItem = e.target.parentElement;
    const task = getTaskById(Number(contentItem.dataset.id));
    task.isActive = !task.isActive;
    renderTasks();

    // e.target.parentElement.style.textDecoration = "line-through";
    // e.target.parentElement.style.textDecorationColor = "#fdfdfd";
    // e.target.style.opacity = "1";
    // for (let i = data.length - 1; i >= 0; i--) {
    //     if (data[i].text == e.target.parentElement.getElementsByClassName("content__task")[0].innerHTML && data[i].isActive === false) {
    //         e.target.style.opacity = "0.7";
    //         e.target.parentElement.style.textDecoration = "none";
    //         data[i].isActive = true;
    //     } else if (data[i].text == e.target.parentElement.getElementsByClassName("content__task")[0].innerHTML) {
    //         data[i].isActive = false;
    //     }
    // }
}

const deleteTask = (e) => { //привязать к id
    e.target.parentElement.remove();
    for (let i = data.length - 1; i >= 0; i--) {
        if (data[i].text == e.target.parentElement.getElementsByClassName("content__task")[0].innerHTML) {
            return data.splice(i, 1);
        }
    }
}

const renderActiveTab = () => {
    const tabs = [...document.getElementsByClassName('tab')];
    const currentActiveTab = tabs.filter(t => t.id === activeTab)[0];
    const notActiveTabs = tabs.filter(t => t.id !== activeTab);
    currentActiveTab.style.opacity = "1";
    for (const notActiveTab of notActiveTabs) {
        notActiveTab.style.opacity = "0.7";
    }
}

const showActive = (e) => {
    activeTab = TABS.ACTIVE;
    renderActiveTab();
    renderTasks();
}

const showFinished = (e) => {
    activeTab = TABS.FINISHED;
    renderActiveTab();
    renderTasks();
}

const showAll = (e) => {
    activeTab = TABS.ALL;
    renderActiveTab();
    renderTasks();
}

const clearDOMTaskList = () => {
    contentForm.innerHTML = '';
}

const getTasksActiveTab = () => {
    switch (activeTab) {
        case TABS.ALL:
            return data;
        case TABS.ACTIVE:
            return data.filter(t => t.isActive);
        case TABS.FINISHED:
            return data.filter(t => !t.isActive);
    }
}

const renderTasks = () => {
    clearDOMTaskList();
    const tasks = getTasksActiveTab();
    for (const task of tasks) {
        addTaskToPage(task);
    }
}

// const showByPriority = () => {
//     for (let i = data.length - 1; i >= 0; i--) {
//         document.getElementsByClassName("content__item")[i].style.display = "flex";
//         if (document.getElementById("sortByPriority").value === "highItem" && data[i].priority !== "high") {
//             document.getElementsByClassName("content__item")[i].style.display = "none"
//         } else if (document.getElementById("sortByPriority").value === "mediumItem" && data[i].priority !== "medium") {
//             document.getElementsByClassName("content__item")[i].style.display = "none"
//         } else if (document.getElementById("sortByPriority").value === "lowItem" && data[i].priority !== "low") {
//             document.getElementsByClassName("content__item")[i].style.display = "none"
//         } else if (document.getElementById("sortByPriority").value === "noneItem" && data[i].priority !== "") {
//             document.getElementsByClassName("content__item")[i].style.display = "none"
//         }
//     }
// }

// ascending sorting

// const handleSortTasksByPriorityClick = (e) => {

//     handleSortByClick(e, prioritySorter);

// };



// const handleSortTasksByNameClick = (e) => {
//     handleSortByClick(e, nameSorter);
// };

// const handleSortByClick = (e, sorter) => {
//     e.preventDefault();

//     renderTasks(data.sort(sorter))
// };

// const prioritySorter = (firstTask, secondTask) => {

//     const {
//         priority: firstTaskPriority
//     } = firstTask;

//     const {
//         priority: secondTaskPriority
//     } = secondTask;



//     const firstTaskWeight = getPriorityConfigByName(firstTaskPriority).weight;

//     const secondTaskWeight = getPriorityConfigByName(secondTaskPriority).weight;;



//     if (firstTaskWeight > secondTaskWeight) {

//         return 1;

//     } else if (firstTaskWeight === secondTaskWeight) {

//         return 0;

//     } else {

//         return -1;
//     }
// };

// const nameSorter = (firstTask, secondTask) => {

//     const {
//         text: firstTaskText
//     } = firstTask;

//     const {
//         text: secondTaskText
//     } = secondTask;

//     if (!firstTaskText && secondTaskText) {
//         return -1;
//     }

//     if (firstTaskText && !secondTaskText) {
//         return 1;
//     }

//     if (!firstTaskText && !secondTaskText) {
//         return 0;
//     }

//     return firstTaskText.localeCompare(secondTaskText);

// };

document.getElementById("plusTask").addEventListener('click', addNewTask);
document.getElementById("addBtn").addEventListener('click', addTask);
document.getElementById("cancelBtn").addEventListener('click', cancelClick);
document.getElementById("cleanAll").addEventListener('click', cleanAll);
document.getElementById("active").addEventListener('click', showActive);
document.getElementById("finished").addEventListener('click', showFinished);
document.getElementById("all").addEventListener('click', showAll);
// document.getElementById("sortByPriority").addEventListener('change', showByPriority);

// document
//   .getElementById("sortDyPriority")
//   .addEventListener("click", handleSortTasksByPriorityClick);

// document
//     .getElementById("sortByName")
//     .addEventListener("click", handleSortTasksByNameClick);