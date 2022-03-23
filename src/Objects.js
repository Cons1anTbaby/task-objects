/*
  В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
  Если этот человек является женщиной (свойство gender содержит значение 'female'), то из этого объекта
  необходимо удалить свойство age, если оно есть.
  Если этот человек является мужчиной (свойство gender содержит значение 'male'), следует убедиться,
  что в этом объекте есть свойство income. Если его нет, необходимо его добавить
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть в качестве результата работы функции.
*/
export function personUpdate(data) {
    if (data.gender == 'male') {
        if (!data.hasOwnProperty('income')) {
            data.income = 100000;
            return data;
        } else return data;
    } else delete data.age;
    return data;
}

/*
  В функцию objectFieldsList приходят три объекта с различными полями, список которых заранее неизвестен.
  Верните список названий этих полей в алфавитном порядке в виде массива строк.
*/
export function objectFieldsList(obj1, obj2, obj3) {
    let list = [obj1, obj2, obj3];
    let result = [];
    for (let i = 0; i < list.length; i++) {
        for (let prop in list[i]) {
            result.push(prop.toString());
        }
    }
    return result.sort();
}

/*
  Верните в результате работы функции массив с клонами объекта obj.
  При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
  Количество клонов - count.
*/
export function objectClone(obj, count) {
    let listObj = [];
    for (let i = 0; i < count; i++) {
        listObj.push(getObject(obj, i));
    }
    return listObj;
}

function getObject(obj, id) {
    let result = {};
    for (let prop in obj) {
        if (typeof obj[prop] == 'object') {
            result[prop] = getObject(obj[prop]);
        } else result[prop] = obj[prop];
    }
    result.id = id;
    return { ...result };
}
