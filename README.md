# Générateur de QR Code Wi-Fi

Petite application web permettant de générer un QR Code pour se connecter à un réseau Wi-Fi à partir de son nom et de son mot de passe.

## Fonctionnalités

- Saisie du nom du réseau Wi-Fi et de son mot de passe
- Génération d'un QR Code à scanner avec un téléphone
- Possibilité d'effacer le QR Code généré

## Technologies utilisées

- **HTML** : structure de la page
- **CSS** : mise en forme de l'interface
- **JavaScript** : gestion du formulaire et génération des données Wi-Fi
- **QRCode.js** : bibliothèque utilisée pour générer le QR Code

## Fonctionnement du code

JavaScript récupère le nom du réseau et le mot de passe saisis dans le formulaire, puis construit une chaîne au format Wi-Fi (WIFI:T:WPA;S:...;P:...;;).

La bibliothèque QRCode.js utilise ensuite cette chaîne pour générer et afficher le QR Code directement dans la page.

## Lancer le projet

Ouvrir simplement le fichier index.html dans un navigateur avec une connexion Internet.