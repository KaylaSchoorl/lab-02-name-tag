const div=document.getElementById('name');
const button=document.getElementById('button');
const input=document.getElementById('field1');

button.addEventListener('click', () => {
    const userTyped = input.value
    div.textContent = userTyped;
})