// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAoVrq-b9R_cR6StDe3PCI-4khEkmbh7IQ",
  authDomain: "presenca-estacio.firebaseapp.com",
  projectId: "presenca-estacio",
  storageBucket: "presenca-estacio.firebasestorage.app",
  messagingSenderId: "420470500338",
  appId: "1:420470500338:web:655c048f826bcd9922596b"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Autenticação
export const auth = getAuth(app);

// Firestore
export const db = getFirestore(app);

// Exporta app (opcional)
export default app;
