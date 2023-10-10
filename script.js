arr = [1, 2, 3, 4, 5, 6];


function wyswietlIloczynOrazSume(arr) {

  let suma = 0;
  let iloczyn = 1;

  arr.forEach(function(element) {
    suma += element;
    iloczyn *= element;
  });  
    
  console.log('suma liczb w tabeli: ',suma);
  console.log('iloczyn liczb w tabeli: ',iloczyn);
  
};
wyswietlIloczynOrazSume(arr);

// function sumaTablicy(arr) {
//   arr.foreach()
// } 

// Napisz funkcję ze zmiennymi lokalnymi, która policzy sumę i iloczyn elementów tablicy [1, 2, 3, 4, 5, 6]. Funkcja przyjmuje jeden parametr - ww. tablicę z liczbami. Funkcja nie zwraca nic. Funkcja wyświetla wyniki w konsoli.

// Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it

// Podpowiedź przed wysłaniem zadania do sprawdzenia:
// - użyj pętli for lub forEach w zadaniu
