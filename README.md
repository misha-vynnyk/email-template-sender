# Email Template Sender 🚀📧

**Email Template Sender** — сучасний вебдодаток для створення, редагування та відправки HTML email-шаблонів у реальному часі.
Ідеальний інструмент для фронтендерів, маркетологів і всіх, хто хоче зручно керувати email-шаблонами.

---

## �� Основні функції

- ✨ Редактор HTML-коду з підсвіткою синтаксису (CodeMirror)
- 📱 Live preview адаптивного email у різних розмірах
- 🔧 Форматування коду (prettify)
- ✅ Валідація HTML перед відправкою
- 💾 Збереження і керування шаблонами через LocalStorage
- 📨 Відправка листів через бекенд з валідацією
- 🎨 Темна і світла тема
- 🎭 Зручний UI з анімаціями і тостами
- 🔒 Безпечна валідація даних
- ⚡ Автозбереження налаштувань

---

## 🛠 Технології

### Frontend
- **React 19** - Сучасний UI фреймворк
- **TypeScript** - Типізація для надійності
- **Vite** - Швидкий бандлер
- **styled-components** - CSS-in-JS стилізація
- **react-codemirror** - Потужний редактор коду
- **react-toastify** - Сповіщення
- **framer-motion** - Анімації
- **react-router-dom** - Навігація

### Backend
- **Node.js** - Серверна платформа
- **Express** - Веб-фреймворк
- **nodemailer** - Відправка email
- **cors** - Cross-origin requests
- **dotenv** - Управління змінними середовища

---

## 🚀 Швидкий старт

### 1. Клонування репозиторію
```bash
git clone https://github.com/misha-vynnyk/email-template-sender.git
cd email-template-sender
```

### 2. Встановлення залежностей
```bash
# Frontend залежності
npm install

# Backend залежності
cd server && npm install && cd ..
```

### 3. Налаштування середовища
```bash
# Скопіюйте приклад конфігурації
cp env.example .env

# Відредагуйте .env файл
nano .env
```

### 4. Налаштування Gmail
1. Увійдіть в свій Gmail акаунт
2. Увімкніть двофакторну автентифікацію
3. Створіть App Password:
   - Перейдіть в Google Account Settings
   - Security → 2-Step Verification → App passwords
   - Створіть новий пароль для додатку

### 5. Запуск додатку
```bash
# Запуск frontend та backend одночасно
npm run dev

# Або окремо:
# Frontend (порт 5173)
npm run dev

# Backend (порт 3001)
cd server && npm run dev
```

---

## ⚙️ Конфігурація

### Змінні середовища (.env)
```env
# Frontend
VITE_EMAIL_USER=your-email@gmail.com
VITE_DESTINATION_EMAIL_USER=receiver@example.com
VITE_EMAIL_PASS=your-app-password

# Backend
NODE_ENV=development
PORT=3001
```

### Структура проекту
```
email-template-sender/
├── src/                    # React компоненти
│   ├── components/         # UI компоненти
│   ├── pages/             # Сторінки додатку
│   ├── store/             # Управління станом
│   ├── styles/            # Глобальні стилі
│   └── types/             # TypeScript типи
├── server/                # Node.js бекенд
│   ├── index.js           # Основний сервер
│   └── package.json       # Backend залежності
├── public/                # Статичні файли
├── package.json           # Frontend залежності
├── vite.config.ts         # Vite конфігурація
└── README.md
```

---

## 🔧 Розробка

### Доступні скрипти
```bash
# Розробка
npm run dev              # Запуск frontend + backend
npm run build            # Збірка для продакшену
npm run preview          # Превью збірки
npm run lint             # Перевірка коду
npm run test             # Запуск тестів

# Backend
cd server
npm run dev              # Запуск з nodemon
npm run serve            # Запуск без nodemon
```

### Лінтер та форматування
Проект використовує ESLint з TypeScript та React правилами.

---

## 🚀 Деплой

### GitHub Pages
```bash
npm run build
npm run deploy
```

### Інші платформи
Проект готовий для деплою на:
- Vercel
- Netlify
- Heroku
- Railway

---

## 🔒 Безпека

### Валідація даних
- ✅ Email формат валідація
- ✅ HTML контент валідація
- ✅ Обмеження розміру файлів
- ✅ CORS налаштування

### Безпечне зберігання
- 🔐 App passwords замість звичайних паролів
- 💾 Локальне зберігання через LocalStorage
- 🧹 Автоматичне очищення даних

---

## 🤝 Внесок

Ласкаво просимо до співпраці! 

### Як внести зміни:
1. Fork репозиторію
2. Створіть feature branch (`git checkout -b feature/amazing-feature`)
3. Commit зміни (`git commit -m 'Add amazing feature'`)
4. Push в branch (`git push origin feature/amazing-feature`)
5. Відкрийте Pull Request

### Стандарти коду:
- TypeScript для типізації
- ESLint для якості коду
- Prettier для форматування
- Conventional Commits для commit повідомлень

---

## 📄 Ліцензія

MIT License © 2025 Misha Vynnyk

---

## 🙏 Подяки

- [CodeMirror](https://codemirror.net/) - Потужний редактор коду
- [Nodemailer](https://nodemailer.com/) - Email відправка
- [Framer Motion](https://www.framer.com/motion/) - Анімації
- [React Toastify](https://fkhadra.github.io/react-toastify/) - Сповіщення
