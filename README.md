<div align="center">

# <img src="https://raw.githubusercontent.com/kayaabadiv/tree/refs/heads/main/assets/logo.png" width="400" height="400" alt="TheSeed Logo">

# TheSeed

### *La graine de vos projets*

</div>

---

## 🌱 À propos

TheSeed est la solution idéale pour démarrer vos projets web. Contactez nous !

Conçue par [Canu Anthony](https://cv.theseed.dev/), TheSeed offre une infrastructure robuste et évolutive pour tous vos besoins de développement.

## 🚀 Fonctionnalités

- **Architecture modulaire** : Organisée en contrôleurs et routes
- **Sécurité intégrée** : Support HTTPS natif et encryption des reqûetes avec crypto
- **Gestion des CORS** : Configuration précise des origines autorisées (Bientôt update)
- **Logging** : Suivi des requêtes et stockage des logs
- **Base de données intégrée** : Connexion MySQL préconfigurée

## 📋 Structure de l'API

L'API TheSeed est structurée de manière intuitive :

```
theseed.dev/
├── assets/                  # Ressources statiques
├── controller/              # Logique métier
│   ├── cdn.theseed.dev/     # Site 1
│   ├── cv.theseed.dev/      # Site 2
│   └── gmc.theseed.dev/     # Site 3
├── routes/                  # Points d'entrée de l'API
│   ├── cdn.theseed.dev/     # Site 1
│   ├── cv.theseed.dev/      # Site 2
│   └── gmc.theseed.dev/     # Site 3
└── utils/                   # Utilitaires partagés
```

## 🔧 Installation

```bash
# Cloner le dépôt
git clone https://github.com/kayaabadiv/tree.git

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env
# Éditer le fichier .env avec vos configurations

# Démarrer le serveur
node index.js
```

## 🔌 Points d'API actuellement utilisé

### CV

- `POST /cv/public/contact` : Envoie un message de contact via le formulaire du CV
  - Le contenu est enregistré en base donnée (soon)
  - Je suis notifié sur les réseaux sociaux

## 🛠️ Technologies utilisées

- **Express.js** : Framework web rapide et minimaliste
- **MySQL** : Système de gestion de base de données relationnelle
- **Bun** : En gros Node.Js, mais bien plus rapide (voir le site officiel de [Bun](https://bun.sh/))

## 🔒 Sécurité

- L'API utilise HTTPS par défaut avec des certificats personnalisés. Assurez-vous de générer vos propres certificats pour l'environnement de production.
- Vous pouvez encrypter le contenu de vos requêtes avec crypto, et les décrypter avec l'api (node module soon).

## 📝 Licence

Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.

## 📞 Contact

Pour toute question ou suggestion, n'hésitez pas à me [contacter](https://cv.theseed.dev/).

---

<div align="center">

**TheSeed** - Développé avec ❤️ par [Canu Anthony](https://github.com/kayaabadiv)

</div>