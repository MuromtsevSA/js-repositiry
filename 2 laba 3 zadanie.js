var number = []

for (i = 2; i <= 9; i++){
    number[i] = []
    for (j = 0; j <= 10; j++){
        number[i][j] = i**j
    }
}
console.log(number)
console.log('5' + '^' + '6' + "=" + number[5][6])

