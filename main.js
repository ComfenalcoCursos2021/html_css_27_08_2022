
let nombre = `Miguel Angel Castro Escamilla`;
let edad = 24;
let altura = 1.63;
let soyInstructor = true;
let dirreciones = null;
let cambioRopa = undefined;
let listaPasatiempo = ["Cocinar", "Programar", "Cantar", "GYM"];
let caracteristicasPC = {
    sistema: "Windows 11 64X home",
    ram: 16,
    disco: "M.2",
    iluminacion(){
        return "SI";
    }
}

let myStyle = `color: #fff;background: #ee16ca;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;border-radius: 5px;padding: 5px;`;
console.group(`%cNombre del desarrollador`, myStyle);
    console.log(nombre);
console.groupEnd();
console.group(`%cEdad del desarrollador`, myStyle);
    console.log(edad);
console.groupEnd();
console.group(`%cAltura del desarrollador`, myStyle);
    console.log(altura);
console.groupEnd();
console.group(`%cPermiso para enseñar`, myStyle);
    console.log(soyInstructor);
console.groupEnd();
console.group(`%cDirrecion del desarrollador`, myStyle);
    console.log(dirreciones);
console.groupEnd();
console.group(`%cRopa del desarrollador`, myStyle);
    console.log(cambioRopa);
console.groupEnd();
console.group(`%cPasatiempos del desarrollador`, myStyle);
    console.log(listaPasatiempo);
console.groupEnd();
console.group(`%cPC del desarrollador`, myStyle);
    console.log(caracteristicasPC);
console.groupEnd();

