jeudi 25 janvier 2024.

FONCTIONNALITEES
- affichage des données:
    page Home:
    affichage des cartes:
    - sous forme de tableau.
    - tri ascendant/descendant : OK
    - filtres sur les colonnes : OK
    - modale: 1 carte en détail : OK
    - zoom sur une photo : OK
Améliorations:
- factoriser, séparer en composants réutilisables. 
    Etudier les props et les useContext.
- revoir le CSS dans son intégralité (SCSS est très mal exploité)
    Refaire l'interface en utilisant SASS ou Tailwind
    L'appli sera utilisée principalement sur desktop. 
    Prévoir les @media pour tablette et mobile 
    Réserver l'admin au mode desktop
    le mailing n'est pas prévu. 
    Il n'est pas prévu de déployer l'appli sur le net. 
    Développer en integrant les deux 'fonctions' ci-dessus. Les prévoir en options.
Développer:
- l'ajout, la modification, la suppression de cartes.
- DB:
    - ajouter une col à base "active/inactive": agir sur cette col pour supprimer ou restaurer la carte.
    - céer les tables pour sauvegarder l'état de l'interface à la fermeture de l'appli et l'historique des actions:
    exp: "{Date} suppression de la carte {infos}" => annuler, confirmer (irreversible);



------------------------------------------------------------------------------------
Avec le Client:
Prochaine réunion:
faire une petite démo du projet.
    - définir les choix en matière de:
        - design
        - fonctionnalitées
Design:
- page Home: 
    - sous forme de tableau (actuel)
    - de cartes
    - les deux 
- au démarrage, affichage de: 
    - la totalité (actuel)
    - la dernière fermée:
    - les deux 
Fonctionnalitées:
    - noter les attentes.
Préparer une userStory selon le SCRUM (avec un seul dev...). 
La réunion ne devrait pas excéder 1/2 heure.




