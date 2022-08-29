

import { collection, getDocs, getFirestore } from "firebase/firestore";
import { db } from "../firebase-config";



export const getDate = async (endpoint, limit, name) => {


    if (limit != 0 && limit != -1) {
        const response = await fetch(`https://pokeapi.co/api/v2/${endpoint}?limit=${limit}`);
        const pokemons = response.json();
        return pokemons;
    }
    if (name) {
        const response = await fetch(`https://pokeapi.co/api/v2/${endpoint}/${name}`);
        const pokemons = response.json();

        return pokemons;
    }

    if (limit == -1) {
        const response = await fetch(`${endpoint}`);
        const pokemons = response.json();
        return pokemons;
    }

}


export const getDataFireStore = async (endpoint) => {
    let docArray = []
    const querySnapshot = await getDocs(collection(db, endpoint));

    querySnapshot.forEach((doc) => {
        docArray.push(doc.data());
    });
    return docArray;
}