/* ==========================================================================
   Données du site : les sections et les projets.

   C'est le seul fichier à modifier pour ajouter ou changer un projet
   (voir le README, « Ajouter un projet »).

   Le format est du JSON : des listes [ ... ] et des fiches { "clé": valeur }.
   Attention aux virgules : une virgule entre deux éléments, jamais après le dernier.

   Pourquoi un fichier .js et pas .json ? Pour que le site marche aussi en
   ouvrant simplement index.html par un double-clic (le navigateur refuse de lire
   un fichier .json depuis le disque, mais accepte un script).
   ========================================================================== */

/* Les 3 sections. "largeur" = nombre de colonnes sur 12 occupées par la colonne de vignettes. */
const SECTIONS = [
  {
    "id": "3dart",
    "titre": "3D art",
    "titre_en": "3D art",
    "suivante": "design",
    "boutonSuivante": "Design",
    "boutonSuivante_en": "Design",
    "colonnes": [
      {
        "largeur": 5,
        "vignettes": [
          {"projet": "eremia", "titre": "Eremia", "image": "assets/images/vignettes/eremia.jpg", "largeur": 1600, "hauteur": 900},
          {"projet": "expo-anachronique", "titre": "Expo Anachronique", "image": "assets/images/vignettes/expo-anachronique.jpg", "largeur": 1600, "hauteur": 900}
        ]
      },
      {
        "largeur": 3,
        "vignettes": [
          {"projet": "lumineux", "titre": "Lumineux", "image": "assets/images/vignettes/lumineux.jpg", "largeur": 1080, "hauteur": 1920}
        ]
      },
      {
        "largeur": 4,
        "vignettes": [
          {"projet": "mapping-poolroom", "titre": "Mapping Poolroom", "image": "assets/images/vignettes/mapping-poolroom.jpg", "largeur": 1600, "hauteur": 900},
          {"projet": "safe-place", "titre": "Safe Place", "image": "assets/images/vignettes/safe-place.jpg", "largeur": 1536, "hauteur": 1920}
        ]
      }
    ]
  },
  {
    "id": "design",
    "titre": "Design",
    "titre_en": "Design",
    "suivante": "scenography",
    "boutonSuivante": "Scénographie",
    "boutonSuivante_en": "Scenography",
    "colonnes": [
      {
        "largeur": 4,
        "vignettes": [
          {"projet": "decalque", "titre": "Décalque", "image": "assets/images/vignettes/decalque.jpg", "largeur": 1600, "hauteur": 1200},
          {"projet": "backgammon-table", "titre": "Table de Backgammon", "titre_en": "Backgammon Table", "image": "assets/images/vignettes/backgammon-table.jpg", "largeur": 1600, "hauteur": 900}
        ]
      },
      {
        "largeur": 4,
        "vignettes": [
          {"projet": "flaneries", "titre": "Flâneries", "image": "assets/images/vignettes/flaneries.jpg", "largeur": 1600, "hauteur": 900},
          {"projet": "objet-porte", "titre": "Objet porté", "titre_en": "Worn Object", "image": "assets/images/vignettes/objet-porte.jpg", "largeur": 1358, "hauteur": 1920}
        ]
      },
      {
        "largeur": 4,
        "vignettes": [
          {"projet": "place-boivin", "titre": "Place Boivin", "image": "assets/images/vignettes/place-boivin.jpg", "largeur": 1600, "hauteur": 1200}
        ]
      }
    ]
  },
  {
    "id": "scenography",
    "titre": "Scénographie",
    "titre_en": "Scenography",
    "suivante": "3dart",
    "boutonSuivante": "3D art",
    "boutonSuivante_en": "3D art",
    "colonnes": [
      {
        "largeur": 4,
        "vignettes": [
          {"projet": "light_experience", "titre": "Light_experience", "image": "assets/images/vignettes/light-experience.jpg", "largeur": 1600, "hauteur": 900},
          {"projet": "ozone", "titre": "Ozone", "image": "assets/images/vignettes/ozone.jpg", "largeur": 1600, "hauteur": 1070}
        ]
      },
      {
        "largeur": 4,
        "vignettes": [
          {"projet": "macula", "titre": "Macula", "image": "assets/images/vignettes/macula.jpg", "largeur": 1600, "hauteur": 1068},
          {"projet": "nos-morceaux", "titre": "Nos morceaux", "image": "assets/images/vignettes/nos-morceaux.jpg", "largeur": 1440, "hauteur": 1920}
        ]
      },
      {
        "largeur": 4,
        "vignettes": [
          {"projet": "matiere-grise", "titre": "Matière grise", "image": "assets/images/vignettes/matiere-grise.jpg", "largeur": 1600, "hauteur": 1060}
        ]
      }
    ]
  }
];

