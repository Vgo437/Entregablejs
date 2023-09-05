const suma = (a,b) =>{
    /**
     * a y b son los parámetros de entrada.
     * La función debe devolver la suma de los parámetros de entrada
     * Debes generar el código para que la función haga lo solicitado.
     */
    return a+b;
    
}
console.log(suma(4,5));

const sonIguales = (x, y)=>{
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Debes generar el código para que la función haga lo solicitado.
    if(x===y){
      return true;
    }
    else{
      return false;
    }
}

console.log(sonIguales(2,3));

function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    if(str1.length === str2.length){
      return true;
    }
    else{
      return false;
    }
  }
  console.log(tienenMismaLongitud('hola','chao'))

  function esPositivo(numero) {
    /**
     * la función recibe como parámetro de entrada un número entero.
     * Devuelve como resultado una cadena de texto que indica si el 
     * número es positivo o negativo. 
     * Si el número es positivo, devolver ---> "Es positivo"
     * Si el número es negativo, devolver ---> "Es negativo"
     * Si el número es 0, devuelve false
     * Tu código:
     */
    if(numero>0){
      return 'Es positivo';
    }
    else if(numero<0){
      return 'Es negativo';
    }if (numero==0){
      return( false);
    }
  }

console.log(esPositivo(0));

  const colors = (color)=>{
    //La función recibe un color. Devolver el string correspondiente:
    //En caso que el color recibido sea "blue", devuelve --> "This is blue"
    //En caso que el color recibido sea "red", devuelve --> "This is red"
    //En caso que el color recibido sea "green", devuelve --> "This is green"
    //En caso que el color recibido sea "orange", devuelve --> "This is orange"
    //Caso default: devuelve --> "Color not found"
    //Usar el statement Switch.
    switch(color){
      case ('blue'):
        return (`This is ${color}`);
        break;
      case ('red'):
         return ('This is red');
        break;
      case 'green':
        return ('This is green');
        break;
      case 'orange':
        return ('This is orange');
        break;
      default:
        return ('Color not found');
        break;
    }

    
  }
  console.log(colors("blue"));

  const fizzBuzz = (numero)  => {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero
if(numero%3===0 && numero%5===0){
      return ('fizzbuzz')
}else   if(numero%3===0)
{
  return ('fizz');
}    else if(numero%5===0){
  return ('buzz');
}else{
  return(numero);
}
  }
console.log(fizzBuzz(4));

  const devolverPrimerElemento = (array) => {
    /**
     * La función recibe como parámetro de entrada un arreglo.
     * La función debe regresar el primer elemento del arreglo
     */
    // Tu código:
     return array[0];
   
  }
  const numeros=['hola',2,3,4];
  console.log(devolverPrimerElemento(numeros));

  const agregarItemAlFinalDelArray = (array, elemento) =>{
    /**
     * La función recibe dos parámetros de entrada, un arreglo y un elemento
     * Se debe añadir el elemento al final del arreglo y luego regresar el arreglo
     */
    // Tu código:
    array.push(elemento);
    return array;
  }
  console.log(agregarItemAlFinalDelArray([],'aja'));
  
  const nuevoUsuario = (nombre, email, password) => {
    /**
     * Crea un nuevo objeto con las propiedades coincidiendo con los argumentos
     * que se pasan a la función.  Devuelve el objeto
     */
    // Tu código:
    const user1={
      nombre:nombre,
      email:email,
      password:password,
    }
    return user1;
  }

  const user={
    nombre: 'Jhon',
    email: 'jhon@email.com',
    password: 'correcthorsebatterystaple',
  }
  console.log(nuevoUsuario(user.nombre,user.email,user.password));

  const verificarPassword = (usuario, password) => {
    // Comprueba si el "password" enviado coincide con la propiedad "password" del objeto "usuario"
    // Devuelve "true" si coinciden
    // De lo contrario, devuelve "false"
    // // Tu código:

    if(usuario.password==password){
      return true;
    }else {
      return false;
    }
  }
  const usuario ={
    password:'hola'
  }
  const password='hola';
  console.log(verificarPassword(usuario,password));


  const actualizarPassword =(usuario, nuevaPassword) => {
    // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
    // Devuelve el objeto
    // Tu código:
    usuario.contraseña=nuevaPassword;
    return usuario;
  }
  const usua={
    contraseña:'hola'
  }
  const contra='bueno';
  console.log(actualizarPassword(usua,contra));

  const agregarAmigo = (usuario, nuevoAmigo) => {
    // "usuario" tiene una propiedad llamada "amigos" que es un array
    // Agrega "nuevoAmigo" al final de ese array
    // Devuelve el objeto "usuario"
    // // Tu código:
    usuario.amigos.push(nuevoAmigo);
    return usuario.amigos[usuario.amigos.length-1];
   
  }
  const usuarioamigos={
    amigos:['pedro','juan','kevin']
  }
  console.log(agregarAmigo(usuarioamigos,'vane'));

  const pasarUsuarioAPremium = usuarios => {
    // "usuarios" es un array de objetos "usuario"
    // Cada objeto "usuario" tiene la propiedad "esPremium"
    // Define cada propiedad "esPremium" de cada objeto como "true"
    // Devuelve el array de usuarios
    // Tu código:
    usuarios.map((aja)=>aja.esPremium=true)
    return usuarios;
  }
  const usuario1=[
    {esPremium:false},
    {esPremium:false}
  ];
  console.log(pasarUsuarioAPremium(usuario1));
  
  const sumarLikesDeUsuario = usuario => {
    // "usuario" tiene una propiedad llamada "posts" que es un array
    // "posts" es un array de objetos "post"
    // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
    // Suma todos los likes de todos los objetos "post"
    // Devuelve la suma
    // Tu código:
   let suma = 0;
   usuario.post.forEach((item)=>{
     suma =suma + item.likes;
   })

   return suma;
  }

  const usersuma={
    usernombre:'hola',
    contraseña:'123',
    post:[
      {
        likes:123,
      },
      {
        likes:456,
      },
      {
        likes:1,
      },
    ]
  }

  console.log(sumarLikesDeUsuario(usersuma));

