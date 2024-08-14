import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { FcGoogle } from "react-icons/fc";
import axios from 'axios'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from '@react-oauth/google'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


function Header() {

  const user = JSON.parse(localStorage.getItem('user'))

  const [openDialog, setOpenDialog] = useState(false) // État pour gérer l'ouverture du dialogue de connexion

  useEffect(() => {
    console.log('User:', user)
  }, [])

  // Configuration de la connexion Google
  const login = useGoogleLogin({
    onSuccess: (codeResp) => getUserProfile(codeResp), // En cas de succès, récupérer le profil utilisateur
    onError: (error) => console.log(error) // En cas d'erreur, afficher l'erreur dans la console
  })

    // Fonction pour récupérer le profil utilisateur après la connexion Google
    const getUserProfile = (tokenInfo) => {
      axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
        headers: {
          Authorization: `Bearer ${tokenInfo?.access_token}`,
          Accept: 'application/json'
        }
      }
      ).then((resp) => {
        console.log(resp)
        localStorage.setItem('user', JSON.stringify(resp.data))
        setOpenDialog(false)
        window.location.reload() // Recharger la page pour afficher le bouton de déconnexion
      })
    }


  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-4'>
      <img src="/logo.svg" alt="" />
      <div>
        {
          user ?
            <div className='flex items-center gap-3'>
              <a href="/my-trips">
                <Button variant="outline" className="rounded-full">My Trips</Button>
              </a>
              <Popover>
                <PopoverTrigger>
                  <img src={user.picture} alt="" className='w-[35px] h-[35px] rounded-full' />
                </PopoverTrigger>
                <PopoverContent>
                  <h2
                    className='cursor-pointer'
                    onClick={() => {
                      googleLogout();
                      localStorage.clear();
                      window.location.reload();
                    }}>
                    Logout
                  </h2>
                </PopoverContent>
              </Popover>
            </div> :
            <Button onClick={() => setOpenDialog(true)}>Sign up</Button>
        }
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src={'/logo.svg'} />
              <h2 className='font-bold text-lg mt-7'>Sign in with Google</h2>
              <p>Sign in to the app with Google authentication securely</p>
              <Button
                onClick={login}
                className="w-full mt-5 flex gap-4 items-center"
              >
                <FcGoogle className='h-7 w-7' />
                Sign in Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Header
