//Esto lo ise como prueba,,
let calculadora = {
    suma:(a,b)=> a+b ,
    resta:(a,b)=> a-b,
    multiplicasion:(a,b)=>{if (a==0||b==0) {
        return"no se puede multiplicar por 0"
    }else{
        return(a*b)
    };},
    dividir:(a,b)=> {
        if (a==0||b==0) {
            return"no se puede dividir por 0"
        } else {
            return (a/b)
        }
    }

}
console.log(calculadora.multiplicasion(10,2));

//COLORES PRIMARIOS