/* Les projets. Pour chaque projet :
   - "id" : le nom court qui apparaît dans l'adresse (mikaelmahussier.com/#eremia), sans espace ni accent
   - "section" : l'id de la section qui contient le projet
   - "texte" : un paragraphe par ligne. On peut y mettre <i>italique</i>, <b>gras</b>, <br> (retour à la ligne)
     et des liens vers un autre projet : <a href="#ozone">Ozone</a>
   - "medias" : une liste de rangées. Chaque rangée est une liste de médias affichés côte à côte,
     à la même hauteur. Un média est une image, une vidéo ou une vidéo YouTube :
       { "type": "image", "src": "assets/images/...", "largeur": 1600, "hauteur": 900, "alt": "description" }
       { "type": "video", "src": "assets/videos/...", "largeur": 796, "hauteur": 592 }
       { "type": "youtube", "id": "NUvw2IQfot4" }   (l'id est la fin du lien youtu.be/...)
     "legende" (facultatif) ajoute un texte sous le média.
     "alt" décrit l'image pour les personnes aveugles et pour Google : à remplir petit à petit.

   Version anglaise (page en/index.html) : chaque texte peut avoir son double en anglais,
   avec le même nom suivi de « _en » : "titre_en", "texte_en", "legende_en", "alt_en"
   (et pour les sections "titre_en", "boutonSuivante_en"). S'il manque, la page anglaise
   affiche le texte français : un nouveau projet marche donc tout de suite, même pas encore traduit. */
