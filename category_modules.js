// ==================================================
// МОДУЛИ КАТЕГОРИЙ ДЛЯ СКРИПТА AUTOPART
// Формат: 
//   Каждая категория между // ====== комментариями
//   Все функции и параметры внутри категории
// ==================================================

const categoryModules = {

// ==================================================
// КАТЕГОРИЯ: Комплектуючі стартерів та генераторів
// ==================================================
"Комплектуючі стартерів та генераторів": {
    parameters: {
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
    },
    
    determineValues: function(title) {
        if (!window.isScriptRunning) return null;
        const result = {};
        for (const [paramId, mappings] of Object.entries(this.parameters)) {
            for (const [value, keywords] of Object.entries(mappings)) {
                for (const keyword of keywords) {
                    if (title.includes(keyword)) {
                        console.log(`🔍 Обнаружено: "${value}" для параметра ${paramId} в "${title}" (ключ: "${keyword}")`);
                        result[paramId] = value;
                        break;
                    }
                }
                if (result[paramId]) break;
            }
        }
        return Object.keys(result).length > 0 ? result : null;
    },
    
    process: function() {
        console.log("🔧 Обработка категории 'Комплектуючі стартерів та генераторів'");
        const productName = document.querySelector("input[name='name']").value.toLowerCase();
        const params = this.determineValues(productName);
        if (!params) {
            console.log("⚠ Параметры для добавления не найдены в названии.");
            window.goToNextProduct();
            return;
        }

        const paramIds = Object.keys(params);
        let index = 0;

        function addNext() {
            if (index >= paramIds.length) {
                window.goToNextProduct();
                return;
            }
            const paramId = paramIds[index];
            if (!window.checkIfParameterExists(paramId, params[paramId])) {
                window.addParameter(paramId, params[paramId], () => {
                    index++;
                    addNext();
                });
            } else {
                index++;
                addNext();
            }
        }
        addNext();
    }
},

// ==================================================
// КАТЕГОРИЯ: Сайлентблоки подвески
// ==================================================
"Сайлентблоки подвески": {
    parameters: {
        "122846": {
            "Передняя": ["передняя", "передні", "front"],
            "Задняя": ["задняя", "задні", "rear"]
        },
        "122881": {
            "Слева": ["слева", "ліворуч", "left"],
            "Справа": ["справа", "праворуч", "right"]
        },
        "173460": {
            "Рессоры": ["рессоры", "рессора"],
            "Рычаги": ["рычаги", "рычаг"],
            "Тяги": ["тяги", "тяга"],
            "Амортизаторы": ["амортизаторы", "амортизатор"],
            "Стабилизаторы": ["стабилизаторы", "стабилизатор"],
            "Рулевые рейки": ["рулевые рейки", "рулевая рейка"],
            "Балки": ["балки", "балка"]
        },
        "173478": {
            "Полиуретан": ["полиуретан", "поліуретан"]
        }
    },
    
    determineValues: function(title) {
        if (!window.isScriptRunning) return null;
        const result = {};
        for (const [paramId, mappings] of Object.entries(this.parameters)) {
            for (const [value, keywords] of Object.entries(mappings)) {
                for (const keyword of keywords) {
                    if (title.includes(keyword)) {
                        console.log(`🔍 Обнаружено: "${value}" для параметра ${paramId} в "${title}" (ключ: "${keyword}")`);
                        result[paramId] = value;
                        break;
                    }
                }
                if (result[paramId]) break;
            }
        }
        return Object.keys(result).length > 0 ? result : null;
    },
    
    process: function() {
        console.log("🔧 Обработка категории 'Сайлентблоки подвески'");
        const productName = document.querySelector("input[name='name']").value.toLowerCase();
        const params = this.determineValues(productName);
        if (!params) {
            console.log("⚠ Параметры для добавления не найдены в названии.");
            window.goToNextProduct();
            return;
        }

        const paramIds = Object.keys(params);
        let index = 0;

        function addNext() {
            if (index >= paramIds.length) {
                window.goToNextProduct();
                return;
            }
            const paramId = paramIds[index];
            if (!window.checkIfParameterExists(paramId, params[paramId])) {
                window.addParameter(paramId, params[paramId], () => {
                    index++;
                    addNext();
                });
            } else {
                index++;
                addNext();
            }
        }
        addNext();
    }
},

// ==================================================
// КАТЕГОРИЯ: Тормозные шланги и трубки
// ==================================================
"Тормозные шланги и трубки": {
    parameters: {
        "122846": {
            "Передняя": ["передняя", "передні", "front", "перед"],
            "Задняя": ["задняя", "задні", "rear", "зад"]
        },
        "122881": {
            "Слева": ["слева", "ліворуч", "left", "лев", "лів"],
            "Справа": ["справа", "праворуч", "right", "прав"]
        },
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
    
    skipSideIfNotFound: true,
    
    determineValues: function(title) {
        if (!window.isScriptRunning) return null;
        const result = {};
        for (const [paramId, mappings] of Object.entries(this.parameters)) {
            for (const [value, keywords] of Object.entries(mappings)) {
                for (const keyword of keywords) {
                    if (title.includes(keyword)) {
                        console.log(`🔍 Обнаружено: "${value}" для параметра ${paramId} в "${title}" (ключ: "${keyword}")`);
                        result[paramId] = value;
                        break;
                    }
                }
                if (result[paramId]) break;
            }
        }
        
        if (!result["122881"] && !this.skipSideIfNotFound) {
            result["122881"] = ["Слева", "Справа"];
            console.log(`ℹ "Сторона установки" не найдена, добавляем обе стороны: "Слева" и "Справа".`);
        }
        
        return Object.keys(result).length > 0 ? result : null;
    },
    
    process: function() {
        console.log("🔧 Обработка категории 'Тормозные шланги и трубки'");
        const productName = document.querySelector("input[name='name']").value.toLowerCase();
        const params = this.determineValues(productName);
        if (!params) {
            console.log("⚠ Параметры для добавления не найдены в названии.");
            window.goToNextProduct();
            return;
        }

        const paramIds = Object.keys(params);
        let index = 0;

        function addNext() {
            if (index >= paramIds.length) {
                window.goToNextProduct();
                return;
            }
            const paramId = paramIds[index];
            const value = params[paramId];
            
            if (Array.isArray(value)) {
                let valueIndex = 0;
                function addValue() {
                    if (valueIndex >= value.length) {
                        index++;
                        addNext();
                        return;
                    }
                    if (!window.checkIfParameterExists(paramId, value[valueIndex])) {
                        window.addParameter(paramId, value[valueIndex], () => {
                            valueIndex++;
                            addValue();
                        });
                    } else {
                        valueIndex++;
                        addValue();
                    }
                }
                addValue();
            } else {
                if (!window.checkIfParameterExists(paramId, value)) {
                    window.addParameter(paramId, value, () => {
                        index++;
                        addNext();
                    });
                } else {
                    index++;
                    addNext();
                }
            }
        }
        addNext();
    }
}

};

// ============================================================================
// Категория: Датчики автомобильные
// ============================================================================
const carSensorsModule = {
    parameters: {
        "251173": { // "Вид" — тип датчика
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
    },
    determineValues: function(title) {
        if (!isScriptRunning) return null;
        const result = {};
        for (const [paramId, mappings] of Object.entries(this.parameters)) {
            for (const [value, keywords] of Object.entries(mappings)) {
                for (const keyword of keywords) {
                    if (title.includes(keyword)) {
                        console.log(`🔍 Обнаружено: "${value}" для параметра ${paramId} в "${title}" (ключ: "${keyword}")`);
                        result[paramId] = value;
                        break;
                    }
                }
                if (result[paramId]) break;
            }
        }
        return Object.keys(result).length > 0 ? result : null;
    },
    process: function() {
        console.log("🔧 Обработка категории 'Датчики автомобильные'");
        const productName = document.querySelector("input[name='name']").value.toLowerCase();
        const params = this.determineValues(productName);
        if (!params) {
            console.log("⚠ Параметры для добавления не найдены в названии.");
            goToNextProduct();
            return;
        }
        const paramIds = Object.keys(params);
        let index = 0;
        function addNext() {
            if (index >= paramIds.length) {
                goToNextProduct();
                return;
            }
            const paramId = paramIds[index];
            if (!checkIfParameterExists(paramId, params[paramId])) {
                addParameter(paramId, params[paramId], () => {
                    index++;
                    addNext();
                });
            } else {
                index++;
                addNext();
            }
        }
        addNext();
    }
};

// ============================================================================
// Категория: Тросы сцепления и КПП, приводы КПП, кулисы
// ============================================================================
const clutchAndGearCablesModule = {
    parameters: {
        "251482": { // "Тип" — вид троса или механизма КПП
            "Тросы сцепления": ["трос сцепления", "трос зчеплення", "тросик сцепления", "трос сцепл"],
            "Тросы переключения передач": ["трос переключения передач", "трос перемикання передач", "трос КПП", "трос коробки передач", "трос важеля КПП"],
            "Тяги переключения передач": ["тяга переключения передач", "тяга перемикання передач", "тяга КПП"],
            "Кулисы в сборе": ["кулиса в сборе", "куліса в зборі", "кулиса КПП", "куліса коробки передач"]
        }
    },
    determineValues: function(title) {
        if (!isScriptRunning) return null;
        const result = {};
        for (const [paramId, mappings] of Object.entries(this.parameters)) {
            for (const [value, keywords] of Object.entries(mappings)) {
                for (const keyword of keywords) {
                    if (title.includes(keyword)) {
                        console.log(`🔍 Обнаружено: "${value}" для параметра ${paramId} в "${title}" (ключ: "${keyword}")`);
                        result[paramId] = value;
                        break;
                    }
                }
                if (result[paramId]) break;
            }
        }
        return Object.keys(result).length > 0 ? result : null;
    },
    process: function() {
        console.log("🔧 Обработка категории 'Тросы сцепления и КПП, приводы КПП, кулисы'");
        const productName = document.querySelector("input[name='name']").value.toLowerCase();
        const params = this.determineValues(productName);
        if (!params) {
            console.log("⚠ Параметры для добавления не найдены в названии.");
            goToNextProduct();
            return;
        }
        const paramIds = Object.keys(params);
        let index = 0;
        function addNext() {
            if (index >= paramIds.length) {
                goToNextProduct();
                return;
            }
            const paramId = paramIds[index];
            if (!checkIfParameterExists(paramId, params[paramId])) {
                addParameter(paramId, params[paramId], () => {
                    index++;
                    addNext();
                });
            } else {
                index++;
                addNext();
            }
        }
        addNext();
    }
};

// ============================================================================
// Категория: Зеркала автомобильные
// ============================================================================
const carMirrorsModule = {
    parameters: {
        "198908": { // "Тип" — всегда "Боковые"
            "Боковые": [] // Ключевые слова не нужны, так как добавляем всегда
        },
        "122881": { // "Сторона установки" — зависит от названия
            "Слева": ["слева", "ліворуч", "left", "лев", "лів", "ливов"],
            "Справа": ["справа", "праворуч", "right", "пра"]
        }
    },
    stopWords: ["накладка", "адаптер YouTube", "тримач", "кільце", "перемикач"],
    determineValues: function(title) {
        if (!isScriptRunning) return null;
        const result = {};
        const lowerTitle = title.toLowerCase();
        const hasStopWord = this.stopWords.some(stopWord => {
            const lowerStopWord = stopWord.toLowerCase();
            const words = lowerTitle.split(/\s+/);
            return words.includes(lowerStopWord);
        });
        if (!hasStopWord) {
            result["198908"] = "Боковые";
            console.log(`🔍 Установлено: "Боковые" для параметра 198908 в "${title}".`);
        } else {
            console.log(`⚠ Найдено стоп-слово в "${title}", параметр "Тип" (198908) пропущен.`);
        }
        const sideMappings = this.parameters["122881"];
        for (const [value, keywords] of Object.entries(sideMappings)) {
            for (const keyword of keywords) {
                if (lowerTitle.includes(keyword)) {
                    console.log(`🔍 Обнаружено: "${value}" для параметра 122881 в "${title}" (ключ: "${keyword}")`);
                    result["122881"] = value;
                    break;
                }
            }
            if (result["122881"]) break;
        }
        return Object.keys(result).length > 0 ? result : null;
    },
    process: function() {
        console.log("🔧 Обработка категории 'Зеркала автомобильные'");
        const productName = document.querySelector("input[name='name']").value.toLowerCase();
        const params = this.determineValues(productName);
        if (!params) {
            console.log("⚠ Параметры для добавления не найдены в названии.");
            goToNextProduct();
            return;
        }
        const orderedParamIds = [];
        if (params["198908"]) orderedParamIds.push("198908");
        if (params["122881"]) orderedParamIds.push("122881");
        let index = 0;
        function addNext() {
            if (index >= orderedParamIds.length) {
                goToNextProduct();
                return;
            }
            const paramId = orderedParamIds[index];
            if (!checkIfParameterExists(paramId, params[paramId])) {
                addParameter(paramId, params[paramId], () => {
                    index++;
                    addNext();
                });
            } else {
                index++;
                addNext();
            }
        }
        addNext();
    }
};

// ============================================================================
// Категория: Компрессоры кондиционера автомобильные
// ============================================================================
const acCompressorsModule = {
    parameters: {
        "173742": { // "Тип"
            "Компрессоры в сборе": ["компрессор в сборе", "компресор у зборі", "компрессор", "компресор"],
            "Клапаны компрессора": ["клапан компрессора", "клапан компресора", "клапан", "клапани"]
        }
    },
    determineValues: function(title) {
        if (!isScriptRunning) return null;
        const result = {};
        const lowerTitle = title.toLowerCase();
        const typeMappings = this.parameters["173742"];
        for (const [value, keywords] of Object.entries(typeMappings)) {
            for (const keyword of keywords) {
                if (lowerTitle.includes(keyword)) {
                    console.log(`🔍 Обнаружено: "${value}" для параметра 173742 в "${title}" (ключ: "${keyword}")`);
                    result["173742"] = value;
                    break;
                }
            }
            if (result["173742"]) break;
        }
        return Object.keys(result).length > 0 ? result : null;
    },
    process: function() {
        console.log("🔧 Обработка категории 'Компрессоры кондиционера автомобильные'");
        const productName = document.querySelector("input[name='name']").value.toLowerCase();
        const params = this.determineValues(productName);
        if (!params) {
            console.log("⚠ Параметры для добавления не найдены в названии.");
            goToNextProduct();
            return;
        }
        const orderedParamIds = [];
        if (params["173742"]) orderedParamIds.push("173742");
        let index = 0;
        function addNext() {
            if (index >= orderedParamIds.length) {
                goToNextProduct();
                return;
            }
            const paramId = orderedParamIds[index];
            if (!checkIfParameterExists(paramId, params[paramId])) {
                addParameter(paramId, params[paramId], () => {
                    index++;
                    addNext();
                });
            } else {
                index++;
                addNext();
            }
        }
        addNext();
    }
};

// ============================================================================
// Категория: Муфты компрессора кондиционера
// ============================================================================
const acCompressorClutchesModule = {
    parameters: {
        "173742": { // "Тип"
            "Диски сцепления муфты компрессора": ["диск сцепления муфты", "диск зчеплення муфти", "диск муфти"],
            "Муфты компрессора": ["муфта компрессора", "муфта компресора", "муфта", "электромагнитное"],
            "Подшипники муфты компрессора": ["подшипник муфты", "підшипник муфти", "подшипник"]
        }
    },
    determineValues: function(title) {
        if (!isScriptRunning) return null;
        const result = {};
        const lowerTitle = title.toLowerCase();
        const typeMappings = this.parameters["173742"];
        for (const [value, keywords] of Object.entries(typeMappings)) {
            for (const keyword of keywords) {
                if (lowerTitle.includes(keyword)) {
                    console.log(`🔍 Обнаружено: "${value}" для параметра 173742 в "${title}" (ключ: "${keyword}")`);
                    result["173742"] = value;
                    break;
                }
            }
            if (result["173742"]) break;
        }
        return Object.keys(result).length > 0 ? result : null;
    },
    process: function() {
        console.log("🔧 Обработка категории 'Муфты компрессора кондиционера'");
        const productName = document.querySelector("input[name='name']").value.toLowerCase();
        const params = this.determineValues(productName);
        if (!params) {
            console.log("⚠ Параметры для добавления не найдены в названии.");
            goToNextProduct();
            return;
        }
        const orderedParamIds = [];
        if (params["173742"]) orderedParamIds.push("173742");
        let index = 0;
        function addNext() {
            if (index >= orderedParamIds.length) {
                goToNextProduct();
                return;
            }
            const paramId = orderedParamIds[index];
            if (!checkIfParameterExists(paramId, params[paramId])) {
                addParameter(paramId, params[paramId], () => {
                    index++;
                    addNext();
                });
            } else {
                index++;
                addNext();
            }
        }
        addNext();
    }
};

// ============================================================================
// Категория: Рейки топливные, топливопроводы и их части
// ============================================================================
const fuelRailsAndLinesModule = {
    parameters: {
        "173742": {
            "Обратные клапаны": ["обратный клапан", "зворотний клапан", "обратн клапан", "клапан топливный обратный", "клапан паливний зворотний"],
            "Рейки топливные": ["рейка топливная", "паливна рейка", "топливная рейка", "рампа топливная", "паливна рампа", "магістраль паливна", "топливная рампа"],
            "Соединители топливных шлангов": ["соединитель топливного шланга", "з’єднувач паливного шланга", "соединитель шланга", "штуцер паливної магiстралi", "муфта", "муфта швидкодіюча"],
            "Топливные трубки": ["топливная трубка", "паливна трубка", "топливн трубка", "трубка", "трубка подачи", "трубка обратки", "трубопровод", "топливопровод", "трубка паливна", "трубка топливная к форсунке", "трубка топливная (паук)", "трубопровод высокого давления", "трубопровод низкого давления"],
            "Шланги обратки": ["шланг обратки", "шланг зворотки", "обратный шланг", "шланг паливний", "шланг паливний гумовий", "шланг топливный", "шланг топливный (обратка)", "шланг, утечка топлива"],
            "Регуляторы давления топлива": ["регулятор давления топлива", "регулятор тиску палива", "регулятор давления", "клапан тиску", "клапан ограничения давления"],
            "Редукционные клапаны": ["редукционный клапан", "редукційний клапан", "редукц клапан", "клапан паливної магістралі"],
            "Тросы акселератора": ["трос акселератора", "трос акселератору", "трос газа"]
        }
    },
    determineValues: function(title) {
        if (!isScriptRunning) return null;
        const result = {};
        const lowerTitle = title.toLowerCase();
        const typeMappings = this.parameters["173742"];
        for (const [value, keywords] of Object.entries(typeMappings)) {
            for (const keyword of keywords) {
                if (lowerTitle.includes(keyword)) {
                    console.log(`🔍 Обнаружено: "${value}" для параметра 173742 в "${title}" (ключ: "${keyword}")`);
                    result["173742"] = value;
                    break;
                }
            }
            if (result["173742"]) break;
        }
        return Object.keys(result).length > 0 ? result : null;
    },
    process: function() {
        console.log("🔧 Обработка категории 'Рейки топливные, топливопроводы и их части'");
        const productName = document.querySelector("input[name='name']").value.toLowerCase();
        const params = this.determineValues(productName);
        if (!params) {
            console.log("⚠ Параметры для добавления не найдены в названии.");
            goToNextProduct();
            return;
        }
        const orderedParamIds = [];
        if (params["173742"]) orderedParamIds.push("173742");
        let index = 0;
        function addNext() {
            if (index >= orderedParamIds.length) {
                goToNextProduct();
                return;
            }
            const paramId = orderedParamIds[index];
            if (!checkIfParameterExists(paramId, params[paramId])) {
                addParameter(paramId, params[paramId], () => {
                    index++;
                    addNext();
                });
            } else {
                index++;
                addNext();
            }
        }
        addNext();
    }
};

// ============================================================================
// Категория: Топливные форсунки
// ============================================================================
const fuelInjectorsModule = {
    parameters: {
        "173742": { // "Тип"
            "Втулки": ["втулка", "втулки"],
            "Крепежные элементы": ["крепежный элемент", "кріпильний елемент", "крепеж", "кріплення"],
            "Распылители форсунок": ["распылитель форсунки", "розпилювач форсунки", "распылитель", "розпилювач"],
            "Ремкомплекты": ["ремкомплект", "ремкомплекти", "ремонтный комплект"],
            "Уплотнительные кольца": ["уплотнительное кольцо", "ущільнювальне кільце", "уплотнитель", "ущільнювач"],
            "Форсунки": ["форсунка", "форсунки"]
        }
    },
    determineValues: function(title) {
        if (!isScriptRunning) return null;
        const result = {};
        const lowerTitle = title.toLowerCase();
        const typeMappings = this.parameters["173742"];
        for (const [value, keywords] of Object.entries(typeMappings)) {
            for (const keyword of keywords) {
                if (lowerTitle.includes(keyword)) {
                    console.log(`🔍 Обнаружено: "${value}" для параметра 173742 в "${title}" (ключ: "${keyword}")`);
                    result["173742"] = value;
                    break;
                }
            }
            if (result["173742"]) break;
        }
        return Object.keys(result).length > 0 ? result : null;
    },
    process: function() {
        console.log("🔧 Обработка категории 'Топливные форсунки'");
        const productName = document.querySelector("input[name='name']").value.toLowerCase();
        const params = this.determineValues(productName);
        if (!params) {
            console.log("⚠ Параметры для добавления не найдены в названии.");
            goToNextProduct();
            return;
        }
        const orderedParamIds = [];
        if (params["173742"]) orderedParamIds.push("173742");
        let index = 0;
        function addNext() {
            if (index >= orderedParamIds.length) {
                goToNextProduct();
                return;
            }
            const paramId = orderedParamIds[index];
            if (!checkIfParameterExists(paramId, params[paramId])) {
                addParameter(paramId, params[paramId], () => {
                    index++;
                    addNext();
                });
            } else {
                index++;
                addNext();
            }
        }
        addNext();
    }
};

// ============================================================================
// Категория: Подшипники подвесные и подшипники трансмиссии
// ============================================================================
const suspensionAndTransmissionBearingsModule = {
    parameters: {
        "251485": { // "Тип"
            "Подшипники КПП": ["подшипник кпп", "подшипник первичного вала кпп", "подшипник коробки", "пiдшипник кпп"],
            "Подшипники подвесные": ["опора карданного вала", "подшипник подвісний", "підшипник підвісний", "центрирующая втулка, продольный вал", "подвеска, карданный вал", "подшипник промежуточный подшипник карданного вала", "подшипник подвесной", "подшипник шариковый", "підшипник кульковий", "подшипник игольчатый", "підшипник голчастий", "подшипник роликовый", "подшипник корпусный", "подшипник миниатюрный", "подшипник самоустанавливающийся", "подшипник радиальный", "крепление с подшипником", "узел подшипниковый фланцевый", "подшипник колеса, комплект", "опорный подшипник приводного вала"]
        }
    },
    determineValues: function(title) {
        if (!isScriptRunning) return null;
        const result = {};
        const lowerTitle = title.toLowerCase();
        const typeMappings = this.parameters["251485"];
        for (const [value, keywords] of Object.entries(typeMappings)) {
            for (const keyword of keywords) {
                if (lowerTitle.includes(keyword.toLowerCase())) {
                    console.log(`🔍 Обнаружено: "${value}" для параметра 251485 в "${title}" (ключ: "${keyword}")`);
                    result["251485"] = value;
                    break;
                }
            }
            if (result["251485"]) break;
        }
        return Object.keys(result).length > 0 ? result : null;
    },
    process: function() {
        console.log("🔧 Обработка категории 'Подшипники подвесные и подшипники трансмиссии'");
        const productName = document.querySelector("input[name='name']").value.toLowerCase();
        const params = this.determineValues(productName);
        if (!params) {
            console.log("⚠ Параметры для добавления не найдены в названии.");
            goToNextProduct();
            return;
        }
        const orderedParamIds = [];
        if (params["251485"]) orderedParamIds.push("251485");
        let index = 0;
        function addNext() {
            if (index >= orderedParamIds.length) {
                goToNextProduct();
                return;
            }
            const paramId = initiation[index];
            if (!checkIfParameterExists(paramId, params[paramId])) {
                addParameter(paramId, params[paramId], () => {
                    index++;
                    addNext();
                });
            } else {
                index++;
                addNext();
            }
        }
        addNext();
    }
};


// Экспорт модулей
if (typeof module !== 'undefined' && module.exports) {
    module.exports = categoryModules;
} else {
    window.categoryModules = categoryModules;
}
