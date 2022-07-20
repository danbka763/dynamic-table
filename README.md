## Задача на собеседование в компанию

### Нужно сделать динамическую таблицу, которая: 
 - строится исходя из отправленных в неё данных (в JSON формате)
 - умеет фильтровать
 - умеет сортировать
 - желательно не использовать готовые библиотеки, нужно написать функции самому вручную
 - дизайн не имеет никакого значения

![скриншот динамической таблицы](https://s254vla.storage.yandex.net/rdisk/5942d21f06bc586e3dce2d14d077a033465fba029b5deb65aeb5943ff057b469/62d7a001/xnAyfydo5Isvlf_2ppBIDLzl1bLuBTuvrBlxANXsFUt4Vo1lSj8rOdZZFJKYP07zck2rnRuyEksSU5c-iLmclw==?uid=0&filename=2022-07-20_09-24-30.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&fsize=9634&hid=95221deaea83826777a2d23af00667f3&media_type=image&tknv=v2&etag=8b4630f61f8df694d7ffbc67e42d2ee1&rtoken=ywXTrvgIMHc7&force_default=no&ycrid=na-941bfdef4da7eb82ddc4ed5fe372ed01-downloader10f&ts=5e436ad374240&s=b9ccd92b118cf767d2d5af9b108d1d051202d6646099f556b8f5be502de1778a&pb=U2FsdGVkX19XjeJevxoJEmBQh9yI4aE_ypIROyQjRTSqZXWgiis1lkdeimbMNbUKQnYqnZ_bUJmUoJTveXXMInXY8f_6nYeJaKjS3yJdh3g)

### Реализация:
 - Создана JSON таблица в src/data/data.js
 - Получаем таблицу в компоненте Table (src/Components/Table)
 - Создаём сейт с текстом для фильтрации и сортировки
 ```
  // Стейт сортировки
  // [
  //   индекс колонны,
  //   направление (true -> по возрастанию, false -> по убыванию)
  // ]
  const [sort, editSort] = useState([0, true]);
  const [text, editText] = useState("");
 ```
 - Вызываем из ui-kit DTheadRender и формируем шапку таблицы
 - Вызываем из ui-kit DTbodyRender и формируем тело таблицы
 - При клике на заголовок либо совершается сортировка по данному заголовку, либо меняется направление (от меньшего к большему и наоборот)
 - Для фильтрации можно вписать данные из разных колонок, код всё-равно выведет строку, которая совпала с текстом. К примеру, если вписать "cRaIG 21 DoNnA" - скрипт всё-равно выведет строку под id 1. Для этого была прописана функция поиска совпадений в coincidence.js (src/helpers/coincidence). Сложность кода из функции O[N^2], Проще варианта реализовать данный скрипт я не придумал :)

 
 ### Примечания: 
 Для выполнения задачи не видел смысла создавать state manager, так как задача сама по себе достаточно простая и состоит всего из одного компонента


 На выполнение задачи было затрачено 3 часа 54 минуты, исходя из отчёта таймтрекера
 ![Скриншот из таймтрекера](https://s33vla.storage.yandex.net/rdisk/24871de052a44b1fab86f0a9013371ef1e251fd8a06428210cf259d7c346cf9f/62d7a2e6/xnAyfydo5Isvlf_2ppBIDOlOJz7Ua0pAcsj0A4KbhS1xH_hwPswBnxzuiF5vld0oZfC3BJ-gnoD2UQvFG6or3g==?uid=0&filename=2022-07-20_09-36-26.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&fsize=91161&hid=5d0a89a4f35d6b02f8cfb7b53afded2e&media_type=image&tknv=v2&etag=4e2d0c2f2f1fe64e4e45bf7e0fd71a5a&rtoken=Im55YBJVf1Wv&force_default=no&ycrid=na-89954696769f9c6e3f8159d6722f8609-downloader3e&ts=5e436d9620580&s=70cd15ddb03e522f99e66761f47cbeb966eb36264221086a2b780b8f6f0f0e37&pb=U2FsdGVkX1-lBxLMyKI-X5pj7cc3zUDdwDX1taLjTBzmMl_Lsx4YSziDvK8qznrcFcyzMRyyzR0dTBMqrNbNU2a2L9OMSutPEBioWf2ftnY)