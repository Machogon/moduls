// ======================== Файл категорий для Tampermonkey ========================
/**
 * Базовый шаблон для создания модуля категории
 * @param {string} categoryName - Название категории (точно как в системе)
 * @param {object} parameters - Параметры и их значения
 * @param {object} [options] - Дополнительные настройки
 * @param {string[]} [options.stopWords] - Слова, запрещающие добавление параметров
 * @param {boolean} [options.skipSideIfNotFound] - Пропускать "Сторону установки" если не найдена
 */
const createCategoryModule = (categoryName, parameters, { stopWords = [], skipSideIfNotFound = false } = {}) => ({
    parameters,
    stopWords,
    skipSideIfNotFound,
    determineValues: function(title) {
        if (!window.isScriptRunning) return null;
        const result = {};
        const lowerTitle = title.toLowerCase();

        // Проверка стоп-слов
        if (this.stopWords.some(word => lowerTitle.includes(word.toLowerCase()))) {
            console.log(`⛔ Стоп-слово найдено, пропускаем добавление параметров`);
            return null;
        }

        // Анализ параметров
        for (const [paramId, mappings] of Object.entries(this.parameters)) {
            for (const [value, keywords] of Object.entries(mappings)) {
                if (keywords.some(kw => lowerTitle.includes(kw.toLowerCase()))) {
                    result[paramId] = value;
                    break;
                }
            }
        }

        // Особый случай: добавление обеих сторон если не найдена
        if (paramId === "122881" && !result["122881"] && !this.skipSideIfNotFound && parameters["122881"]) {
            result["122881"] = ["Слева", "Справа"];
            console.log(`ℹ Добавляем обе стороны установки`);
        }

        return Object.keys(result).length ? result : null;
    },
    process: function() {
        console.log(`🔧 Обработка категории: ${categoryName}`);
        const productName = document.querySelector("input[name='name']")?.value.toLowerCase() || '';
        const params = this.determineValues(productName);
        
        if (!params) {
            console.log("⚠ Параметры не найдены в названии");
            window.goToNextProduct();
            return;
        }

        // Последовательное добавление параметров
        const processParam = (index) => {
            const paramEntries = Array.isArray(params) ? 
                params.map(value => [Object.keys(this.parameters)[0], value]) : 
                Object.entries(params);
            
            if (index >= paramEntries.length) {
                window.goToNextProduct();
                return;
            }

            const [paramId, value] = paramEntries[index];
            if (!window.checkIfParameterExists(paramId, value)) {
                window.addParameter(paramId, value, () => processParam(index + 1));
            } else {
                console.log(`✅ Параметр уже есть: ${paramId} = "${value}"`);
                processParam(index + 1);
            }
        };

        processParam(0);
    }
});

