# 🔧 Troubleshooting Guide

## Проблеми з підключенням до сервера

### ❌ Помилка: `net::ERR_CONNECTION_REFUSED`

**Причина:** Сервер не запущений або недоступний.

**Рішення:**
1. Переконайтеся, що ви знаходитесь в кореневій папці проекту
2. Запустіть сервер:
   ```bash
   # Варіант 1: Запуск обох серверів одночасно
   npm run dev
   
   # Варіант 2: Використання скрипту
   npm run start
   
   # Варіант 3: Ручний запуск
   cd server && npm run dev
   ```

3. Перевірте, чи сервер запущений:
   ```bash
   curl http://localhost:3001/api/health
   ```

### ❌ Помилка: `Server is not responding properly`

**Причина:** Сервер запущений, але не відповідає на health check.

**Рішення:**
1. Перезапустіть сервер
2. Перевірте логи сервера на помилки
3. Переконайтеся, що порт 3001 не зайнятий іншим процесом

### ❌ Помилка: `Authentication failed`

**Причина:** Неправильні дані для Gmail або App Password не налаштований.

**Рішення:**
1. Увімкніть двофакторну автентифікацію в Gmail
2. Створіть App Password:
   - Google Account Settings → Security → 2-Step Verification
   - App passwords → Generate new password
3. Використовуйте App Password замість звичайного пароля

## Проблеми з валідацією

### ❌ Помилка: `Invalid email format`

**Рішення:**
- Переконайтеся, що email має правильний формат: `user@domain.com`
- Перевірте наявність символу `@` та домену

### ❌ Помилка: `HTML content is required`

**Рішення:**
- Додайте контент до редактора HTML
- Переконайтеся, що контент не порожній

## Проблеми з залежностями

### ❌ Помилка: `Module not found`

**Рішення:**
```bash
# Перевстановіть залежності
rm -rf node_modules package-lock.json
npm install

# Для backend
cd server
rm -rf node_modules package-lock.json
npm install
cd ..
```

## Проблеми з портами

### ❌ Помилка: `Port already in use`

**Рішення:**
1. Знайдіть процес, що використовує порт:
   ```bash
   lsof -i :3001  # для backend
   lsof -i :5173  # для frontend
   ```

2. Зупиніть процес:
   ```bash
   kill -9 <PID>
   ```

## Проблеми з TypeScript

### ❌ Помилка: `Type error`

**Рішення:**
```bash
# Перевірка типів
npm run type-check

# Виправлення помилок лінтера
npm run lint:fix
```

## Корисні команди

```bash
# Перевірка стану серверів
curl http://localhost:3001/api/health

# Перегляд логів
tail -f server/logs/app.log

# Очищення кешу
npm run build -- --force

# Запуск тестів
npm run test
```

## Контакти

Якщо проблема не вирішена, створіть issue в репозиторії з:
- Описом проблеми
- Кроками для відтворення
- Логами помилок
- Версією Node.js та npm 