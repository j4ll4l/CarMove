# CarMove

# CarMove

CarMove est une application web développée avec Vue 3 et Vite, dédiée à la présentation de véhicules disponibles à la vente.  
Pour l’instant, seule la partie **front-end** est réalisée ; la partie **back-end** sera développée prochainement en Symfony.

## Fonctionnalités réalisées

- **Page d’accueil** avec header et footer.
- **Page des véhicules disponibles** :
  - Affichage des véhicules sous forme de cartes, avec leurs principales informations (nom, prix, kilométrage, année, énergie, etc.).
  - Quelques petits icônes pour illustrer certaines informations.
  - Trois filtres (marque, prix, carburant) présents en haut de la page, mais **pas encore actifs**.
- **Navigation** entre les pages grâce au router Vue.
- **Code organisé** : routes dans un fichier dédié, composants réutilisables, props typées avec TypeScript et valeurs par défaut.

## Limitations actuelles

- **La charte graphique** n’est pas encore définie.
- **Les interfaces utilisateur** (UI) sont encore très simples ou manquantes.
- **Les filtres** ne sont pas encore actifs.
- **Le back-end** n’est pas encore développé.

## À venir

- **Back-end en Symfony** pour la gestion dynamique des véhicules et des filtres.
- **Activation des filtres** pour permettre la recherche dynamique.
- **Amélioration de la charte graphique** et ajout de nouveaux éléments visuels.
- **Création et intégration des interfaces utilisateur** plus complètes.

---

Ce projet constitue une base front-end moderne et évolutive pour une application de gestion de véhicules, en attendant l’intégration du back-end, des interfaces et des fonctionnalités avancées.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
