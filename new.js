


document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
  
      button.classList.toggle('active');
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });


  const burgerBtn = document.querySelector('.btn-burger')
  const burgerContent = document.querySelector('.btn-burger-content')
  console.log(burgerContent)
  burgerBtn.addEventListener('click', function(){
      this.classList.toggle('active')
      burgerContent.classList.toggle('active')
  })


  const ggg = 1;
  const gg1 = [1, 2, 3]
  const gg2 = item()
  gg2.name = 'igor';
  gg2.age = 23;

  const links = document.querySelectorAll('#links')
  links.map((el)
    
  )
  links()


