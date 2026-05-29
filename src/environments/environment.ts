//aqui se definen las credenciales de firebase para conectar la app con la base de datos en la nube
export const environment = {
  production: false,//Indica que no es el entorno de producción
  //es el objeto con la configuracion de FireBase (se obtuvo desde la consola de FireBase)
  firebase: {
    apiKey: "AIzaSyCLF-Ikf-oxxa56rAeoQh_YvxHvXUI-Ovo",//clave pública de API
    authDomain: "global-truck-hub-352fc.firebaseapp.com",
    projectId: "global-truck-hub-352fc",//ID del proyecto Firebase
    storageBucket: "global-truck-hub-352fc.firebasestorage.app",//bucket para archivos (imágenes, etc.)
    messagingSenderId: "416867205024",
    appId: "1:416867205024:web:9ed400a8e5ee33ea20eec5",
    measurementId: "G-4ZN0MYKSNS"
  }
};