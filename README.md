# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Création d'un projet React 
    Ce guide vous accompagne dans la création et la configuration d'un projet React, en utilisant plusieurs outils et bibliothèques essentiels pour le développement moderne. Suivez les étapes ci-dessous pour démarrer votre application.
## Initialisation du projet
    npm create vite@latest

## Installation des modules
    npm install

# Lancement de l'application
    npm run dev

# Configuration de TailwindCSS et ses dépendances
## Lien vers le site officiel :
    https://ui.shadcn.com/
## Installation des dépendances :    
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

# shadcn
    Shadcn vous permet de créer des bibliothèques de composants réutilisables pour vos projets. Pour configurer Shadcn-UI :
## Lien vers le site officiel :
    https://ui.shadcn.com/

## Installation
    npx shadcn-ui@latest init
###    Ajout du fichier jsconfig.json : 
        Le contenu du fichier est disponible sur le site mentionné.
###    Modification du fichier vite.config.js : 
        Les instructions spécifiques se trouvent également sur le site.

# Gestion des routes avec React Router
## Lien vers le site officiel :
    https://reactrouter.com/

## Installation de React Router :
    npm install react-router-dom

# Google Places Autocomplete
    Ce composant React permet d'intégrer facilement la saisie semi-automatique de Google Places dans votre application.

## Lien vers la documentation :   
    https://www.npmjs.com/package/react-google-places-autocomplete

## Installation
    npm install --save react-google-places-autocomplete

## API Google Maps :
    Pour obtenir une clé API et configurer Google Maps, visitez 
    https://mapsplatform.google.com/pricing/?hl=fr&_gl=1*y5bq82*_ga*MTgxMzUyMDg2My4xNzIzMzgxNTE1*_ga_NRWSTWS78N*MTcyMzM4MTUxNi4xLjEuMTcyMzM4MjEwNC4wLjAuMA..

# Installation de Material UI
    Material UI est le framework d'interface utilisateur le plus populaire pour React.
## Installation
    npm install @mui/material @emotion/react @emotion/styled

#  Utilisation d'emojis
    Pour ajouter des emojis gratuits à votre projet
## Lien vers le site officiel :
    https://emojipedia.org/


# Génération d'IA avec Google AI
## Lien vers l'outil AI Studio :
    https://aistudio.google.com/

## Installation du SDK Generative AI :
    npm install @google/generative-ai

# Authentification avec Google
    Pour intégrer l'authentification Google dans votre application, téléchargez la librairie suivante :
## Lien vers la documentation :
    https://www.npmjs.com/package/@react-oauth/google

## Installation  :
    npm install @react-oauth/google@latest

# Utilisation des icônes dans React
## Pour intégrer des icônes dans votre projet, visitez :
    https://react-icons.github.io/react-icons/

## Installez la librairie
    npm i react-icons

# Utilisation d'AXIOS pour les requêtes HTTP
    Axios est un client HTTP simple et efficace pour effectuer des requêtes vers des APIs.
## Installation  :
    npm i axios 

# Firebase Integration
    Firebase est une plateforme de développement d'applications mobiles et web proposée par Google. Elle fournit divers services comme l'hébergement, l'authentification, la base de données en temps réel, et plus encore, permettant de créer des applications robustes et évolutives.
## Liens vers le site officiel
    https://firebase.google.com/

## Installation de Firebase
    Pour intégrer Firebase à votre projet React, commencez par installer le package Firebase via npm. Cette étape vous permet de configurer et d'utiliser les services Firebase dans votre application. 

    npm install firebase

## Configuration de firebase
### Créer un Projet Firebase :
    Rendez-vous sur le console Firebase et créez un nouveau projet.

### Obtenir les Clés de Configuration :
    Après avoir créé votre projet, Firebase vous fournira un ensemble de clés de configuration. Ces clés sont nécessaires pour connecter votre application à votre projet Firebase.
    
### Créer un Fichier de Configuration :
    Dans votre projet React, créez un fichier (par exemple, firebaseConfig.js) et ajoutez-y le code de configuration fourni par Firebase.

# Google maps Intégration
## Lien vers le site officiel
    https://developers.google.com/maps/documentation/urls/get-started?hl=fr

## Action sur la carte
    Vous pouvez effectuer des recherches, obtenir des itinéraires, afficher une carte ou afficher un panorama Street View. Vous spécifiez l'action dans l'URL de la requête, ainsi que les paramètres obligatoires et facultatifs. Comme c'est la norme pour les URL, vous devez séparer les paramètres à l'aide de l'esperluette (&). Pour chaque action, la liste des paramètres et leurs valeurs possibles sont énumérées dans la section Paramètres de recherche.
    Dans notre cas on recherche selon le nom et l'adresse. Ex : 
    <Link to={'https://www.google.com/maps/search/?api=1&query=' + hotel?.hotelName + ", " + hotel?.hotelAddress} target='_blank'>

# Deploiement
## lien du site :
    https://vercel.com/