# App article aggregator
В проекте используется метадология Feature-Sliced Design. Для использования скриншотных тестов необходимо установить <b><u>Docker</u></b>

### Основные скрипты
<p><code>npm start</code> - запуск приложения на сервере</p>
<p><code>npm lint:ts</code> - проверка eslint</p>
<p><code>npm lint:scss</code> - проверка stylint</p>
<p><code>npm test:unit</code> - запуск unit тестов</p>
<hr>
<p>Для скриншотных тестов необходимо сначала запустить storybook</p>
<p><code>npm storybook</code> - запуск storybook</p>
<p><code>npm test:ui</code> - запуск скриншотных тестов</p>
<p><code>npm test:ui:ok</code> - подтвердить изменения при конфликте</p>
<p><code>npm test:ui:update</code> - обновить данные для CI</p>
<hr>
<p><code>npm test:ui:report</code> - создать html файл для наглядного отчёта по скриншотным тестам</p>
<hr>

### Файловая структура

    .
    ├── build                   # Папка сборки
    ├── config                  # Папка конфигурации проекта
    │   ├── build               # Папка конфигурации webpack
    │   │   └── buildDevServer.ts  
    │   │       ├── buildLoaders.ts   
    │   │       ├── loaders
    │   │           └── ...     # Декомпозиция крупных лоадеров
    │   │       ├── buildPlugins.ts 
    │   │       ├── buildResolvers.ts 
    │   │       ├── buildWebpackConfig.ts    # Основной файл конфигурации
    │   │       ├── types   
    │   │           └── config.ts   # Описание типов конфигурации
    │   ├── jest                # Папка конфигурации тестов
    │   └── storybook           
    │  
    │  
    ├── .loki                   # Папка скриншотных тестов
    ├── .github                 # CI pipeline
    ├── scripts                 # глобальные проектные скрипты
    │   └── generate-visual-json-report       # Настройка визуального отображение скриншотных тестов
    │  
    │  
    ├── publick                 
    │   ├── index.html          # шаблон
    │   └── locales             # локализация сайта
    │  
    │  
    ├── src                     # основные файлы FSD метадология
    │   ├── app
    │   ├── pages             
    │   ├── widgets           
    │   ├── features  
    │   └── shared
    │  
    │  
    ├── .eslintrc.js            # настройка eslint
    ├── .stylelintrc.json       # настройка stylelint
    ├── tsconfig.json           # настройка ts
    ├── webpack.config.ts       # входная точка в вебпак
    └── ...

