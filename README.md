# React Homeworks — FSD

Учебное приложение на React и Vite: главная страница, карточка пользователя, переключение светлой и тёмной темы и пример работы ключей в списках.

## Запуск

Установите зависимости и запустите сервер разработки:

```bash
npm install
npm run dev
```

Откройте адрес, который Vite выведет в терминале.

Проверки проекта:

```bash
npm run build
npm run lint
npm run format:check
```

## Дерево папок проекта

```text
react-homeworks/
├── public/
├── src/
│   ├── app/
│   │   ├── App.jsx
│   │   ├── providers/
│   │   │   └── ThemeProvider.jsx
│   │   └── styles/
│   │       └── index.css
│   ├── pages/
│   │   └── home/
│   │       ├── index.js
│   │       └── ui/
│   │           └── HomePage.jsx
│   ├── widgets/
│   │   ├── header/
│   │   │   ├── index.js
│   │   │   └── ui/
│   │   │       ├── Header.jsx
│   │   │       └── Header.css
│   │   └── list-demo/
│   │       ├── index.js
│   │       └── ui/
│   │           ├── ListDemo.jsx
│   │           ├── ListItem.jsx
│   │           ├── ListWithKey.jsx
│   │           └── ListWithoutKey.jsx
│   ├── features/
│   │   └── toggle-theme/
│   │       ├── index.js
│   │       └── ui/
│   │           └── ToggleTheme.jsx
│   ├── entities/
│   │   └── user/
│   │       ├── index.js
│   │       └── ui/
│   │           ├── UserCard.jsx
│   │           └── UserCard.css
│   ├── shared/
│   │   ├── lib/
│   │   │   └── theme/
│   │   │       ├── index.js
│   │   │       └── ThemeContext.jsx
│   │   └── ui/
│   │       └── button/
│   │           ├── index.js
│   │           ├── Button.jsx
│   │           └── Button.css
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

В дереве показаны исходники и основные файлы проекта. Служебные конфигурации, зависимости в node_modules и результат сборки в dist опущены. assets содержит оставшиеся ресурсы шаблона; текущие компоненты их не используют.

## Ответственность слоёв

- **app** — сборка приложения: главный компонент App, провайдер состояния темы и глобальные стили. App применяет текущую тему и отображает HomePage.
- **pages** — готовые страницы. HomePage объединяет Header, UserCard и ListDemo.
- **widgets** — самостоятельные блоки интерфейса. Header содержит заголовок и переключатель темы, ListDemo — интерактивный пример списков.
- **features** — действия пользователя. ToggleTheme переключает светлую и тёмную тему через контекст.
- **entities** — предметные сущности. UserCard отображает имя и роль пользователя, переданного через props.
- **shared** — переиспользуемый код: общий UI-компонент Button и контекст темы ThemeContext. Этот слой не импортирует страницы, виджеты или features.

main.jsx — точка входа: подключает App к DOM и оборачивает его в ThemeProvider и StrictMode.

Слои зависят от нижележащих слоёв в порядке app → pages → widgets → features → entities → shared. Импортировать соседний или вышележащий слой не нужно. Внутри одного модуля допустимы относительные импорты его файлов. Файлы index.js задают публичный API модулей, поэтому другим слоям не требуется обращаться к их внутренним ui-файлам. Такая направленность зависимостей предотвращает циклические импорты между слоями.

## Три примера импортов

1. Страница HomePage импортирует виджет Header в src/pages/home/ui/HomePage.jsx:

   ```jsx
   import { Header } from '../../../widgets/header'
   ```

2. Виджет Header импортирует действие ToggleTheme в src/widgets/header/ui/Header.jsx:

   ```jsx
   import { ToggleTheme } from '../../../features/toggle-theme'
   ```

3. Feature ToggleTheme использует общую кнопку в src/features/toggle-theme/ui/ToggleTheme.jsx:

   ```jsx
   import { Button } from '../../../shared/ui/button'
   ```

Все три импорта направлены в нижележащие слои и используют публичный API через index.js.

## Почему удобнее одной папки components

Названия слоёв сразу показывают назначение кода: страницу ищем в pages, действие пользователя — в features, универсальную кнопку — в shared. Изменение карточки пользователя сосредоточено в entities/user, а переключения темы — в features/toggle-theme. Компоненты и их стили находятся рядом.

В плоской папке components страницы, действия и общие элементы смешиваются, и при росте проекта становится сложнее понять их зависимости. FSD задаёт границы модулей и направление импортов, поэтому проще искать код, переиспользовать его и менять отдельные части приложения.

## Пример ключей в списках

Reconciliation — сравнение предыдущего и нового дерева элементов React для обновления интерфейса. Ключ key помогает сопоставлять элементы списка между рендерами.

ListWithKey использует стабильный id: при изменении порядка состояние поля ввода остаётся у соответствующего элемента. ListWithoutKey намеренно использует индекс для демонстрации ошибки: после добавления, удаления или перемешивания индекс может принадлежать другому элементу, и состояние поля будет связано с позицией в списке.
