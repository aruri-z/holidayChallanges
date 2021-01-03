// NO. 2 > Satuan Berat

/*
Satuan berat adalah ukuran yang dipakai untuk mengukur berat, jenus satuan berat tsb adalah sbb :

keterangan :
1 ton = 10 kw = 1000 kg
1 kw = 100 kg
1 kg = 1000 g
1 kg = 10 ons    
1 ons  = 1 hg / 100 g

Buatlah sebuah function bernama 'convertWeight' (NAMA FUNCTION HARUS SAMA) yang akan menerima 2 parameter. Parameter tsb adalah :
soal pertambahan satuan berat berupa string, contoh : '1 ton +10 ons+2 kwintal'
tujuan akhir konversi yang diinginkan, contoh : 'kg'

DILARANG hardcode ! misalnya : 
di-hardcode satu per satu konversinya, ton ke kwintal dikali 10, ton ke kg dikali 1000, ton ke gr dikali 10000, dll. pikirkan cara agar bisa dinamis tanpa di hardcode. 
*/

function convertWeight(summation, unitWeight) {
  //your code here
  const satuanBerat = [`ton`, 'kwintal', '-', 'kg', 'ons', 'dag', 'g', 'dg', 'cg', 'mg'];
  let indexUW = satuanBerat.indexOf(unitWeight);
  let sumUnit = '';
  let sumNum = 0;
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let number = '1234567890';
  let indexSum = -1;
  let resultSum = 0;

  for (let i = 0; i < summation.length; i++) {
    for (let num of number) {
      if (summation[i] === num) sumNum += summation[i];
    }
    for (let abjad of alphabet) {
      if (summation[i] === abjad) sumUnit += summation[i];
    }
    
    if (summation[i] === '+' || i === summation.length - 1) {

      indexSum = satuanBerat.indexOf(sumUnit);

      resultSum += sumNum * (10 ** (indexUW - indexSum));
      sumNum = 0;
      sumUnit = '';
    }
  }
  // console.log(sumUnit, sumNum, indexSum, indexUW, resultSum);
  return `${resultSum} ${unitWeight}`;
}

console.log(convertWeight('1 ton + 10 ons + 2 kwintal', 'kg')) //1201 kg

console.log(convertWeight('1 ton +10 ons+2 kwintal', 'g')) //1201000 g

console.log(convertWeight('2 ton +500 kwintal+3 kg+350 ons', 'kg'))  //52038 kg

// console.log(convertWeight('0.5 kg + 3 g + 3 ons', 'g')) 