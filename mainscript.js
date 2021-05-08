function isSearch() {
    var str = document.getElementById("matht").value;
    switch(str) {
        case "Дискретная математика":
            document.getElementById("hp").innerHTML = str;
	    document.getElementById("p1").innerHTML = "";
            document.getElementById('p1').innerHTML += ("Теория графов"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Теория графов"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Математическое моделирование"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Математическое моделирование"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Теория Вероятностей"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Теория Вероятностей"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Комбинаторика"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Комбинаторика"+'</span>'+'<br><br>');
            break;
        case "Теория Вероятностей":
            document.getElementById("hp").innerHTML = str;
	    document.getElementById("p1").innerHTML = "";
            document.getElementById('p1').innerHTML += ('<span style="color: #F6CD61">'+"Data Science"+'</span>'+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Наука_о_данных"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Компьютерное зрение"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Компьютерное_зрение"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Биржи, Рынки их анализ"+'<br>'+'<span style="color: #FE8A71">'+"https://place.moex.com/useful/osnovnie-figury-v-tehnicheskom-analize"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Криптография и шифрование"+'<br>'+'<span style="color: #FE8A71">'+"https://www.krukovo.ru/stat/cript"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Моделирование физических процессов"+'<br>'+'<span style="color: #FE8A71">'+"https://mipt.ru/education/departments/fakt/masters/kompyuternoe-modelirovanie-fizicheskikh-protsessov.php"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Создание игр"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Разработка_компьютерных_игр"+'<br>'+"https://pikabu.ru/story/zachem_nuzhna_matematika_v_kompyuternyikh_igrakh_chast_1_4419382"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Математическое моделирование"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Математическая_модель"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Веб-картография"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Веб-картография"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Создание навинаторов"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Спутниковый_навигатор"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Оптимизация процессов"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Оптимизация_(математика)"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Таргетинг реклам"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Таргетинг"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Теория чисел"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Теория_чисел"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Обработка сигналов"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Обработка_сигналов"+'</span>'+'<br><br>');
            break;
        case "Линейная алгебра и геометрия":
            document.getElementById("hp").innerHTML = str;
	    document.getElementById("p1").innerHTML = "";
            document.getElementById('p1').innerHTML += ("Работа с графикой"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Компьютерная_графика"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Сжатие, хранение информации(Структуры данных)"+'<br>'+'<span style="color: #FE8A71">'+"https://studfile.net/preview/6022802/page:4/"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Машинное обучение"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Машинное_обучение"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Создание игр"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Разработка_компьютерных_игр"+'<br>'+"https://pikabu.ru/story/zachem_nuzhna_matematika_v_kompyuternyikh_igrakh_chast_1_4419382"+'</span>'+'<br><br>');
            break;
        case "Дифференциальные и интегральное исчисления":
            document.getElementById("hp").innerHTML = str;
	    document.getElementById("p1").innerHTML = "";
            document.getElementById('p1').innerHTML = "Использиются почти повсеместно, но не в чистом виде — в совокупности с другими разделами математики(анали-"+'<br>'+"зом, статистикой, моделировании)"+'<br>'+'<span style="color: #FE8A71">'+"https://math.ru/lib/276"+'</span>';
            break;
        case "Вариационнное исчисление и оптимизация":
            document.getElementById("hp").innerHTML = str;
	    document.getElementById("p1").innerHTML = "";
            document.getElementById('p1').innerHTML = "Оптимизация процессов в экономике, логистике, маршрутизации"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Оптимизация_(математика)"+'</span>'+'<br><br>'+"Пострение графиков функциии(от какой то переменной) с ограничениями"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Matplotlib"+'</span>';
            break;
        case "Математическое моделирование":
            document.getElementById("hp").innerHTML = str;
	    document.getElementById("p1").innerHTML = "";
            document.getElementById('p1').innerHTML += ("Создание и визуализация физических, химических, электрических систем;"+'<br>');
            document.getElementById('p1').innerHTML += ("Создание и проектирование различных систем(карт дорог, города, нагрузок, печатных плат, процессоров)"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Компьютерное_моделирование"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Работа с анимацией"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Компьютерная_анимация"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Робототехника"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Робототехника"+'</span>'+'<br><br>');
            break;
        case "Математическая логика":
            document.getElementById("hp").innerHTML = str;
	    document.getElementById("p1").innerHTML = "";
            document.getElementById('p1').innerHTML = "Математическая логика — основа программирования. Она используется в таких простейших функциях как "+'<span style="color: #F6CD61">'+"if/else"+'</span>'+", специальных типах данных таких как множества в "+'<span style="color: #F6CD61">'+"Python"+'</span>'+" и "+'<span style="color: #F6CD61">'+"boolean (True False)"+'</span>'+" — основной логический тип данных. Повсеместно в компьютерных науках от языка программирования до устройства ОС и процессора" + '<br>' + '<span style="color: #FE8A71">'+"https://book.etudes.ru/toc/mathnlogic/"+'</span>';
            break;
        case "Математический анализ":
            document.getElementById("hp").innerHTML = str;
	    document.getElementById("p1").innerHTML = "";
            document.getElementById('p1').innerHTML += ("Оптимальное составление планов, правильное распределение ресурсов, оптимальное распределение мощностей на производстве с помощью математического анализа"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Анализ_(раздел_математики)"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Прогнозирование состояний системы при моделировании с параметрами(финансовый, банковский сектор)"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Параметрическое_моделирование"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Линейное программирование"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Линейное_программирование"+'</span>'+'<br><br>');
            break;
        case "Теория графов":
            document.getElementById("hp").innerHTML = str;
	    document.getElementById("p1").innerHTML = "";
	    document.getElementById('p1').innerHTML += ('<span style="color: #F6CD61">'+"GPS"+'</span>'+", оптимизация и управления транспортными путями создание карт городов, логистика, передача данных по протоколам("+'<span style="color: #F6CD61">'+ "Wi-Fi" +'</span>'+ ", " +'<span style="color: #F6CD61">'+"Bluetooth"+'</span>'+", интернет протоколы), управление рисками и сложных структурах"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Спутниковая_система_навигации"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Работа с алгоритмами"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Алгоритм"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Работа с архитектурами (определение зависимостей, уязвимостей)"+'<br>'+'<span style="color: #FE8A71">'+"https://habr.com/ru/post/353698/"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Поиск (браузерный и алгоритмический)"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Поисковая_система"+'<br>'+"https://medium.com/nuances-of-programming/%D0%B3%D1%80%D0%B0%D1%84%D1%8B-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-%D1%82%D0%B5%D0%BE%D1%80%D0%B8%D0%B8-%D0%B0%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC%D1%8B-%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0-b93672f59747"+'</span>'+'<br><br>');
            break;
        case "Комбинаторика":
            document.getElementById("hp").innerHTML = str;
	    document.getElementById("p1").innerHTML = "";
            document.getElementById('p1').innerHTML += ("Банковское дело"+'<br>'+'<span style="color: #FE8A71">'+"https://habr.com/ru/company/iticapital/blog/333908/"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Статистика"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Статистика"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Шифрование и Криптография"+'<br>'+'<span style="color: #FE8A71">'+"https://www.krukovo.ru/stat/cript"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Теория алгоритмов"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Теория_алгоритмов"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Сложные алгоритмы теории чисел"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Теория_чисел"+'</span>'+'<br><br>');
            document.getElementById('p1').innerHTML += ("Создание игр"+'<br>'+'<span style="color: #FE8A71">'+"https://ru.wikipedia.org/wiki/Разработка_компьютерных_игр"+'<br>'+"https://pikabu.ru/story/zachem_nuzhna_matematika_v_kompyuternyikh_igrakh_chast_1_4419382"+'</span>'+'<br><br>');
            break;
	case "Хакатон":
	    document.getElementById("hp").innerHTML = str;
	    document.getElementById("p1").innerHTML = '<span style="color: #FE8A71">'+"https://vk.com/city_heroes_omsk";
	    break;
	case "Числа":
	    document.getElementById("hp").innerHTML = str;
	    document.getElementById("p1").innerHTML = "";
	    document.getElementById("p1").innerHTML += '<span style="color: #F6CD61">'+"N, Z "+'</span>'+"-> "+'<span style="color: #FE8A71">'+"int (long, long long)"+'</span>'+'<br>';
	    document.getElementById("p1").innerHTML += '<span style="color: #F6CD61">'+"Q, R "+'</span>'+"-> "+'<span style="color: #FE8A71">'+"float (double)"+'</span>'+'<br>';
	    document.getElementById("p1").innerHTML += '<span style="color: #F6CD61">'+"C "+'</span>'+"-> "+'<span style="color: #FE8A71">'+"j (Python), complex<type> i(r, z) (C++)"+'</span>'+'<br>';
	    break;
	case "Операции":
	    document.getElementById("hp").innerHTML = str;
	    document.getElementById("p1").innerHTML = "";
	    document.getElementById("p1").innerHTML += '<span style="color: #F6CD61">'+"+, -, *, =, ^, ÷, mod, (2)√, log"+'</span>'+"-> "+'<span style="color: #FE8A71">'+"+, -, *, = (==(приравнивание)), ** (Python), pow() (C++), / (//), %, log()"+'</span>'+'<br>';
	    break;
        default:
            document.getElementById("hp").innerHTML = "[ ... ]";
            document.getElementById("p1").innerHTML = "";
            break;
    }
}
