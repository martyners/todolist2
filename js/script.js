{
    const tasks = [];

    removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="list__item js-item"> 
            <button class="list__button"> </button>
            <span class="list__taskContent">
            ${task.content}
            </span>
            <button class="list__button list__button--remove js-remove"> 🗑 </button>
            </li>
            `;
        };
        document.querySelector(".js-tasks").innerHTML = htmlString;


        const removeButtons = document.querySelectorAll(".js-remove");
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            })
        })

    };

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
    };

    const clearFormAndFocus = () => {
        document.querySelector(".js-newTask").value = "";
        document.querySelector(".js-newTask").focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        if (newTaskContent === "") {
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