# React + Vite

Этот шаблон предоставляет минимальную настройку для работы React с Vite, включая HMR и некоторые правила Oxlint.

1.Reconciliation- это сравнивание текущего и предыдущего состояния компонента. На основании изменений происходит обновление UI. Сначала сравниваются корневые элементы, если они отличаются, то перерисовка будет полностью
2.key нужен для правильного отображения СПИСКА элементов, особенно это касается динамического списка.
3.индекс массива не подходит, т.к при добавлении\удалении (любом изменении) элемента его индекс меняется, соответственно невозможно правильно отобразить состояния, которые к ним относятся
4.если правильный key, то при любом изменении порядка элементов правильно отображаются состояния, которые к ним относятся

## Доступные плагины

В настоящее время доступны два официальных плагина:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) использует [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) использует [SWC](https://swc.rs/)

## 🚀 Установка и запуск проекта

## Оптимизация загрузки страниц

Страницы каталога (`CatalogPage`) и профиля (`ProfilePage`) подключены с помощью `React.lazy`.

Эти страницы вынесены в отдельные чанки, чтобы их код загружался только при переходе пользователя на соответствующий маршрут. Это уменьшает размер первоначально загружаемого JavaScript.

Во время загрузки каждой lazy-страницы компонент `Suspense` показывает сообщение «Идет загрузка...».

### Предварительные требования

- Установленный [Node.js](https://nodejs.org/) (версия 18 или выше)
- Менеджер пакетов npm (устанавливается вместе с Node.js)

### Установка зависимостей

```bash
npm install

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
```
