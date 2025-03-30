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

// Остальные категории добавляются аналогично...
};


 "Противотуманные фары": {
        parameters: {
            "122881": { // Сторона
                "Левые": ["левые", "лев"],
                "Правые": ["правые", "прав"]
            }
        },
        determineValues: function(title) {
            const result = {};
            const lowerTitle = title.toLowerCase();
            
            // Анализ названия
            for (const [paramId, mappings] of Object.entries(this.parameters)) {
                for (const [value, keywords] of Object.entries(mappings)) {
                    if (keywords.some(kw => lowerTitle.includes(kw))) {
                        result[paramId] = value;
                        break;
                    }
                }
            }
            
            return Object.keys(result).length ? result : null;
        },
        process: function() {
            console.log("🔧 Обработка 'Противотуманные фары'");
            const productName = document.querySelector("input[name='name']").value.toLowerCase();
            const params = this.determineValues(productName);
            
            if (!params) {
                console.log("⚠ Не найдены параметры в названии");
                window.goToNextProduct();
                return;
            }
            
            // Добавление параметров
            const paramIds = Object.keys(params);
            let index = 0;
            
            const addNext = () => {
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
            };
            addNext();
        }
    }
};


// Экспорт модулей
if (typeof module !== 'undefined' && module.exports) {
    module.exports = categoryModules;
} else {
    window.categoryModules = categoryModules;
}
