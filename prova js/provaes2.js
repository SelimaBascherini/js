/* 2 - Oh, non puoi farci niente. 
Siamo tutti pazzi qui*/

//pseudocodice 
//scrivo una funzione stringaPazza e ci passo una stringa
////creo un array Search che mi prende "lui, lei, egli, ella"
//creo un ciclo for che mi analizzi la stringa da 0 a n-1
//creo una const word e gli dico che è uguale all'indice dell'array Search
//creo un if e con il metedoto includes guardo se contiene “Cthulhu”
//se lo contiene ritorno "è pazza"
//creo  un if e uso il metodo includes per capire se la stringa contiene la const word 
//se la stringa NON contiene una parola dell'array
//se la contiene ritorna "è pazza"
//creo un if e controllo tramite includes se contiene church o mare 
//se lo contiene return "non è pazza" 
//creo un if che mi guarda se la stringa finisce con ?!? tramite metodo charAt 
// se lo contiene ritorna "è pazza"
//creo un if che mi guarda se la stringa inizia e finisce con una parola che finisce con are ere o ire 
//se sì ritorna "è pazza"
//creo l'array e ci metto dentro la punteggiatura
//ciclo l'array 
//creo if e gli dico SE il carattere 0 della stringa === al carattere 0 dell'array 
//se corrisponde ritorna "è pazza" 
 


function stringaPazza (string){
    //controllo se ha church o mare
    if(string.includes("Church") || string.includes('mare')){
        return "non è pazza" 
    } // controllo punto 1 
    let search = ["Lei","Lui", "Egli", "Ella"]
    for(let i = 0; i < string.length; i ++){
        const word = search[i]
        if (!string.includes[word]){
            return "è pazza"
        } // controllo punto 3
        if(string.includes("Cthulhu")){
            return "è pazza"
        }
        
        
        //controllare se la stringa finisce con punteggiatura - punto 2
        if (string.charAt(string.length - 1) === "?" && string.charAt(string.length - 2) === "!" && string.charAt(string.length-3)){
            return "è pazza"
        //punto 4 controllo se la stringa finisce con are ere ire 
        }
        if (string.charAt(string.length - 1) === "a" && string.charAt(string.length - 2) === "r" && string.charAt(string.length - 3) === "a" ){
            return "è pazza"
        }
        if (string.charAt(string.length - 1) === "e" && string.charAt(string.length - 2) === "r" && string.charAt(string.length - 3) === "e" ){
            return "è pazza"
        }
        if (string.charAt(string.length - 1) === "i" && string.charAt(string.length - 2) === "r" && string.charAt(string.length - 3) === "e" ){
            return "è pazza"
        } //punto 5 controllo punteggiatura 
        let punteggiatura= [",", ".", "!", "?", ":", ";", "-", "~"]
        for (let i = 0; i < punteggiatura.length - 1; i++){
            if (punteggiatura[0] === string[0]){
                return "è pazza" 
            }
    
        }
    }
}


console.log(stringaPazza("~ Papa’, come sta Church? ~"))
