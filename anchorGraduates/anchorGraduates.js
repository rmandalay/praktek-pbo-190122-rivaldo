/*
INPUT "name" with any string
INPUT "nilai" with any number
INPUT "absen" with any number

READ "nama", "nilai", "absen"
 IF nilai >70 AND absen <5
 DISPLAY nama: "siswa" nilai; "nilai" Lulus
 else
 DISPLAY nama: "siswa" nilai; "nilai" Tidak Lulus
 ENDIF
END
*/

let studentName;
let score;
let absentDay;

studentName= "Rivaldo";
score = 90;
absentDay = 8;

if ( score>70 && absentDay<5){
    console.log(studentName + "", "lulus" )
}
else {
    console.log("tidak lulus")
}