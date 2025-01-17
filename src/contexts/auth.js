import React, {useState, createContext, useEffect} from 'react';
import { getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut } from "firebase/auth";
import { getDoc, 
    doc, 
    setDoc } from "firebase/firestore"; 
import AsyncStorage from '@react-native-async-storage/async-storage'


import { db } from '../firebaseConnection'

export const AuthContext = createContext({})

const auth = getAuth();

function AuthProvider ({ children }) {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingAuth, setLoadingAuth] = useState(false);

    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('findApp');

            if(storageUser) {
                setUser(JSON.parse(storageUser))
                setLoading(false)
            }
            setLoading(false)
        }
        loadStorage()
    }, [])

    async function Login(email, password) {
        setLoadingAuth(true)

        await signInWithEmailAndPassword(auth, email, password)
        .then( async (value) => {
            let uid = value.user.uid;

            const docRef = doc(db, 'users', uid)
            const docSnap = await getDoc(docRef)
           
            let data = {
                uid: uid,
                nome: docSnap.data().nome,
                telefone: docSnap.data().telefone,
                email: value.user.email
            }
            setUser(data)
            storageUser(data)
            setLoadingAuth(false)
        }).catch((error) => {
            console.log(error)
            alert('Error' + error)
            setLoadingAuth(false)
        })
    }// fim do Login
    
    async function Cadastro(email, password, name, phone){
        setLoadingAuth(true)

        await createUserWithEmailAndPassword(auth, email, password, name, phone)
        .then(async (value) => {
            let uid = value.user.uid;
            await setDoc(doc(db,'users/',uid), {
                nome:name,
                telefone: phone,
            }).then(()=> {
                let data = {
                    nome:name,
                    telefone:phone,
                    uid:uid,
                    email: value.user.email
                }
                setUser(data)
                storageUser(data)
                setLoadingAuth(false)
            })
        }).catch((error)=> {
            console.log(error)
            alert('Error' + error)
            setLoadingAuth(false)
        })
    } // fim do cadastro

    async function Deslogar() {
        await signOut(auth);
        await AsyncStorage.clear()
        .then(()=> {
            setUser(null)
        })
    }

    async function storageUser(data){
        await AsyncStorage.setItem('findApp', JSON.stringify(data))
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, 
        user, 
        Cadastro, 
        Login, 
        Deslogar,
        loadingAuth, 
        loading 
        }}>
            {children}
        </AuthContext.Provider>
       );
}
export default AuthProvider;