const tmonials = [
    {
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo ultrices gravida.",
      mov: "Your only limit is you "
    },
    {
      name: "Jane Doe",
      text: "Sed eu orci auctor, tincidunt quam nec, lobortis augue. Donec eu lobortis leo.",
     
    },
    // Adicione mais testemunhos aqui, se necessário
  ];
  
  let currentSlide = 0;
  console.log(tmonials[0].name);
  function renderTestimonial(tmonials) {
    return `
      <div class="testimonial">
      <h3 class='s5-h3'>"${tmonials.mov}"</h3>
        <p class='s5-p'>${tmonials.text}</p>
        <h2 class='s5-h2'>${tmonials.name}</h2>
      </div>
    `;
  }
  const testimonialsContainer = document.querySelector(".testimonials-container");

  renderTestimonials(renderTestimonial(tmonials));

  function renderTestimonials(x) {
     testimonialsContainer.innerHTML = renderTestimonial(x[currentSlide]);
  }
  



  const nextButton = document.createElement("button");
  nextButton.classList.add("next-button");
  nextButton.textContent = "Click to view the last comment";
  testimonialsContainer.appendChild(nextButton);
  
  
  const testimonials = tmonials;

  const prevButton = document.querySelector(".next-button");
  console.log(prevButton);

  // Cria o botão "Próximo"
 
  // Resto do código
  // ...

  
  
  function showTestimonial() {
    const testimonial = document.querySelector('.testimonial');
    testimonial.classList.remove('active');
    testimonial.style.display = 'none';
    currentSlide++;
    if (currentSlide >= testimonials.length) {
      currentSlide = 0;
    }
    const newTestimonial = renderTestimonial(testimonials[currentSlide]);
    const container = document.querySelector('.testimonials-container');
    container.innerHTML = newTestimonial;
    const newTestimonialElement = document.querySelector('.testimonial');
    newTestimonialElement.classList.add('active');
    newTestimonialElement.style.display = 'block';
    testimonialsContainer.appendChild(nextButton); // adiciona o botão "nextButton" novamente
  }
  
  nextButton.addEventListener('click', () => {
    showTestimonial();
  });
  
  prevButton.addEventListener('click', () => {
    const testimonial = document.querySelector('.testimonial');
    testimonial.classList.remove('active');
    testimonial.style.display = 'none';
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = testimonials.length - 1;
    }
    const newTestimonial = renderTestimonial(testimonials[currentSlide]);
    const container = document.querySelector('.testimonials-container');
    container.innerHTML = newTestimonial;
    const newTestimonialElement = document.querySelector('.testimonial');
    newTestimonialElement.classList.add('active');
    newTestimonialElement.style.display = 'block';
  });
  