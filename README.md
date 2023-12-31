# Сайт для ведущих свадьбы

Помогает ведущим идентифицировать гостей в зале и получать информацию о них.

Перейти на [сайт](http://guests.rakulagin.com).

Запуск приложения: npm run start


## Интерфейс приложения:

 `Поиск` : Поиск по имени и фамилии, регистр не важен.

`Очистить` : Очистка строки поиска, остальные фильтры остаются.

`Сбросить фильтры` : Сброс всех фильтров, очистка строки поиска, плавное возвращение к началу страницы.

Отображение числа гостей: Показывает общее кол-во гостей и кол-во гостей, в зависимости от выбранных фильтров.

При скролле основные элементы управления прилипают к экрану, так же появляется кнопка возврата к началу страницы.

## Фильтры:

Кнопка `Фильтры` отображает выезжающую панель. Закрыть панель можно нажтием на затемненную область экрана. При закрытии панели с фильтрами происходит плавный возврат к началу страницы. Кнопка `Сбросить` убирает все фильтры, но не закрывает панель, так же возвращая к началу страницы.

Доступные фильтры: <br>
Сторона: невесты / Сторона жениха <br>
Важность: Родственники / близкие друзья / друзья <br>
Активность: высокая / низкая <br>
История: гости с историей / все гости <br>
Столы: возможность вабрать номер стола и увидеть кто за ним сидит <br>

При добавлении фильтров на главном экране появляется панель с миниатюрами примененных фильтров в виде эмодзи. По клику на них можно отменить один текущий ильтр, либо сбросить все сразу, нажав `Сбросить фильтры`.

## Стек:

React, Redux, Bootstrap, Lazy loading (React Intersection Observer), Express, MongoDB.
