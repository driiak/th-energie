document.querySelector('.menu').addEventListener('click',()=>document.querySelector('nav').classList.toggle('open'));
document.querySelector('#contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  document.querySelector('#formMessage').textContent='Merci ! Votre demande est prête à être envoyée. Ajoutez votre adresse e-mail pour connecter le formulaire.';
});
