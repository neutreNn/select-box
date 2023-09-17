const main = document.querySelector('.container');
const select = document.querySelector('select');
const span = document.querySelector('.title');
const i = docuemnt.querySelector('.icon');

main.addEventListener('mousedown', (e) => {
    e.preventDefault();

    const select2 = main.children[0];
    const ul = document.createElement('ul');
    [...select2.children].forEach(option => {
        const li = document.createElement('li');

        li.addEventListener('mousedown', (e) => {
            e.stopPropagation();

            select.value = option.value;
            main.value = option.value;

            select.style.border = '2px solid #1E49A8';
            span.style.color = '#1E49A8';
            i.style.color = '#1E49A8';
            ul.remove();
        });
        ul.appendChild(li);
    });
    main.appendChild(ul);
    document.addEventListener('click', (e) => {
        if (!main.contains(e.target)) {
            select.style.border = '1.9px solid lightgray';
            span.style.color = '#1E49A8';
            i.style.color = '#1E49A8';
        }
    });
});