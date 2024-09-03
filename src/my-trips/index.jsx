import { db } from '@/service/firebaseconfig'
import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserTripsCard from './component/UserTripsCard'

function MyTrips() {
    const navigate = useNavigate() // Déplacez ceci dans le corps principal du composant

    const [userTrips, setUserTrips] = useState([])  

    useEffect(() => {
        GetUserTrips(navigate)
    }, [navigate])

    /**
     * 
     * @param {function} navigate 
     * @description Cette fonction récupère les voyages de l'utilisateur actuellement connecté
     * et les stocke dans l'état `userTrips`
     * Si l'utilisateur n'est pas connecté, il redirige vers la page de connexion
     * @returns {void}
     */
    const GetUserTrips = async (navigate) => { // Passez `navigate` en tant que paramètre
        const user = JSON.parse(localStorage.getItem('user')) // Récupérez l'utilisateur de localStorage

        if (!user) {
            navigate('/') // Utilisez `navigate` pour la redirection
            return
        }

        const q = query(collection(db, 'AITrips'), where('userEmail', '==', user?.email)) // Utilisez `where` pour filtrer les voyages de l'utilisateur actuel
        const querySnapshot = await getDocs(q); // Utilisez `getDocs` pour obtenir les voyages de l'utilisateur actuel

        setUserTrips([]) // Réinitialisez l'état
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            setUserTrips(preVal => [...preVal, doc.data()]) // Mettez à jour l'état
        });
        // console.log(userTrips)
    }

    return (
        <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
            <h2 className='font-bold text-3xl'>MyTrips</h2>
            <div className='grid grid-cols-2 mt-10 md:grid-cols-3 gap-5'>
                {
                    userTrips.length > 0 ?
                    userTrips.map((trip, index) => (
                        <UserTripsCard trip={trip} key={index}/>
                    )) :
                    [1, 2, 3, 4, 5, 6].map((item, index) => (
                        <div key={index} className='h-[220px] w-full bg-slate-200 animate-pulse rounded-xl'>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MyTrips
