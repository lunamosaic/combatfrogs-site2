# Combat Frogs — Explorer Starter

Готовый минимальный каркас сайта на **Next.js (App Router)** + **Tailwind CSS**:
- `/explorer` — грид NFT с фильтрами (мок-данные).
- `/dashboard` — заглушка кабинета держателя.
- `/buy` — ссылки на маркетплейсы.
- API: `/api/traits`, `/api/tokens`.

## Быстрый старт

```bash
# 1) Установи зависимости
npm install

# 2) Запусти локально
npm run dev
# Открой http://localhost:3000
```

**Node.js 18+** рекомендуется.

## Структура
```
app/
  api/
    traits/route.js
    tokens/route.js
  explorer/page.jsx
  dashboard/page.jsx
  buy/page.jsx
  layout.jsx
  globals.css
components/
  Navbar.jsx
  TraitsFilter.jsx
  TokenCard.jsx
lib/
  data.js (мок-данные)
public/
  logo.svg
  mock/*.png
```

## Куда встраивать реальные данные
- Заменить `lib/data.js` на загрузку из твоего источника (индексер/внешний API).
- Расширить `/api/tokens` фильтрами по `traits` (сейчас демонстрация — фильтрация идёт на клиенте).
- Подключить кошельки/Discord в `dashboard` (сейчас заглушка).
- В `/buy` поставить настоящие ссылки на коллекции.

## Деплой
- Работает из коробки на Vercel/Node хостингах. Для Cloudflare Pages можно оставить как есть (SPA) или собрать SSG.
- Репозиторий GitHub: просто залей эти файлы и подключи автодеплой на выбранной платформе.

## Лицензия
MIT (можно свободно модифицировать и использовать).