{
    const tasks = [];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
    };

    removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    };

    toggleTaksDone = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    };

    bindEvents = () => {
        
        const removeButtons = document.querySelectorAll(".js-remove");
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");
        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaksDone(index);
            });
        });
    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="list__item js-item"> 
            <button class="list__button js-done"> 
            ${task.done ? "✔" : ""}
            </button>
            <span class="list__taskContent ${task.done? "list__taskContent--done" : ""}">
            ${task.content}
            </span>
            <button class="list__button list__button--remove js-remove"> 🗑 </button>
            </li>
            `;
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();
    };

    const clearFormAndFocus = () => {
        document.querySelector(".js-newTask").value = "";
        document.querySelector(".js-newTask").focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskElement = document.querySelector(".js-newTask");
        const newTaskContent = newTaskElement.value.trim();
        if (newTaskContent === "") {
            newTaskElement.focus();
            return;
        };

        addNewTask(newTaskContent);

        clearFormAndFocus();

        render();
    };

    const init = () => {
        render();

        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}