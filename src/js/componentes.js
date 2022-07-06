import  '../css/componente.css';


export const saludar=(nombre)=>{
    console.log('Creando etiqueta Holaaaaaaaa');
    const h1=document.createElement('h1');
    h1.innerHTML=`Hola, ${nombre}`;
    document.body.append(h1);
}