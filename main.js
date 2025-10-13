// Функция для отправки формы (используется на contacts.html)
function submitForm() {
    const form = document.getElementById('feedbackForm');
    if (!form) return; // Если формы нет, выходим тихо

    const formData = new FormData(form);

    // Простая валидация
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // Собираем данные формы
    const data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        category: formData.get('category'),
        message: formData.get('message')
    };

    // В реальном приложении здесь был бы AJAX-запрос
    console.log('Данные формы:', data);

    // Показываем уведомление об успешной отправке
    alert('Спасибо! Ваше обращение отправлено. Мы свяжемся с вами в ближайшее время.');

    // Закрываем модальное окно, если оно существует
    const contactModal = document.getElementById('contactModal');
    if (contactModal) contactModal.close();

    // Очищаем форму
    form.reset();
}

// Код для модального окна (только если элементы существуют)
document.addEventListener('DOMContentLoaded', () => {
    const contactModal = document.getElementById('contactModal');
    if (contactModal) {
        contactModal.addEventListener('click', function (event) {
            if (event.target === this) {
                this.close();
            }
        });
    }

    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('keypress', function (event) {
            if (event.key === 'Enter' && event.target.type !== 'textarea') {
                event.preventDefault();
            }
        });
    }

    // Код для переключения темы (работает на всех страницах)
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) { // Проверка на наличие кнопки
        const body = document.body;

        // Проверяем сохранённую тему в localStorage
        if (localStorage.getItem('theme') === 'dark') {
            body.classList.add('dark-theme');
            toggleButton.textContent = '☀️ Светлая тема';
        }

        // Обработчик клика на кнопку
        toggleButton.addEventListener('click', () => {
            body.classList.toggle('dark-theme');

            if (body.classList.contains('dark-theme')) {
                toggleButton.textContent = '☀️ Светлая тема';
                localStorage.setItem('theme', 'dark');
            } else {
                toggleButton.textContent = '🌙 Тёмная тема';
                localStorage.setItem('theme', 'light');
            }
        });
    }
});