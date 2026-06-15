import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";

export async function logarUsuario(email, senha) {
  return await signInWithEmailAndPassword(auth, email, senha);
}

export async function deslogarUsuario() {
  await signOut(auth);
}
