const task_text = document.getElementById('add-task');
const button = document.querySelector('.add');
const task = document.getElementsByClassName('task');
const img_wrong = document.createElement('img');
const search_input = document.getElementById('search-input');



button.addEventListener('click', function() {
    const task = task_text.value;
    const task_list = document.getElementById('task-list');

    if (task === '') {
        alert('Please enter a task');
        return;
    }
    else {
        // add li element to the task list
        const new_task = document.createElement('li');
        new_task.classList.add('task');

        // add div to the task list
        const icons_check = document.createElement('div');
        icons_check.classList.add('icons-check');

        // add span to the task list
        const task_text_span = document.createElement('span');
        task_text_span.classList.add('task-text');
        task_text_span.textContent = task;

        // add the photos to the div
        const img_right = document.createElement('img');
        img_right.src = 'images/right.png';
        img_right.alt = 'Right';
        img_right.style = 'display: flex; gap: 1rem; cursor: pointer; width: 20px; height: 20px;';
        
        const img_wrong = document.createElement('img');
        img_wrong.src = 'images/wrong.png';
        img_wrong.alt = 'Wrong';
        img_wrong.style = 'display: flex; gap: 1rem; cursor: pointer; width: 20px; height: 20px;';

        icons_check.appendChild(img_right);
        icons_check.appendChild(img_wrong);

        // add the div and span to li
        new_task.appendChild(task_text_span);
        new_task.appendChild(icons_check);

        task_list.appendChild(new_task);
        task_text.value = '';

        // remove the task after click on the wrong.png image

        img_wrong.addEventListener('click', function() {
            new_task.remove();
        });


        // apply the animation ofter clicking on the right.png image

        img_right.addEventListener('click', function() {

            img_right.classList.add('celebrate');

            // turn on the affect of the confetti
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });

            // delete the animation after it is ended
            setTimeout(() => {
                img_right.classList.remove('celebrate');
            }, 500); // half second
            });
    }
});


// search about the input if it equal to one of the task-list content
function searchTask () {
    const search = search_input.value.toLowerCase();
    const tasks = document.querySelectorAll('.task');

    tasks.forEach(function(task) {
        const task_text = task.querySelector('.task-text').textContent.toLowerCase();
        if (task_text.includes(search)) {
            task.style.display = 'flex';
        }
        else {
            task.style.display = 'none';
        }
    });
}

search_input.addEventListener('input', searchTask);