import { db } from '@/service/firebaseconfig'
import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'
import InfoSection from './component/InfoSection'
import Hotels from './component/Hotels'
import PlacesToVisit from './component/PlacesToVisit'
import Footer from './component/Footer'

function ViewTrip() {

    const { tripId } = useParams() // on recupere le tripId de l'url

    const [trip, setTrip] = useState() // on initialise le state trip avec une valeur null

    // on utilise le hook useEffect pour appeler la fonction getTripData au chargement du composant
    useEffect(() => {
        tripId && getTripData() // on appelle la fonction getTripData
    }, [tripId])

    /**
     * Fonction pour recuperer les données du voyage
     * @returns {void}
     * @name getTripData 
     * @function getTripData
     * @param {string} tripId - l'id du voyage
     */
    const getTripData = async () => {
        const docRef = doc(db, 'AITrips', tripId); // on recupere le document de la collection AITrips qui a pour id tripId
        const docSnap = await getDoc(docRef); // on recupere les données du document

        // si le document existe on affiche les données du document sinon on affiche un message d'erreur
        if(docSnap.exists()) {
            console.log('Document data:', docSnap.data()); 
            setTrip(docSnap.data())
        }else{
            console.log('No such document!'); 
            toast('No such document!', { type: 'error' })
        }
    }

    return (
        <div className='p-10 md:px-20 lg:px-50 xl:px-56'>

            {/* Information Section */}
            <InfoSection trip={trip} /> 

            {/* Hotels */}
            <Hotels trip={trip} />

            {/* Places à visiter */}
            <PlacesToVisit trip={trip}/>

            {/* Pieds de page */}
            <Footer trip={trip} />
        </div>
    )
}

export default ViewTrip
