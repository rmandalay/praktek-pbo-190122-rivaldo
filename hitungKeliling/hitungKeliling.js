/*
INPUT "jari-jari" with any number
INPUT "pi" with 3.14
COMPUTE "keliling lingkaran" equals to 2 times jari pi times "jari-jari"
DISPLAY "keliling lingkaran"
END
*/

let jariJariLingkaran;
jariJariLingkaran = 10;
const PI = 3.14;

function hitungkeliling () {
    let kelilingLingkaran = 2 * PI * jariJariLingkaran;
    console.log (kelilingLingkaran);
}

hitungkeliling()