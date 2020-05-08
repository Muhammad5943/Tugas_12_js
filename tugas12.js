function namaBuah() {
    var buah = ["pisang","jeruk","apel","mangga"]
    console.log(buah);
    
    buah.shift()
    console.log(buah);

    buah.pop()
    
    return buah

}

console.log(namaBuah());