const PROJETS = [
  {
    "id": "decalque",
    "titre": "Décalque",
    "section": "design",
    "date": "01/2025",
    "texte": [
      "Décalque est une édition imprimée conçue pour capturer plusieurs images d'une animation au sein d'une seule et même image.",
      "Je me suis intéressé à cette approche comme un moyen de révéler les déformations du corps, qui sont délibérément exagérées pour enrichir le mouvement. Lorsque toutes les images sont superposées, ces variations créent une vibration visuelle qui confère à la composition une intensité distincte."
    ],
    "texte_en": [
      "Décalque is a printed edition designed to capture several frames of an animation within one single image.",
      "I was interested in this approach as a way of revealing the deformations of the body, which are deliberately exaggerated to enrich the movement. When all the frames are layered on top of each other, these variations create a visual vibration that gives the composition a distinct intensity."
    ],
    "medias": [
      [
        {"type": "image", "src": "assets/images/decalque/03-pxl-20251113-174011523-2.jpg", "largeur": 1600, "hauteur": 1200, "alt": ""},
        {"type": "image", "src": "assets/images/decalque/02-pxl-20251113-174323231.jpg", "largeur": 1600, "hauteur": 1200, "alt": ""}
      ],
      [
        {"type": "image", "src": "assets/images/decalque/01-pxl-20251113-174118703-2.jpg", "largeur": 1600, "hauteur": 1200, "alt": ""},
        {"type": "image", "src": "assets/images/decalque/05-oiseau-2.jpg", "largeur": 1600, "hauteur": 1237, "alt": ""},
        {"type": "image", "src": "assets/images/decalque/04-perspective-2.jpg", "largeur": 1600, "hauteur": 1237, "alt": ""}
      ],
      [
        {"type": "image", "src": "assets/images/decalque/07-hylics-2.jpg", "largeur": 1600, "hauteur": 1237, "alt": ""},
        {"type": "image", "src": "assets/images/decalque/06-kick-2.jpg", "largeur": 1600, "hauteur": 1237, "alt": ""}
      ]
    ]
  },
  {
    "id": "backgammon-table",
    "titre": "Backgammon Table",
    "section": "design",
    "date": "04/2024",
    "texte": [
      "Ce projet est une collaboration avec une école de design au Liban, où chaque étudiant explore une technique artisanale traditionnelle en partenariat avec des artisans locaux.",
      "Dans notre équipe, nous avons choisi la marqueterie comme technique principale, nous permettant d'appliquer un savoir-faire traditionnel à une pratique contemporaine. Le projet s'est concentré sur le jeu de backgammon, très populaire au Liban et souvent pratiqué autour d'un café.",
      "Plutôt que de se limiter à la boîte pliante traditionnelle, nous avons conçu une table afin d'y intégrer le plateau et d'offrir un espace de rangement pour les jetons et accessoires, créant ainsi une expérience plus fonctionnelle et conviviale."
    ],
    "texte_en": [
      "This project is a collaboration with a design school in Lebanon, where each student explores a traditional craft technique in partnership with local artisans.",
      "Our team chose marquetry as the main technique, which allowed us to apply traditional know-how to a contemporary practice. The project focused on backgammon, a very popular game in Lebanon, often played over a coffee.",
      "Rather than sticking to the traditional folding box, we designed a table that integrates the board and offers storage space for the checkers and accessories, creating a more functional and convivial experience."
    ],
    "medias": [
      [
        {"type": "image", "src": "assets/images/backgammon-table/01-vue-34.jpg", "largeur": 1600, "hauteur": 900, "alt": ""},
        {"type": "image", "src": "assets/images/backgammon-table/02-plateau-decaller.jpg", "largeur": 1600, "hauteur": 900, "alt": ""}
      ],
      [
        {"type": "image", "src": "assets/images/backgammon-table/03-jeton.jpg", "largeur": 1600, "hauteur": 900, "alt": ""},
        {"type": "image", "src": "assets/images/backgammon-table/04-vue-dessus.jpg", "largeur": 1600, "hauteur": 900, "alt": ""},
        {"type": "image", "src": "assets/images/backgammon-table/05-vue-face.jpg", "largeur": 1600, "hauteur": 900, "alt": ""}
      ],
      [
        {"type": "image", "src": "assets/images/backgammon-table/06-vue-pied.jpg", "largeur": 1600, "hauteur": 900, "alt": ""},
        {"type": "image", "src": "assets/images/backgammon-table/07-vue-plateau.jpg", "largeur": 1600, "hauteur": 900, "alt": ""}
      ]
    ]
  },
  {
    "id": "place-boivin",
    "titre": "Place Boivin",
    "section": "design",
    "date": "04/2024",
    "texte": [
      "Ce projet est une proposition fictive pour le réaménagement de la place Boivin à Saint-Étienne. L'objectif était d'identifier ce qui manquait à cet espace public et d'accentuer ses qualités existantes pour le rendre plus attractif.",
      "Pour répondre à ces objectifs, j'ai imaginé l'extension du parc actuel en y ajoutant davantage de végétation. J'ai également conçu du mobilier urbain inspiré par l'église située en face de la place — un édifice que les habitants surnomment “l'église Chamallow”, en référence aux pierres qui la composent et dont les formes se sont adoucies au fil du temps sous l'effet de l'érosion, afin de montrer, aux non-habitants du quartier, un bout de l’histoire des habitants du quartier."
    ],
    "texte_en": [
      "This project is a fictional proposal for the redevelopment of Place Boivin in Saint-Étienne. The goal was to identify what this public space was missing and to emphasise its existing qualities to make it more attractive.",
      "To meet these goals, I imagined extending the current park by adding more greenery. I also designed street furniture inspired by the church facing the square — a building that locals nickname “the Marshmallow Church”, after the stones it is made of, whose shapes have softened over time through erosion — in order to show people from outside the neighbourhood a piece of its residents’ history."
    ],
    "medias": [
      [
        {"type": "image", "src": "assets/images/place-boivin/01-plan-de-travail-1.jpg", "largeur": 1600, "hauteur": 1200, "alt": ""}
      ],
      [
        {"type": "image", "src": "assets/images/place-boivin/02-1.jpg", "largeur": 1600, "hauteur": 970, "alt": ""},
        {"type": "image", "src": "assets/images/place-boivin/03-2.jpg", "largeur": 1600, "hauteur": 970, "alt": ""},
        {"type": "image", "src": "assets/images/place-boivin/04-3.jpg", "largeur": 1600, "hauteur": 970, "alt": ""}
      ],
      [
        {"type": "image", "src": "assets/images/place-boivin/05-plan-boivin-page-0001.jpg", "largeur": 1283, "hauteur": 1080, "alt": ""},
        {"type": "image", "src": "assets/images/place-boivin/06-plan-boivin-page-0002.jpg", "largeur": 1283, "hauteur": 1080, "alt": ""}
      ],
      [
        {"type": "image", "src": "assets/images/place-boivin/07-pxl-20250531-1523012552.jpg", "largeur": 1440, "hauteur": 1080, "alt": ""},
        {"type": "image", "src": "assets/images/place-boivin/08-pxl-20250531-1525520932-2.jpg", "largeur": 1440, "hauteur": 1080, "alt": ""}
      ]
    ]
  },
  {
    "id": "objet-porte",
    "titre": "Objet porté",
    "titre_en": "Worn Object",
    "section": "design",
    "date": "12/2023",
    "texte": [
      "Ce projet était un travail en duo dans lequel nous devions créer un moyen de transporter l'objet précieux d'une personne. L'objet de ma partenaire était un bol chantant tibétain, qu'elle utilise régulièrement pour la méditation et pour se recentrer sur soi.",
      "J'ai conçu un harnais qui permet de transporter le bol en gardant les mains libres, en le positionnant près du cœur pour faciliter son utilisation tout en permettant le mouvement."
    ],
    "texte_en": [
      "This project was a duo assignment in which we had to create a way of carrying a person’s precious object. My partner’s object was a Tibetan singing bowl, which she uses regularly for meditation and to re-centre herself.",
      "I designed a harness that carries the bowl hands-free, placing it close to the heart to make it easy to use while still allowing movement."
    ],
    "medias": [
      [
        {"type": "image", "src": "assets/images/objet-porte/02-l1170451.jpg", "largeur": 1600, "hauteur": 1200, "alt": ""},
        {"type": "image", "src": "assets/images/objet-porte/01-untitled.jpg", "largeur": 1358, "hauteur": 1920, "alt": ""}
      ],
      [
        {"type": "image", "src": "assets/images/objet-porte/04-l1170455.jpg", "largeur": 1600, "hauteur": 1200, "alt": ""},
        {"type": "image", "src": "assets/images/objet-porte/05-l11704565.jpg", "largeur": 1600, "hauteur": 1200, "alt": ""},
        {"type": "image", "src": "assets/images/objet-porte/03-l1170456.jpg", "largeur": 1600, "hauteur": 1200, "alt": ""}
      ]
    ]
  },
  {
    "id": "flaneries",
    "titre": "Flâneries",
    "section": "design",
    "date": "05/2025",
    "texte": [
      "Ce projet a été créé pour la Biennale Design de Saint-Étienne et explore notre manière de consommer le divertissement, avec l'objectif de revenir à une expérience plus simple et centrée sur l'utilisateur.",
      "Le projet prend la forme d'une application permettant aux utilisateurs de construire leur propre univers grâce à l'IA, suite à des réflexions sur l’impact énergétique des LLM. Je l’ai entièrement programmée pour fonctionner localement, montrant également une approche à ces interrogations.",
      "L'idée était d'utiliser une technologie émergente, telle que l'intelligence artificielle, pour créer une nouvelle forme de divertissement où le spectateur devient l'auteur de ses propres histoires.",
      "Je pense que l'IA sera massivement utilisée pour produire de grandes quantités de contenus, pas toujours bénéfiques. C’est pourquoi je me suis concentré sur une utilisation plus réfléchie et centrée sur l'humain."
    ],
    "texte_en": [
      "This project was created for the Saint-Étienne Design Biennale and explores the way we consume entertainment, with the aim of returning to a simpler, user-centred experience.",
      "The project takes the form of an application that lets users build their own world using AI, following reflections on the energy impact of LLMs. I programmed it entirely to run locally, which also shows one possible answer to these questions.",
      "The idea was to use an emerging technology such as artificial intelligence to create a new form of entertainment in which the viewer becomes the author of their own stories.",
      "I believe AI will be used massively to produce large amounts of content, not always beneficial. That is why I focused on a more thoughtful, human-centred use."
    ],
    "medias": [
      [
        {"type": "youtube", "id": "xZg19ozHAMA"}
      ],
      [
        {"type": "image", "src": "assets/images/flaneries/01-video-demo-flaneries-1-00-06.jpg", "largeur": 1600, "hauteur": 900, "alt": ""},
        {"type": "image", "src": "assets/images/flaneries/02-video-demo-flaneries-1-00-50.jpg", "largeur": 1600, "hauteur": 900, "alt": ""}
      ],
      [
        {"type": "image", "src": "assets/images/flaneries/03-video-demo-flaneries-1-01-12.jpg", "largeur": 1600, "hauteur": 900, "alt": ""},
        {"type": "image", "src": "assets/images/flaneries/04-timeline-1-00-27.jpg", "largeur": 1600, "hauteur": 900, "alt": ""}
      ]
    ]
  },
  {
    "id": "eremia",
    "titre": "Eremia",
    "section": "3dart",
    "date": "01/2025",
    "texte": [
      "Eremia est une expérience interactive développée dans le cadre d'un projet explorant l'ornement. J'ai choisi d'aborder ce sujet comme un moyen de transformer notre perception, particulièrement en relation avec un sujet qui me touche personnellement : l'anxiété.",
      "Ce projet examine la manière dont l'anxiété est vécue, ce que l'on ressent lors d'une attaque de panique, et pourquoi cela peut être difficile à comprendre pour ceux qui ne l'ont jamais traversé. Avec Eremia, mon objectif était de créer un espace qui aide à rendre ces sensations plus compréhensibles, en montrant comment un changement de perspective peut aider à mieux y faire face.",
      "L'intention est à la fois pédagogique et sensible : rendre perceptible une expérience intérieure et invisible, et aider ceux qui ne sont pas familiers avec l'anxiété à saisir ce qu'elle représente réellement."
    ],
    "texte_en": [
      "Eremia is an interactive experience developed as part of a project exploring ornament. I chose to approach this subject as a way of transforming our perception, particularly in relation to a subject that affects me personally: anxiety.",
      "This project examines how anxiety is experienced, what it feels like to have a panic attack, and why it can be hard to understand for those who have never been through one. With Eremia, my aim was to create a space that helps make these sensations more understandable, by showing how a change of perspective can help us cope with them better.",
      "The intention is both educational and sensitive: to make an inner, invisible experience perceptible, and to help those unfamiliar with anxiety grasp what it really means."
    ],
    "medias": [
      [
        {"type": "youtube", "id": "NUvw2IQfot4"}
      ],
      [
        {"type": "image", "src": "assets/images/eremia/03-0282.jpg", "largeur": 1600, "hauteur": 900, "alt": ""},
        {"type": "image", "src": "assets/images/eremia/04-0108.jpg", "largeur": 1600, "hauteur": 900, "alt": ""},
        {"type": "image", "src": "assets/images/eremia/05-rendu-2.jpg", "largeur": 1600, "hauteur": 900, "alt": ""}
      ],
      [
        {"type": "image", "src": "assets/images/eremia/01-0003.jpg", "largeur": 1600, "hauteur": 900, "alt": ""},
        {"type": "image", "src": "assets/images/eremia/02-0418.jpg", "largeur": 1600, "hauteur": 900, "alt": ""}
      ],
      [
        {"type": "image", "src": "assets/images/eremia/06-asset.jpg", "largeur": 1500, "hauteur": 2495, "alt": ""},
        {"type": "image", "src": "assets/images/eremia/07-pxl-20250605-111806236.jpg", "largeur": 1464, "hauteur": 1952, "alt": ""}
      ]
    ]
  },
  {
    "id": "nos-morceaux",
    "titre": "Nos morceaux",
    "section": "scenography",
    "date": "01/2026",
    "texte": [
      "Nos morceaux est une pièce immersive réalisée en 3 jours pendant un workshop, où deux personnages se rencontrent et se lient par le vêtement.",
      "Par la main de l’autre, le tissu grandit, la robe s’éparpille.<br> Leurs identités se tissent et se mélangent avec la matière. <br> Les morceaux se connectent et interagissent en liant les corps."
    ],
    "texte_en": [
      "Nos morceaux (“Our Pieces”) is an immersive piece made in 3 days during a workshop, in which two characters meet and become bound together through clothing.",
      "Through the other’s hand, the fabric grows, the dress scatters.<br> Their identities weave together and blend with the material.<br> The pieces connect and interact, binding the bodies together."
    ],
    "medias": [
      [
        {"type": "youtube", "id": "AlvzLEokJZo"}
      ],
      [
        {"type": "image", "src": "assets/images/nos-morceaux/01-jour.jpg", "largeur": 1440, "hauteur": 1920, "alt": ""},
        {"type": "image", "src": "assets/images/nos-morceaux/02-noir.jpg", "largeur": 1440, "hauteur": 1920, "alt": ""}
      ],
      [
        {"type": "image", "src": "assets/images/nos-morceaux/03-fond.jpg", "largeur": 1600, "hauteur": 1200, "alt": ""},
        {"type": "image", "src": "assets/images/nos-morceaux/04-essai.jpg", "largeur": 1440, "hauteur": 1920, "alt": ""}
      ],
      [
        {"type": "image", "src": "assets/images/nos-morceaux/05-escabeau.jpg", "largeur": 1440, "hauteur": 1920, "alt": ""},
        {"type": "image", "src": "assets/images/nos-morceaux/06-install.jpg", "largeur": 1440, "hauteur": 1920, "alt": ""}
      ]
    ]
  },
  {
    "id": "mapping-poolroom",
    "titre": "Mapping Poolroom",
    "section": "3dart",
    "date": "07/2024",
    "texte": [
      "Ces vidéos sont une série d'animations créées pour le mapping d'un événement <a href=\"#ozone\">Ozone</a>.",
      "Je me suis inspiré des <i>Backrooms</i>, une légende d'Internet décrivant des espaces infinis et surréels organisés en différents niveaux, chacun ayant sa propre atmosphère.",
      "Pour ce projet, je me suis concentré sur le niveau connu sous le nom de <i>Poolrooms</i>, en concevant plusieurs environnements au sein de cet univers : un musée, une tour, une piscine, un couloir et un grand espace ouvert."
    ],
    "texte_en": [
      "These videos are a series of animations created for the projection mapping of an <a href=\"#ozone\">Ozone</a> event.",
      "I was inspired by the <i>Backrooms</i>, an Internet legend describing infinite, surreal spaces organised into different levels, each with its own atmosphere.",
      "For this project, I focused on the level known as the <i>Poolrooms</i>, designing several environments within this universe: a museum, a tower, a swimming pool, a corridor and a large open space."
    ],
    "medias": [
      [
        {"type": "youtube", "id": "EHoeJGahS6s"}
      ],
      [
        {"type": "image", "src": "assets/images/mapping-poolroom/01-muse-1.jpg", "largeur": 1600, "hauteur": 900, "alt": ""},
        {"type": "image", "src": "assets/images/mapping-poolroom/02-muse-2.jpg", "largeur": 1600, "hauteur": 900, "alt": ""}
      ],
      [
        {"type": "image", "src": "assets/images/mapping-poolroom/03-piscine-1.jpg", "largeur": 1600, "hauteur": 900, "alt": ""},
        {"type": "image", "src": "assets/images/mapping-poolroom/04-piscine-2.jpg", "largeur": 1600, "hauteur": 900, "alt": ""}
      ],
      [
        {"type": "image", "src": "assets/images/mapping-poolroom/05-vue.jpg", "largeur": 1600, "hauteur": 900, "alt": ""},
        {"type": "image", "src": "assets/images/mapping-poolroom/06-vue2.jpg", "largeur": 1600, "hauteur": 900, "alt": ""}
      ],
      [
        {"type": "image", "src": "assets/images/mapping-poolroom/07-couloir.jpg", "largeur": 1600, "hauteur": 900, "alt": ""},
        {"type": "image", "src": "assets/images/mapping-poolroom/08-tube-2.jpg", "largeur": 1600, "hauteur": 900, "alt": ""}
      ]
    ]
  },
  {
    "id": "lumineux",
    "titre": "Lumineux",
    "section": "3dart",
    "date": "05/2025",
    "texte": [
      "Lumineux est un projet d'affiche conçu pour sensibiliser à la phobie d'impulsion, cette peur de donner trop d'importance à des pensées intrusives.",
      "À travers ce projet, j'ai voulu explorer la composition d'image et expérimenter la manière de raconter une histoire complète au sein d'une seule illustration. Mon travail étant habituellement très narratif, cette affiche est devenue un moyen de condenser tout un univers dans un format visuel unique.",
      "J'ai créé un univers avec son propre environnement et son propre peuple, les Lumineux, en suivant un personnage principal qui apparaît à différents endroits et à différents moments sur l'affiche, formant ainsi un récit fragmenté dans différentes temporalités mais un même espace."
    ],
    "texte_en": [
      "Lumineux (“the Luminous Ones”) is a poster project designed to raise awareness of impulse phobia, the fear of giving too much importance to intrusive thoughts.",
      "Through this project, I wanted to explore image composition and experiment with telling a complete story within a single illustration. As my work is usually very narrative, this poster became a way of condensing a whole world into a single visual format.",
      "I created a world with its own environment and its own people, the Lumineux, following a main character who appears in different places and at different moments on the poster, forming a fragmented narrative across different timeframes but within a single space."
    ],
    "medias": [
      [
        {"type": "image", "src": "assets/images/lumineux/01-fichier-d-assemblage.jpg", "largeur": 1260, "hauteur": 1920, "alt": ""},
        {"type": "image", "src": "assets/images/lumineux/06-img-20250407-155538.jpg", "largeur": 1265, "hauteur": 1920, "alt": ""}
      ],
      [
        {"type": "image", "src": "assets/images/lumineux/02-rendu-1.jpg", "largeur": 1600, "hauteur": 1132, "alt": ""},
        {"type": "image", "src": "assets/images/lumineux/03-rendu-4.jpg", "largeur": 1600, "hauteur": 1132, "alt": ""},
        {"type": "image", "src": "assets/images/lumineux/04-rendu-8.jpg", "largeur": 1600, "hauteur": 1132, "alt": ""}
      ],
      [
        {"type": "image", "src": "assets/images/lumineux/05-arbre-3.webp", "largeur": 1358, "hauteur": 1920, "alt": ""},
        {"type": "image", "src": "assets/images/lumineux/07-rendu0001.webp", "largeur": 1358, "hauteur": 1920, "alt": ""},
        {"type": "image", "src": "assets/images/lumineux/08-untitled-2.webp", "largeur": 1358, "hauteur": 1920, "alt": ""},
        {"type": "image", "src": "assets/images/lumineux/09-lampe-4.webp", "largeur": 1600, "hauteur": 1132, "alt": ""}
      ]
    ]
  },
  {
    "id": "macula",
    "titre": "Macula",
    "section": "scenography",
    "date": "04/2025",
    "texte": [
      "Cette exposition est organisée par <b>Process</b>, une association engagée dans la promotion de la création numérique dans l’art contemporain dont j’étais co-président, et <b>Rukast</b>, une association dans le soutien et la valorisation de la création de bijoux et d’objet porté. Elle rassemble des oeuvres d'étudiants artistes et designers, autour du bijou et de la création numérique.",
      "Les pièces exposées explorent les notions d'identité et d'extensions de soi, interprétées à travers une diversité de formes, de matériaux et de pratiques.",
      "L'exposition souligne l'intérêt des créateurs pour la manière dont ils se représentent en tant qu'individus, artistes, designers, sonoristes ou vidéastes et, plus largement, en tant que praticiens de la création. Elle témoigne de leur engagement envers les modes d'expression actuels et de leur contribution à la culture créative française contemporaine."
    ],
    "texte_en": [
      "This exhibition is organised by <b>Process</b>, an association dedicated to promoting digital creation in contemporary art, of which I was co-president, and <b>Rukast</b>, an association that supports and promotes jewellery and wearable object design. It brings together works by student artists and designers, centred on jewellery and digital creation.",
      "The pieces on display explore notions of identity and extensions of the self, interpreted through a variety of forms, materials and practices.",
      "The exhibition highlights the creators’ interest in how they represent themselves as individuals, artists, designers, sound artists or video artists and, more broadly, as creative practitioners. It reflects their commitment to today’s modes of expression and their contribution to contemporary French creative culture."
    ],
    "medias": [
      [
        {"type": "image", "src": "assets/images/macula/07-7.jpg", "largeur": 1600, "hauteur": 1068, "alt": ""},
        {"type": "image", "src": "assets/images/macula/01-1.jpg", "largeur": 1600, "hauteur": 1068, "alt": ""}
      ],
      [
        {"type": "image", "src": "assets/images/macula/08-8.jpg", "largeur": 1600, "hauteur": 1068, "alt": ""},
        {"type": "image", "src": "assets/images/macula/02-2.jpg", "largeur": 1600, "hauteur": 1068, "alt": ""},
        {"type": "image", "src": "assets/images/macula/06-6.jpg", "largeur": 1600, "hauteur": 1068, "alt": ""}
      ],
      [
        {"type": "image", "src": "assets/images/macula/05-5.jpg", "largeur": 1600, "hauteur": 1068, "alt": ""},
        {"type": "image", "src": "assets/images/macula/04-4.jpg", "largeur": 1600, "hauteur": 1068, "alt": ""},
        {"type": "image", "src": "assets/images/macula/03-3.jpg", "largeur": 1600, "hauteur": 1068, "alt": ""}
      ]
    ]
  },
  {
    "id": "light_experience",
    "titre": "light_experience",
    "section": "scenography",
    "date": "01/2026",
    "texte": [
      "Ce projet est une expérimentation que j’ai réalisée en souhaitant découvrir de nouvelles pratiques.",
      "Il se concentre sur la relation entre le corps et l'espace, et sur les manières dont cette interaction peut être traduite en sons et en lumières.",
      "Pour y parvenir, j'ai développé un programme qui contrôle l'éclairage via DMX en collectant des données basées sur la position du performeur dans l'espace. Ces données pilotent également un synthétiseur modulaire.",
      "En conséquence, la performeuse est capable de créer une composition audiovisuelle en temps réel, en ajustant ses mouvements et sa chorégraphie en réponse à l'environnement sonore en constante évolution."
    ],
    "texte_en": [
      "This project is an experiment I carried out with the aim of discovering new practices.",
      "It focuses on the relationship between the body and space, and on the ways in which this interaction can be translated into sound and light.",
      "To achieve this, I developed a program that controls the lighting via DMX by collecting data based on the performer’s position in space. This data also drives a modular synthesiser.",
      "As a result, the performer can create an audiovisual composition in real time, adjusting their movements and choreography in response to a constantly evolving soundscape."
    ],
    "medias": [
      [
        {"type": "youtube", "id": "JqAz4QtOeKs"}
      ],
      [
        {"type": "image", "src": "assets/images/light-experience/03-1.jpg", "largeur": 1600, "hauteur": 900, "alt": ""},
        {"type": "image", "src": "assets/images/light-experience/04-2.jpg", "largeur": 1600, "hauteur": 900, "alt": ""}
      ],
      [
        {"type": "video", "src": "assets/videos/light-experience-performeur.mp4", "largeur": 796, "hauteur": 592, "legende": "Script for rigged performer and collect data"},
        {"type": "image", "src": "assets/images/light-experience/02-capture-dcran-2026-01-27-003119.jpg", "largeur": 1237, "hauteur": 944, "alt": "", "legende": "Synth made in VCV rack and OSC"}
      ]
    ]
  },
  {
    "id": "matiere-grise",
    "titre": "Matière grise",
    "section": "scenography",
    "date": "04/2023",
    "texte": [
      "Matière grise est une exposition que j’ai organisée en première année de ma licence avec l’association Au détour.",
      "L'objectif de cette exposition était de présenter les pratiques individuelles des étudiants de première année et d'inviter les étudiants des années supérieures ainsi que le corps technique et enseignant de l’école à venir nous rencontrer et découvrir notre travail.",
      "Ce projet me tient particulièrement à coeur, car l'exposition est, depuis, devenue un événement annuel."
    ],
    "texte_en": [
      "Matière grise (“Grey Matter”) is an exhibition I organised in the first year of my bachelor’s degree with the student association Au détour.",
      "The aim of this exhibition was to present the individual practices of first-year students and to invite students from the higher years, as well as the school’s technical and teaching staff, to come and meet us and discover our work.",
      "This project is particularly close to my heart, as the exhibition has since become an annual event."
    ],
    "medias": [
      [
        {"type": "image", "src": "assets/images/matiere-grise/03-7.jpg", "largeur": 1600, "hauteur": 1060, "alt": ""}
      ],
      [
        {"type": "image", "src": "assets/images/matiere-grise/07-4.jpg", "largeur": 1272, "hauteur": 1920, "alt": ""},
        {"type": "image", "src": "assets/images/matiere-grise/06-3.jpg", "largeur": 1272, "hauteur": 1920, "alt": ""}
      ],
      [
        {"type": "image", "src": "assets/images/matiere-grise/02-8.jpg", "largeur": 1600, "hauteur": 1060, "alt": ""},
        {"type": "image", "src": "assets/images/matiere-grise/04-1.jpg", "largeur": 1600, "hauteur": 1060, "alt": ""},
        {"type": "image", "src": "assets/images/matiere-grise/05-2.jpg", "largeur": 1600, "hauteur": 1060, "alt": ""}
      ],
      [
        {"type": "image", "src": "assets/images/matiere-grise/01-9.jpg", "largeur": 1272, "hauteur": 1920, "alt": ""},
        {"type": "image", "src": "assets/images/matiere-grise/08-5.jpg", "largeur": 1272, "hauteur": 1920, "alt": ""}
      ]
    ]
  },
  {
    "id": "ozone",
    "titre": "Ozone",
    "section": "scenography",
    "date": "09/2024",
    "texte": [
      "Ozone est un projet de scénographie immersive conçu dans le cadre d'une soirée d'intégration, autour du thème des nuages. Il s'agissait de notre premier projet avec un budget dédié, ce qui nous a permis de concevoir et de produire plusieurs installations scénographiques.",
      "Celles-ci comprenaient des structures de nuages lumineux contrôlées en temps réel et synchronisées avec la musique, des installations de néons positionnées derrière les DJs, ainsi qu'un dispositif de vidéo-mapping présentant le travail de plusieurs étudiants artistes, dont le mien (que vous pouvez trouver <a href=\"#mapping-poolroom\">ici</a>).",
      "L'espace était également structuré par des éléments scénographiques complémentaires, tels que des coussins et des installations de fils de laine en toile d’araignée contribuant à la création d'une atmosphère cohérente et immersive, pensée comme une expérience visuelle globale."
    ],
    "texte_en": [
      "Ozone is an immersive scenography project designed for a student welcome party, around the theme of clouds. It was our first project with a dedicated budget, which allowed us to design and produce several scenographic installations.",
      "These included luminous cloud structures controlled in real time and synchronised with the music, neon installations placed behind the DJs, and a video mapping set-up showcasing the work of several student artists, including my own (which you can find <a href=\"#mapping-poolroom\">here</a>).",
      "The space was also shaped by complementary scenographic elements, such as cushions and spider-web installations made of woollen yarn, contributing to a coherent, immersive atmosphere conceived as an overall visual experience."
    ],
    "medias": [
      [
        {"type": "image", "src": "assets/images/ozone/01-oeil.jpg", "largeur": 1600, "hauteur": 1070, "alt": ""},
        {"type": "image", "src": "assets/images/ozone/03-scene-verte.jpg", "largeur": 1600, "hauteur": 1070, "alt": ""}
      ],
      [
        {"type": "image", "src": "assets/images/ozone/09-scene-bleu.jpg", "largeur": 1600, "hauteur": 1070, "alt": ""},
        {"type": "image", "src": "assets/images/ozone/02-scene-rouge.jpg", "largeur": 1600, "hauteur": 1070, "alt": ""},
        {"type": "image", "src": "assets/images/ozone/08-fabric-nuage.jpg", "largeur": 1600, "hauteur": 1200, "alt": ""}
      ],
      [
        {"type": "image", "src": "assets/images/ozone/05-light.jpg", "largeur": 1440, "hauteur": 1920, "alt": ""},
        {"type": "image", "src": "assets/images/ozone/04-toile.jpg", "largeur": 1440, "hauteur": 1920, "alt": ""},
        {"type": "image", "src": "assets/images/ozone/06-install.jpg", "largeur": 1440, "hauteur": 1920, "alt": ""},
        {"type": "image", "src": "assets/images/ozone/07-coussin.jpg", "largeur": 1440, "hauteur": 1920, "alt": ""}
      ],
      [
        {"type": "youtube", "id": "N6rEbq5PD48"}
      ]
    ]
  },
  {
    "id": "safe-place",
    "titre": "Safe place",
    "section": "3dart",
    "date": "12/2023",
    "texte": [
      "Dans le cadre d'un projet personnel et pour développer ma pratique de la 3D, j'ai créé une animation inspirée de divers éléments architecturaux et visuels de la ville de Saint-Étienne, intégrés dans un univers doux et apaisant.",
      "Pour renforcer cette idée de safe place (lieu sûr), je me suis filmé en train de réaliser des actions simples et j'ai intégré ces vidéos dans ma scène 3D. Ce choix découle d'une expérience personnelle : lors de périodes de forte anxiété, le fait de revenir à de petits gestes quotidiens m'a aidé à mieux comprendre et traiter mes émotions."
    ],
    "texte_en": [
      "As a personal project, and to develop my 3D practice, I created an animation inspired by various architectural and visual elements of the city of Saint-Étienne, brought together in a soft, soothing world.",
      "To reinforce this idea of a safe place, I filmed myself performing simple actions and integrated these videos into my 3D scene. This choice comes from a personal experience: during periods of intense anxiety, returning to small everyday gestures helped me better understand and process my emotions."
    ],
    "medias": [
      [
        {"type": "image", "src": "assets/images/safe-place/08-rendu-1.jpg", "largeur": 1536, "hauteur": 1920, "alt": ""}
      ],
      [
        {"type": "image", "src": "assets/images/safe-place/03-c0017-frame-at-0m31s.jpg", "largeur": 1600, "hauteur": 900, "alt": ""},
        {"type": "image", "src": "assets/images/safe-place/01-capture-d-cran-2024-02-20-114319.jpg", "largeur": 1600, "hauteur": 900, "alt": ""},
        {"type": "image", "src": "assets/images/safe-place/06-capture-d-cran-2024-02-20-114034.jpg", "largeur": 1360, "hauteur": 816, "alt": ""}
      ],
      [
        {"type": "image", "src": "assets/images/safe-place/02-capture-d-cran-2024-02-20-114151.jpg", "largeur": 1600, "hauteur": 900, "alt": ""},
        {"type": "image", "src": "assets/images/safe-place/07-c0008-frame-at-0m4s.jpg", "largeur": 1600, "hauteur": 900, "alt": ""},
        {"type": "image", "src": "assets/images/safe-place/04-c0011-frame-at-1m15s.jpg", "largeur": 1600, "hauteur": 900, "alt": ""},
        {"type": "image", "src": "assets/images/safe-place/05-c0010-frame-at-0m8s.jpg", "largeur": 1600, "hauteur": 900, "alt": ""}
      ]
    ]
  },
  {
    "id": "expo-anachronique",
    "titre": "Expo Anachronique",
    "section": "3dart",
    "date": "05/2023",
    "texte": [
      "L’Exposition Anachronique est un projet de réalité virtuelle créé pour l’exposition <a href=\"#matiere-grise\">Matière Grise</a>, un événement présentant les diverses pratiques des étudiants de première année.",
      "Le projet part d’un constat : de nombreuses technologies que nous considérons comme contemporaines sont en réalité plus anciennes qu'on ne le pense. La consultation d'archives historiques peut ainsi susciter un sentiment de surprise dû à leur caractère anachronique.",
      "J'ai conçu une série d'objets abordant des problématiques actuelles, ainsi que des objets véritablement contemporains, mais présentés comme s'ils avaient été créés au XIXe siècle. L'ensemble de la collection était exposé dans une exposition immersive en réalité virtuelle que les visiteurs pouvaient explorer."
    ],
    "texte_en": [
      "The Expo Anachronique (“Anachronistic Exhibition”) is a virtual reality project created for the <a href=\"#matiere-grise\">Matière Grise</a> exhibition, an event showcasing the various practices of first-year students.",
      "The project starts from an observation: many technologies we consider contemporary are actually older than we think. Looking through historical archives can therefore spark a sense of surprise at how anachronistic they seem.",
      "I designed a series of objects addressing current issues, as well as genuinely contemporary objects, presented as if they had been created in the 19th century. The whole collection was displayed in an immersive virtual reality exhibition that visitors could explore."
    ],
    "medias": [
      [
        {"type": "image", "src": "assets/images/expo-anachronique/01-expo-1.jpg", "largeur": 1600, "hauteur": 900, "alt": ""},
        {"type": "image", "src": "assets/images/expo-anachronique/02-expo-2.jpg", "largeur": 1600, "hauteur": 900, "alt": ""}
      ],
      [
        {"type": "image", "src": "assets/images/expo-anachronique/03-affiche-1.jpg", "largeur": 1358, "hauteur": 1920, "alt": ""},
        {"type": "image", "src": "assets/images/expo-anachronique/04-affiche-2.jpg", "largeur": 1358, "hauteur": 1920, "alt": ""},
        {"type": "image", "src": "assets/images/expo-anachronique/05-affiche-3.jpg", "largeur": 1358, "hauteur": 1920, "alt": ""}
      ],
      [
        {"type": "image", "src": "assets/images/expo-anachronique/06-affiche-4.jpg", "largeur": 1358, "hauteur": 1920, "alt": ""},
        {"type": "image", "src": "assets/images/expo-anachronique/07-affiche-5.jpg", "largeur": 1358, "hauteur": 1920, "alt": ""},
        {"type": "image", "src": "assets/images/expo-anachronique/08-affiche-6.jpg", "largeur": 1358, "hauteur": 1920, "alt": ""}
      ]
    ]
  }
];