class Persona {
  // ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con 
  //las propiedades de la persona y sus valores.
  //un ejemplo del objeto es el siguiente
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }
    constructor(nombre,apellido,edad,domicilio) {
      this.nombre= nombre;
      this.apellido=apellido;
      this.edad=edad;
      this.domicilio=domicilio;
    }

    detalle(){
      const persona={
        nombres:this.nombre,
        apellido:this.apellido,
        edad:this.edad,
        domicilio:this.domicilio,
      }
      return persona;
    }
}

const crearInstanciaPersona = (nombre, apellido, edad, dir)=>{
    //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
    //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
    //Devolver la nueva persona creada

   pers= new Persona (nombre,apellido,edad,dir);
   return pers;
}
console.log(crearInstanciaPersona('Juan','Perez',22,'Saavedra 123'));

const sumarArray = (numeros, cb) =>{
    // Suma todos los números enteros (int/integers) de un array ("numeros")
    // Pasa el resultado a `cb`
    // No es necesario devolver nada
    let sum=0;
  numeros.forEach((item)=>{(sum+= item)});
  cb(sum);
}

const numero=[1,2,3,4,5];
const sum=(num)=>{}

sumarArray(numero,sum);

const copiarEach = (array, cb) =>{
    // Itera sobre la matriz "array" y pasa los valores a cb uno por uno
    // Pista: Estarás invocando a `cb` varias veces (una por cada valor en el array)
    // no tienes que devolver nada
    array.forEach((item)=>{
      (cb(item));
    })

    
  }
  const num=[1,3,45,6];
  let aux=[];
  const copia=(num)=>{
   aux.push(num);
   return aux;
  }
  copiarEach(num,copia);

  const operacionMatematica =(n1, n2, cb) =>{
    //Vamos a recibir una función (cb) que realiza una operación matemática junto con dos números.
    //Devolver la función pasándole como argumentos los números recibidos.
    //Tu código:
    return cb(n1,n2);
  }
  
  const mate=(n1,n2)=>{
   return n1+n2;
  }
  console.log(operacionMatematica(2,4,mate));
  
  function filter(array) {
    //Filtrar todos los elementos del array que comiencen con la letra "a".
    //Devolver un nuevo array con los elementos que cumplen la condición
    //Tu código:
    let aux=[];
    aux.push=array.filter((item)=>{return item[0]=='a'});
    return aux;
  } 
  const arrays=['hola','adios','ahora','aja','despues'];
  console.log(filter(arrays));

  /**
 * Por favor no borrar el código que hay de aquí en adelante.
 * Este código sirve para ejecutar las pruebas de la solución hallada para cada
 * una de las funciones creadas.
 */
module.exports = {
    suma,
    sonIguales,
    tienenMismaLongitud,
    esPositivo,
    colors,
    fizzBuzz,
    devolverPrimerElemento,
    agregarItemAlFinalDelArray,
    nuevoUsuario,
    verificarPassword,
    actualizarPassword,
    agregarAmigo,
    pasarUsuarioAPremium,
    sumarLikesDeUsuario,
    Persona,
    crearInstanciaPersona,
    sumarArray,
    copiarEach,
    operacionMatematica,
    filter
}

