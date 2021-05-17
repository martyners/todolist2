{
    const tasks = [
        {
            content: "zdanie 1",
            done: true,
        },
        {
            content: "zadanie 2",
            done: false,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li class="list__item js-item"> 
                    ${task.content}
                </li>
            `;
        };
        document.querySelector(".js-tasks").innerHTML = htmlString;

        for (const task of tasks) {
            if (task.done) {
               document.querySelector(".js-item").classList.add("list__item--done");
            }
        }
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