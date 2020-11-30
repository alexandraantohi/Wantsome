//1.Scrieti o functie care verifica daca input este sa nu de tip string.
function is_string(value) {
    if (typeof value === "string" ) return true;
      else return false;
  }
  console.log(is_string("w3resource"));
  console.log(is_string([1 , 2 , 4, 0]));
  
  //2.Scrieti o functie care verifica daca un string este gol sau nu.
  function is_Blank(value) {
    if (value.length === 0 ) return true;
      else return false;
  }
  console.log(is_Blank(""));
  console.log(is_Blank("abc"));
  
  //3.Scrieti o functie care accepta ca input un string si il transforma intr-un array de cuvinte.
  function string_to_array(value) { 
    return value.split(" ");
  }
  console.log(string_to_array("Robin Singh"));
  
  //4.Scrieti o functie care transforma un string in forma abreviata 
  
  function abbrev_name(value) {
      var split_names = value.split(" ");
      if (split_names.length > 1) {
          return (split_names[0] + " " + split_names[1].charAt(0) + ".");
      }
      return split_names[0];
  };
  console.log("ex 4");
  console.log(abbrev_name("Robin Singh"));
  
  //5. Scrieti o functie care face prima litera a unui string sa fie de tip capital(litera mare)
  function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  console.log(capitalize("js string exercises"));
  
  
  //6.scrieti o functie care elimina un numar specificat de caractere pornind de la inceputul string-ului.
  function truncate_string(string, length) {
    if (string.length > length) return string.substr(0, length);
  }
  console.log(truncate_string("Robin Singh",4));
  
  
  //7. Scrieti o functie care specifica daca caracterul de la o anumita pozitie specificata dintr-un string este litera mare sau nu.  
  function isUpperCaseAt(string,index) {
   if(string.charAt(index) === string.charAt(index).toUpperCase()) return true;
      else return false;
  }
  
  console.log(isUpperCaseAt("Js STRING EXERCISES", 3));
  
  
  //8.Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string
  function insert(string1,string2,index) {
   
    if(string1.length > index) { var result1 = string1.slice(0,index);
                                 var result2 = string1.slice(index);
                                 return result1.concat(string2) + " " + result2;
                               }
      else return string2.concat(" ", string1);
  }
  console.log(insert("We are doing some exercises", "JavaScript", 18));
  
  
  //9. Scrieti o functie care elimina prima aparitie a unui string dintr-un alt string.
  function remove_firt_occurence(string1, string2) {
      var stringPosition = string1.indexOf(string2);
      var firstPart = string1.slice(0,stringPosition);
      var secondPart = string1.slice(stringPosition + string2.length);
      return firstPart.concat(secondPart);
  }
  console.log(remove_firt_occurence("The quick brown fox jumps over the lazy dog", "the"));
  
  
  //10. Scrieti o functie care compara doua string-uri case-insensitive
  function compare_strings(string1, string2) {
    if (string1.toUpperCase() === string2.toUpperCase()) return true;
            else return false;
   
  }
  console.log(compare_strings("abcd", "AbcD"));
  
  
  //11.Scrieti o functie care face ca primul caracter a unui string sa fie de tip uncapital
  function uncapitalize(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }
  console.log(uncapitalize("Js string exercises"));