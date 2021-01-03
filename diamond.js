// NO. 3 > SHINE BRIGHT LIKE A DIAMOND
/*
Buatlah sebuah function bernama `diamond` yang menerima satu parameter berupa number.
function `diamond` akan membuat sebuah belah ketupat dengan simbol `$` dimana tinggi dari belah ketupat ditentukan berdasarkan parameter number yang diterima.

NOTE: Perhatikan pola untuk menentukan tinggi belah ketupat!!

Contoh untuk input 3:
```javascript
  $
 $ $
$   $
 $ $
  $
```

Contoh untuk input 4:
```javascript
   $   
  $ $
 $   $  
$     $
 $   $
  $ $  
   $   
```

Contoh untuk input 6:
```javascript

i/j
  0 1 2 3 4 5 6 7 8 9 0 1
0 - - - - - - $ - - - - -      j+i= num || j-i= num
1 - - - - - $ - $ - - - - 
2 - - - - $ - - - $ - - -
3 - - - $ - - - - - $ - -
4 - - $ - - - - - - - $ -
5 - $ - - - - - - - - - $
4 - - $ - - - - - - - $ -
3 - - - $ - - - - - $ - -
2 - - - - $ - - - $ - - -
1 - - - - - $ - $ - - - -
0 - - - - - - $ - - - - -
```

contoh untuk input 10:
```javascript
         $       
        $ $      
       $   $     
      $     $    
     $       $   
    $         $  
   $           $
  $             $
 $               $
$                 $
 $               $
  $             $
   $           $
    $         $  
     $       $   
      $     $    
       $   $     
        $ $      
         $        
```
*/


function diamond(num) {
  let height = num;
  let width = num * 2;
  let result = ''
  
  //segitiga atas
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      j + i === num || j - i === num ? result += '$' : result += ' ';
    }
    console.log(result);
    result = ''
  }

  //segitiga bawah
  for (let i = height - 2; i >= 0; i--) {
    for (let j = 0; j < width; j++) {
      j + i === num || j - i === num ? result += '$' : result += ' ';
    }
    console.log(result);
    result = ''
  }
}

diamond(10);
diamond(3);
diamond(4);
diamond(6);