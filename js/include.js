function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');
  elements.forEach(el => {
    const file = el.getAttribute('data-include');
    fetch(file)
      .then(response => response.text())
      .then(data => {
        el.innerHTML = data;
        // sidebar가 로드된 후에 하위 메뉴 이벤트 등록
        setupSubmenu();
      });
  });
}

// 하위 메뉴 이벤트 함수
function setupSubmenu() {
  const submenuLinks = document.querySelectorAll('.has-submenu');
  submenuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const submenu = link.nextElementSibling;
      if(submenu.style.display === 'block') {
        submenu.style.display = 'none';
        link.textContent = link.textContent.replace('▴','▾');
      } else {
        submenu.style.display = 'block';
        link.textContent = link.textContent.replace('▾','▴');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', includeHTML);
