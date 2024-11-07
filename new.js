
const hi=1+2;
console.log(hi)
const arr = [1,2,3]
console.log(arr);

const person = {
  name: "John",
  age: 30
};
console.log(person)


    function add(a, b) {
        return a + b;
}
console.log(add(3, 5));

document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
  
      button.classList.toggle('active');
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });