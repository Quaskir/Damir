


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




  const links = document.querySelectorAll('#links')
  function showLinks(){

  }

 
  showLinks = () =>{
    links.map()
  }
  console.log(links)


