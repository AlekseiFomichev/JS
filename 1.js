Math.round
let input = Number.parseInt(prompt('Введите температуру в градусах Цельсия'));
alert(`Цельсия: ${input}\nФаренгейт: ${Math.round((9 / 5) * input + 32)}`)
