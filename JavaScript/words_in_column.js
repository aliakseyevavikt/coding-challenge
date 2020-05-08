/*
Функция получает строку из нескольких слов. Выведите слова в столбик, выравнивание по правому краю.

Например, text = 'I will get everything I want'. Функция должна возвратить этот текст в виде строки, содержащей слова:
      I
    qjw
wknjjqk
   sjdk

 */

function wordsInColumn(text){
    text = text.split(' ');
    let res = '';
    let max = Math.max(...text.map(el => el.length));
    for (let i = 0; i < text.length; i++) {
        res += (' ').repeat(max - text[i].length) + text[i] + '\n'
    }
    return res.trimEnd();
}