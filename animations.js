const INCREASE_NUMBER_ANIMATION_SPEED = 100;
function increaseNumberAnimationStep(i, element, endNumber) {
  if (i <= endNumber) {
    if (i === endNumber) {
      element.innerText = i + '+';
    } else {
      element.innerText = i;
    }
    i += 100;
    setTimeout(() => { increaseNumberAnimationStep(i, element, endNumber) }, INCREASE_NUMBER_ANIMATION_SPEED);
  }
};
function initIncreaseNumberAnimation() {
  let element = document.querySelector('.features__clients-count');
  increaseNumberAnimationStep(0, element, 5000);
}
/*initIncreaseNumberAnimation();*/
document.querySelector('#bubget').addEventListener('change', function handleSelectChange(event) {
  let otherInput = document.querySelector('.form__other-input');;
  if (event.target.value === 'other') {
    let formContainer = document.createElement("div");// добавить еще одно текстовое поле
    formContainer.classList.add("form__other-input");
    formContainer.classList.add("form__group");
    //присваеваем два класса
    let input = document.createElement('input');
    input.placeholder = "Введите ваш вариант";//создаем свойство равное...
    input.type = 'text'; //создаем свойство равное...
    formContainer.appendChild(input);//добавляем дочернний input
    document.querySelector('form').insertBefore(formContainer, document.querySelector('.form__submit')) //Добавляем дочерний элемент в form перед элементом с классом .form__submit
  };
  if (event.target.value !== 'other' && otherInput) //в селекте выбрали вариант НЕ и элемент с текстовым полем есть на странице
  {
    otherInput = document.querySelector('.form__other-input'); // получаем созданный элемент
    document.querySelector('form').removeChild(otherInput); // Удаляем ранее добавленное текстовое поле, если оно есть в DOM
  }
});
window.addEventListener('scroll', updateScroll);
let animationInited = false;
function updateScroll() {
  if (window.scrollY > 0) {
    document.querySelector('header').classList.add('header__scrolled');

  } else {
    document.querySelector('header').classList.remove('header__scrolled');
  }
  let windowBottomPosition = window.scrollY + window.innerHeight;/*window.scrollY возвращает позицию скролла*/
  let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
  if (windowBottomPosition >= countElementPosition && !animationInited) {
    animationInited = true;
    initIncreaseNumberAnimation();
  }
}
//функция, которая будет тегу a добавлять обработчик
function addSmoothScroll(link) {
  anchor.addEventListener('click', onLinkClick);
  document.querySelector(event.target.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
  });
}
/*предотвращение поведение ссылки по умолчанию, чтобы она не сместила экран к элементу*/
function onLinkClick(event) {
  event.preventDefault();
}
/*находим коллекцию всех тегов a, а затем для каждого элемента коллекции вызовите функцию addSmoothScroll*/
function addSmoothScroll(anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
}
/*скрол при нажатие КОНТАКТЫ*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  addSmoothScroll(anchor);
});
/*плавный скрол по нажатию УЗНАТЬ ПОДРОБНЕЕ*/
addSmoothScroll(document.querySelector('.more-button'));