// ======================== ВСЕ КАТЕГОРИИ С ПОЛНЫМИ ПАРАМЕТРАМИ ========================
const categoryModules = {

// ======================================================================================
// ====================== 1. Комплектуючі стартерів та генераторів ======================
// ======================================================================================
"Комплектуючі стартерів та генераторів": createCategoryModule(
    "Комплектуючі стартерів та генераторів",
    {
        /* Параметр "Вид компонента" (ID: 251185) */
        "251185": {
            "Шкив генератора": ["шкив генератора", "шкиф генератора", "шкив гениратора", "муфта", "шків ременя генератора"],
            "Ротор генератора": ["ротор генератора", "ротар генератора"],
            "Ротор стартера": ["ротор стартера", "ротар стартера", "якір стартера"],
            "Статор стартера": ["статор стартера", "обмотка стартера"],
            "Статор генератора": ["статор генератора", "обмотка генератора"],
            "Втягивающие реле": ["втягивающие реле", "втягивающее реле", "реле втягуюче стартера", "контакт втягуючого реле"],
            "Бендиксы": ["бендикс", "bendix", "шестерня бендикса стартера", "ролик бендикса стартера"],
            "Регуляторы напряжения": ["регулятор напряжения", "регулятор напруги"],
            "Щетки стартеров": ["щетки стартера", "щетка стартера", "щіткотримач стартера", "щітка стартера"],
            "Щетки генераторов": ["щетки генератора", "щетка генератора", "щітка генератора"],
            "Механизм свободного хода генератора": ["механизм свободного хода генератора", "механизм свободного хода"],
            "Коллектор генератора": ["коллектор генератора"],
            "Щеточный узел стартера": ["щеточный узел стартера", "щіткотримач стартера"],
            "Подшипник генератора": ["подшипник генератора", "подшипник"],
            "Втулка стартера": ["втулка стартера"],
            "Крышка генератора": ["крышка генератора", "кришка генератора"],
            "Болт крепления генератора": ["болт крепления генератора", "шайби стартера"],
            "Редукторы стартера": ["редуктор стартера", "редуктор планетарний", "кільце металеве стопорне", "зубчасте колесо редуктора стартера"],
            "Щеточные узлы генератора": ["щеточный узел генератора"],
            "Крышки стартера": ["кришка стартера"],
            "Кронштейны генератора": ["кронштейн генератора"],
            "Диодные мосты": ["диодный мост", "диод мост", "випрямляч діодний"],
            "Вилка стартера": ["вилка стартера", "важіль стартера"]
        }
    }
),

// ======================================================================
// ====================== 2. Сайлентблоки подвески ======================
// ======================================================================
"Сайлентблоки подвески": createCategoryModule(
    "Сайлентблоки подвески",
    {
        /* Параметр "Ось" (ID: 122846) */
        "122846": {
            "Передняя": ["передняя", "передні", "front"],
            "Задняя": ["задняя", "задні", "rear"]
        },
        /* Параметр "Сторона установки" (ID: 122881) */
        "122881": {
            "Слева": ["слева", "ліворуч", "left"],
            "Справа": ["справа", "праворуч", "right"]
        },
        /* Параметр "Место размещения" (ID: 173460) */
        "173460": {
            "Рессоры": ["рессоры", "рессора"],
            "Рычаги": ["рычаги", "рычаг"],
            "Тяги": ["тяги", "тяга"],
            "Амортизаторы": ["амортизаторы", "амортизатор"],
            "Стабилизаторы": ["стабилизаторы", "стабилизатор"],
            "Рулевые рейки": ["рулевые рейки", "рулевая рейка"],
            "Балки": ["балки", "балка"]
        },
        /* Параметр "Материал" (ID: 173478) */
        "173478": {
            "Полиуретан": ["полиуретан", "поліуретан"]
        }
    }
),

// ==========================================================================
// ====================== 3. Тормозные шланги и трубки ======================
// ==========================================================================
"Тормозные шланги и трубки": createCategoryModule(
    "Тормозные шланги и трубки",
    {
        /* Параметр "Ось" (ID: 122846) */
        "122846": {
            "Передняя": ["передняя", "передні", "front", "перед"],
            "Задняя": ["задняя", "задні", "rear", "зад"]
        },
        /* Параметр "Сторона установки" (ID: 122881) */
        "122881": {
            "Слева": ["слева", "ліворуч", "left", "лев", "лів"],
            "Справа": ["справа", "праворуч", "right", "прав"]
        },
        /* Параметр "Тип детали" (ID: 250591) */
        "250591": {
            "Барабан тормозной": ["барабан тормозной", "барабан"],
            "Ремкомплект суппортов": ["ремкомплект суппортов", "ремкомплект суппорта"],
            "Ремкомплект колодок": ["ремкомплект колодок", "ремкомплект колодки"],
            "Бачок": ["бачок", "бачок тормозной"],
            "Суппорт тормозной": ["суппорт тормозной", "суппорт"],
            "Диск тормозной": ["диск тормозной", "диск"],
            "Щит тормозного диска": ["щит тормозного диска", "щит"],
            "Шланги тормозные": ["шланги тормозные", "шланг тормозной", "тормозной шланг", "тормозный шланг", "шланг", "шланг гальмівний", "гальмівний шланг"],
            "Трубки тормозные": ["трубки тормозные", "трубка тормозная", "трубка", "трубка гальмівна", "трубка системи гальм", "тормозная трубка"]
        }
    },
    { skipSideIfNotFound: true }
),

// =====================================================================
// ====================== 4. Датчики автомобільні ======================
// =====================================================================
"Датчики автомобільні": createCategoryModule(
    "Датчики автомобільні",
    {
        /* Параметр "Вид датчика" (ID: 251173) */
        "251173": {
            "Датчики давления в шинах": ["датчик давления в шинах", "датчик тиску шин"],
            "Вольтметры": ["вольтметр", "вольтметры"],
            "Датчики температуры": ["датчик температуры", "датчик температури", "внешняя температура", "температура"],
            "Счетчики моточасов": ["счетчик моточасов", "лічильник мотогодин"],
            "Датчики давления во впускном коллекторе": ["датчик давления во впускном коллекторе", "датчик тиску впускного колектора", "впускаемого воздуха", "наддув", "впускном"],
            "Датчики давления масла": ["датчик давления масла", "датчик тиску масла", "моторного масла"],
            "Индикаторы уровня заряда аккумулятора": ["индикатор уровня заряда аккумулятора", "індикатор заряду акумулятора"],
            "Датчики уровня охлаждающей жидкости": ["датчик уровня охлаждающей жидкости", "датчик рівня охолоджуючої рідини", "охлаждающей жидкости"],
            "Датчики включения/выключения": ["датчик включения/выключения", "датчик увімкнення/вимкнення", "выключатель", "перемикач"],
            "Расходомеры воздуха (ДМРВ)": ["расходомер воздуха", "дмрв", "витратомір повітря", "повітря"],
            "Кольца антиблокировочной системы АБС (ABS)": ["кольцо абс", "кільце антиблокувальної системи"],
            "Датчики парковки (парктроник)": ["датчик парковки", "парктроник", "при парковке"],
            "Датчики положения вала (коленчатого, распределительного)": ["датчик положения вала", "датчик коленвала", "датчик распредвала"],
            "Датчики холла": ["датчик холла", "датчик хола"],
            "Датчик уровня топлива": ["датчик уровня топлива", "датчик рівня палива"],
            "Датчики скорости": ["датчик скорости", "датчик швидкості", "участок пути", "скорость"],
            "Датчики уровня масла": ["датчик уровня масла", "датчик рівня масла"],
            "Датчики АБС (ABS)": ["датчик абс", "датчик abs", "частота вращения колеса", "ABS"],
            "Датчики давления в выпускном коллекторе": ["датчик давления в выпускном коллекторе", "датчик тиску випускного колектора"],
            "Датчик детонации": ["датчик детонации", "датчик детонації"],
            "Датчик положения дроссельной заслонки": ["датчик положения дроссельной заслонки", "датчик дросельної заслінки", "дроссельной"],
            "Датчики загрязнения фильтра салона": ["датчик загрязнения фильтра салона", "датчик забруднення фільтра салону"],
            "Датчики положения педали акселератора": ["датчик положения педали акселератора", "датчик педалі акселератора"],
            "Датчики положения рычага АКПП": ["датчик положения рычага акпп", "датчик положення важеля акпп"],
            "Датчики угла поворота руля": ["датчик угла поворота руля", "датчик кута повороту керма"],
            "Датчики уровня воды топливного фильтра": ["датчик уровня воды топливного фильтра", "датчик рівня води паливного фільтра"],
            "Датчики уровня жидкости стеклоомывателя": ["датчик уровня жидкости стеклоомывателя", "датчик рівня рідини склоомивача"],
            "Регуляторы холостого хода": ["регулятор холостого хода", "регулятор холостого ходу"],
            "Регуляторы давления топлива": ["регулятор давления топлива", "регулятор тиску палива"],
            "Датчики уровня кузова": ["датчик уровня кузова", "датчик рівня кузова"],
            "Датчики давления топлива": ["датчик давления топлива", "датчик тиску палива"]
        }
    }
),

// ======================================================================
// ====================== 5. Тросы сцепления и КПП ======================
// ======================================================================
"Тросы сцепления и КПП, приводы КПП, кулисы": createCategoryModule(
    "Тросы сцепления и КПП, приводы КПП, кулисы",
    {
        /* Параметр "Тип компонента" (ID: 251482) */
        "251482": {
            "Тросы сцепления": ["трос сцепления", "трос зчеплення", "тросик сцепления", "трос сцепл"],
            "Тросы переключения передач": ["трос переключения передач", "трос перемикання передач", "трос КПП", "трос коробки передач", "трос важеля КПП"],
            "Тяги переключения передач": ["тяга переключения передач", "тяга перемикання передач", "тяга КПП"],
            "Кулисы в сборе": ["кулиса в сборе", "куліса в зборі", "кулиса КПП", "куліса коробки передач"]
        }
    }
),

// ======================================================================
// ====================== 6. Зеркала автомобильные ======================
// ======================================================================    
"Зеркала автомобильные": createCategoryModule(
    "Зеркала автомобильные",
    {
        /* Параметр "Тип зеркала" (ID: 198908) */
        "198908": {"Боковые": []},
        /* Параметр "Сторона установки" (ID: 122881) */
        "122881": {
            "Слева": ["слева", "ліворуч", "left", "лев", "лів", "ливов"],
            "Справа": ["справа", "праворуч", "right", "пра"]
        }
    },
    {
        stopWords: ["накладка", "адаптер", "тримач", "кільце", "перемикач"]
    }
),

// =========================================================================
// ====================== 7. Компрессоры кондиционера ======================
// =========================================================================
"Компрессоры кондиционера автомобильные": createCategoryModule(
    "Компрессоры кондиционера автомобильные",
    {
        /* Параметр "Тип компрессора" (ID: 173742) */
        "173742": {
            "Компрессоры в сборе": ["компрессор в сборе", "компресор у зборі", "компрессор", "компресор"],
            "Клапаны компрессора": ["клапан компрессора", "клапан компресора", "клапан", "клапани"]
        }
    }
),

// ==================================================================
// ====================== 8. Муфты компрессора ======================
// ==================================================================
"Муфты компрессора кондиционера": createCategoryModule(
    "Муфты компрессора кондиционера",
    {
        /* Параметр "Тип муфты" (ID: 173742) */
        "173742": {
            "Диски сцепления муфты компрессора": ["диск сцепления муфты", "диск зчеплення муфти", "диск муфти"],
            "Муфты компрессора": ["муфта компрессора", "муфта компресора", "муфта", "электромагнитное"],
            "Подшипники муфты компрессора": ["подшипник муфты", "підшипник муфти", "подшипник"]
        }
    }
),

// ===================================================================
// ====================== 9. Топливные форсунки ======================
// ===================================================================
"Топливные форсунки": createCategoryModule(
    "Топливные форсунки",
    {
        /* Параметр "Тип компонента" (ID: 173742) */
        "173742": {
            "Втулки": ["втулка", "втулки"],
            "Крепежные элементы": ["крепежный элемент", "кріпильний елемент", "крепеж", "кріплення"],
            "Распылители форсунок": ["распылитель форсунки", "розпилювач форсунки", "распылитель", "розпилювач"],
            "Ремкомплекты": ["ремкомплект", "ремкомплекти", "ремонтный комплект"],
            "Уплотнительные кольца": ["уплотнительное кольцо", "ущільнювальне кільце", "уплотнитель", "ущільнювач"],
            "Форсунки": ["форсунка", "форсунки"]
        }
    }
),

// ========================================================================
// ====================== 10. Подшипники трансмиссии ======================
// ========================================================================
"Подшипники подвесные и подшипники трансмиссии": createCategoryModule(
    "Подшипники подвесные и подшипники трансмиссии",
    {
        /* Параметр "Тип подшипника" (ID: 251485) */
        "251485": {
            "Подшипники КПП": ["подшипник кпп", "подшипник первичного вала кпп", "подшипник коробки", "пiдшипник кпп"],
            "Подшипники подвесные": [
                "опора карданного вала",
                "подшипник подвісний",
                "підшипник підвісний",
                "центрирующая втулка, продольный вал",
                "подвеска, карданный вал",
                "подшипник промежуточный подшипник карданного вала",
                "подшипник подвесной",
                "подшипник шариковый",
                "підшипник кульковий",
                "подшипник игольчатый",
                "підшипник голчастий",
                "подшипник роликовый",
                "подшипник корпусный",
                "подшипник миниатюрный",
                "подшипник самоустанавливающийся",
                "подшипник радиальный",
                "крепление с подшипником",
                "узел подшипниковый фланцевый",
                "подшипник колеса, комплект",
                "опорный подшипник приводного вала"
            ]
        }
    }
),

// =================================================================
// ====================== 11. Рейки топливные ======================
// =================================================================
"Рейки топливные, топливопроводы и их части": createCategoryModule(
    "Рейки топливные, топливопроводы и их части",
    {
        /* Параметр "Тип компонента" (ID: 173742) */
        "173742": {
            "Обратные клапаны": ["обратный клапан","зворотний клапан","обратн клапан","клапан топливный обратный","клапан паливний зворотний"],
            "Рейки топливные": ["рейка топливная","паливна рейка","топливная рейка","рампа топливная","паливна рампа","магістраль паливна","топливная рампа"],
            "Соединители топливных шлангов": ["соединитель топливного шланга","з’єднувач паливного шланга","соединитель шланга","штуцер паливної магiстралi","муфта","муфта швидкодіюча"],
            "Топливные трубки": ["топливная трубка","паливна трубка","топливн трубка","трубка","трубка подачи","трубка обратки","трубопровод","топливопровод","трубка паливна","трубка топливная к форсунке","трубка топливная (паук)","трубопровод высокого давления","трубопровод низкого давления"],
            "Шланги обратки": ["шланг обратки","шланг зворотки","обратный шланг","шланг паливний","шланг паливний гумовий","шланг топливный","шланг топливный (обратка)","шланг, утечка топлива"],
            "Регуляторы давления топлива": ["регулятор давления топлива","регулятор тиску палива","регулятор давления","клапан тиску","клапан ограничения давления"],
            "Редукционные клапаны": ["редукционный клапан","редукційний клапан","редукц клапан","клапан паливної магістралі"],
            "Тросы акселератора": ["трос акселератора","трос акселератору","трос газа"]
        }
    }
),
    
// =================================================================
// ====================== 11. Автолампи ============================
// =================================================================
"Автолампи": createCategoryModule(
    "Автолампи",
    {
        /* Параметр "Назначение" (ID: 27126) */
        "27126": {
            "Освещение панели управления": ["панель", "управление"],
            "Передние противотуманные фонари": ["противотуман", "туман", "fog"],
            "Дневные ходовые огни": ["дхо", "дневные", "daytime"],
            "Стоп-сигналы": ["стоп", "brake"],
            "Освещение номерного знака": ["номер", "license"],
            "Ближний/дальний свет": ["ближний", "дальний", "headlight"],
            "Габариные огни": ["габарит", "position"],
            "Внутреннее освещение": ["внутреннее", "interior"],
            "Боковые указатели поворота": ["боковой поворот", "side turn"],
            "Задние указатели поворота": ["задний поворот", "rear turn"],
            "Задние противотуманные фонари": ["задний туман", "rear fog"],
            "Передние указатели поворота": ["передний поворот", "front turn"],
            "Подсветка багажника": ["багажник", "trunk"],
            "Фонари заднего хода": ["задний ход", "reverse"]
        },
        /* Параметр "Вид" (ID: 27125) */
        "27125": {
            "Галогеновые": ["галоген", "halogen"],
            "Светодиоды": ["светодиод", "led"],
            "Ксеноновые": ["ксенон", "xenon"],
            "Биксеноновые": ["биксенон", "bi-xenon"],
            "Лампы накаливания": ["розжарювання", "накаливания", "incandescent"]
        },
        /* Параметр "Количество предметов" (ID: 92802) */
        "92802": {"1": ["л"]}
    }
),

// ======================================================================
// ====================== 12. Втулки стабілізатора =====================
// ======================================================================
"Втулки стабілізатора": createCategoryModule(
    "Втулки стабілізатора",
    {
        /* Параметр "Ось" (ID: 122846) */
        "122846": {
            "Передняя": ["передняя", "передні", "front"],
            "Задняя": ["задняя", "задні", "rear"]
        },
        /* Параметр "Сторона установки" (ID: 122881) */
        "122881": {
            "Слева": ["слева", "ліворуч", "left"],
            "Справа": ["справа", "праворуч", "right"]
        }
    },
    {
        stopWords: ["болт", "гайка", "кронштейн", "хомут", "кріплення"]
    }
),

}; // Конец объекта categoryModules

// ====================== ЭКСПОРТ МОДУЛЕЙ ======================
/* Отмечаем, что модули готовы */

if (typeof module !== 'undefined' && module.exports) {
    module.exports = categoryModules; // Для Node.js
} else {
    window.categoryModules = categoryModules; // Для браузера
}
