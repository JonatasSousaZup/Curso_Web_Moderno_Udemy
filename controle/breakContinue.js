const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//usando o break, quando chegar no indice 5 ele simplesmente para a repetição
for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

//e o continue, quando chega no indice 5 ele para aquela repetição e continua
//outra repetição a partir do indice 6, ele simplesmente pula o indice 5
for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums) {
    for (b in nums) {
        if(a ==2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}