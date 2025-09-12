const menuBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Mostrar seção
function mostrarConteudo(id) {
  document.querySelectorAll('.content-section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  menu.classList.remove('show');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toggle respostas
document.querySelectorAll('.toggle-answer').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.target);
    target.style.display = (target.style.display === 'block') ? 'none' : 'block';
  });
});

// Mostrar Matemática por padrão
window.onload = () => mostrarConteudo('matematica');
