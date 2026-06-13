# Salon de Barbier du Havre — maquette interactive

Site vitrine statique en HTML, CSS et JavaScript. Aucun outil de compilation n'est requis.

## Aperçu local

Ouvrez simplement `index.html` dans votre navigateur, ou démarrez un petit serveur local :

```bash
python3 -m http.server 8080
```

Puis ouvrez `http://localhost:8080`.

## Mise en ligne sur GitHub + Vercel

1. Créez un nouveau dépôt GitHub.
2. Téléversez tout le contenu de ce dossier à la racine du dépôt.
3. Dans Vercel, choisissez **Add New Project** puis importez le dépôt.
4. Laissez le framework sur **Other** et cliquez sur **Deploy**.

## Points à valider avant publication officielle

- Obtenir l'accord de Julie Corbeil pour utiliser sa photo et les photos de coupes.
- Confirmer les prix, le numéro de téléphone et l'adresse.
- Remplacer les cartes d'avis par de véritables avis publiés avec autorisation.
- Ajouter le lien Messenger officiel dans `script.js` :

```js
const messengerUrl = 'https://m.me/IDENTIFIANT_DE_LA_PAGE';
```

- Retirer la bannière « Maquette de démonstration non officielle » et le `noindex` seulement après validation du salon.
- Associer le domaine au compte du salon ou s'assurer que le salon en reste propriétaire.

## Fichiers

- `index.html` : structure et contenu
- `styles.css` : identité visuelle et mise en page responsive
- `script.js` : menu mobile, animations, galerie et bouton Messenger
- `assets/` : photos, favicon et visuels
- `vercel.json` : configuration minimale pour Vercel
