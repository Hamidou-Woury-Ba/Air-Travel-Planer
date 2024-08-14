import axios from "axios"

const BASE_URL = 'https://maps.googleapis.com/maps/api/place/textsearch/output' //remplace ceci par ton url

// Configuration pour les requêtes
const config = {
    headers:{
        'Content-Type': 'application/json', // le type de contenu de la requête est json 
        'X-Goog-Api-Key': import.meta.env.VITE_GOOGLE_PLACES_API_KEY,
        'X-Goog-FieldMask':[
            'places.photos',
            'places.displayName',
            'places.id'
        ]
    }
}

export const GetPlaceDetails = (data) => axios.post(BASE_URL, data, config) // fonction pour recuperer les details d'un lieu