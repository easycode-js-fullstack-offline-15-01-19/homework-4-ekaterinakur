// -------------------------- Home work 4 --------------------------
// -------------------------- Курочка Екатерина --------------------------

//  1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3). Если нет ни одного аргумента, вернуть ноль: multiply() // 0

/**
 * @autor Ekaterina Kurochka
 * @description Для поизведения любого кол-ва чисел
 * @param {*} 
 * @returns {number} Произведение чисел       
 */
function multiply() {
    let mult = 1;
  
    for (let i = 0; i < arguments.length; i++) mult *= arguments[i];
    if (arguments.length == 0) return 0;
  
    return mult;
  };
  
  multiply(1, 5, 3);
  
  
  //  2. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.
  
  /**
   * @autor Ekaterina Kurochka
   * @description Для создания строки-перевертыша из исходной строки
   * @param {str} Любая строка
   * @returns {string} Строку-перевертыш      
   */
  function reverseString(str) {
    let str2 = '';
  
    for (let i = str.length - 1; i >= 0; i--) {
      str2 += str[i];
    }
  
    return str2;
  };
  
  reverseString('hghgj');
  
  
  //  3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа: getCodeStringFromText(‘hello’) // “104 101 108 108 111” 
  
  /**
   * @autor Ekaterina Kurochka
   * @description Для создания строки из разделенных пробелом юникодов символов исходной строки
   * @param {str} Любая строка
   * @returns {string} Строку из юникод-значений исходной (через пробел)     
   */
  function getCodeStringFromText(str) {
    let str2 = '';
  
    for (let i = str.length - 1; i >= 0; i--) {
      str2 += ' ' + str.charCodeAt(i);
    }
  
    return str2.trim();
  };
  
  getCodeStringFromText('hhnnkk');
  
  
  //  4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.
  
  /**
   * @autor Ekaterina Kurochka
   * @description Для сравнения принятого числа с рандомным
   * @param {myNum} Число от 1 до 10
   * @returns {string} Сообщение о победе (если числа совпали) / проиграше (числа не совпали)
   */
  function guessNum(myNum) {
    if (myNum <= 0 || myNum > 10) return console.log('Введите число от 0 до 10');
    
    let num = Math.ceil(Math.random() * 10);
  
    return num === myNum ? console.log('Вы выиграли') : console.log('Вы не угадали. Ваше число ' + myNum + ', а выпало число ' + num);
  };
  
  guessNum(5);
  
  
  //  5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]
  
   /**
   * @autor Ekaterina Kurochka
   * @description Для создания массива последовательных чисел с 1, длина которого равна принятому числу n
   * @param {n} Любое число
   * @returns {object} Массив последовательных чисел длиной n
   */
  function getArray(n) {
    let arr = [];
      
    for (let i = 1; i <= n; i++) {
      arr.push(i);
    }
    
    return arr;
  };
  
  getArray(4);
  
  
  //  6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
  
  /**
   * @autor Ekaterina Kurochka
   * @description Для создания массива с дублированными элементами входного
   * @param {arr} Массив
   * @returns {object} Массив с дублированными элементами входного массива
   */
  function doubleArray(arr) {
    return arr.concat(arr);
  };
  
  doubleArray([1, 15, 34]);
  
  
  //  7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений: 
  
  /**
   * @autor Ekaterina Kurochka
   * @description Для создания массива, который содержит произвольное число массивов с удаленными первыми элементами
   * @param {*} 
   * @returns {object} Массив с входящими массивами без певых эл-тов
   */
  function getArray() {
    let arr = [];
  
    for (let i = 0; i < arguments.length; i++) {
      arr[i] = arguments[i];
      arr[i].shift();
    }
  
    return arr;
  };
  
  getArray([1, 15, 20], ['k', 5, 8], [5, 'pop']);
  
  
  //  8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.
  
  let users = [
    {name: 'Denis', age: '29', gender:'male'},
    {name: 'Kate', age: '25', gender: 'female'},
    {name: 'Ivan', age: '20', gender: 'male'} 
  ];
  
    /**
   * @autor Ekaterina Kurochka
   * @description Для создания массива с пользователями, которые соответсвуют указанным параметрам
   * @param {arr} Массив с объектами (пользователями)
   * @param {key} Поле отдельного объекта, которое проверяется
   * @param {item} Значение поля отдельного объекта, которое проверяется
   * @returns {object} Массив с пользователями, соответствующими параметрам
   */
  function funcGetUsers(arr, key, value) {
    let newArr = [];
  
    if (arguments.callee.length !== arguments.length) return 'Переданы не все аргументы!';
  
    for (let i = 0; i < arr.length; i++) {
      if (key in arr[i] && arr[i][key] === value) {
        newArr.push(arr[i]);
      };
    };
    return newArr;
  };
  
  funcGetUsers(users, 'gender', 'male');
  
  
  //  9. Функции высшего порядка. Задача 1.
  
  let arr1 = ['my', 'name', 'is', 'Trinity'];
  let arr2 = [10, 20, 30];
  let arr3 = [{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}];
  let arr4 = ['abc', '123'];
  
  /**
   * @autor Ekaterina Kurochka
   * @description Для создания строки с сообщением с результатами обработки данных коллбеком
   * @param {arr} Массив
   * @param {callback} Коллбек для обработки массива
   * @returns {string} Строку-сообщение с результатами обработки
   */
  function newValue(arr, callback) {
    return 'New value: ' + callback(arr);
  };
  
  /**
   * @autor Ekaterina Kurochka
   * @description callback - Для обработки каждого элемента массива (разные задачи обработки, много текста)
   * @param {arr} Массив (зависит от задачи обработки)
   * @returns {object} Результат обработки
   */

  function callback1(arr) {
    return arr.map(item => item.replace(item[0], item[0].toUpperCase())).join('');
  };  
  
  function callback2(arr) {
    return arr.map(item => item * 10).join(', ');
  };
  
  function callback3(arr) {
    return arr.map(item => item.name + ' is ' + item.age).join(', ');
  };
  
  function callback4(arr) {
    return arr.map(item => item.split('').reverse().join('')).join(', ');
  };
  
  newValue(arr1, callback1);
  newValue(arr2, callback2);
  newValue(arr3, callback3);
  newValue(arr4, callback4);