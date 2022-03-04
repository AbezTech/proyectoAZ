
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider , signInWithPopup } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAGNps3B6FgEiNb4taGe79g_54KWNdwrQc",
  authDomain: "azproyecto.firebaseapp.com",
  databaseURL: "https://azproyecto-default-rtdb.firebaseio.com",
  projectId: "azproyecto",
  storageBucket: "azproyecto.appspot.com",
  messagingSenderId: "605533980227",
  appId: "1:605533980227:web:da721879c5f436734576f6"
};


const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () =>{

signInWithPopup(auth, provider).then((result)=>{
    console.log(result)

    const name = result.user.displayName;
    const email = result.user.email;
    const profile = result.user.photoURL;

}).catch((error)=>{

    console.log(error)
})

}