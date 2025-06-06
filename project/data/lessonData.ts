export const lessonData = [
  {
    id: '1',
    title: 'Basic Greetings',
    description: 'Learn common Māori greetings and introductions',
    level: 'Beginner',
    progress: 0.4,
    image: 'https://images.pexels.com/photos/5605061/pexels-photo-5605061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '2',
    title: 'Family Members',
    description: 'Learn words for family relationships in Māori culture',
    level: 'Beginner',
    progress: 0,
    image: 'https://images.pexels.com/photos/7879942/pexels-photo-7879942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '3',
    title: 'Basic Phrases',
    description: 'Everyday useful phrases in Māori language',
    level: 'Beginner',
    progress: 0,
    image: 'https://images.pexels.com/photos/14035619/pexels-photo-14035619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '4',
    title: 'Numbers 1-10',
    description: 'Learn to count in Māori',
    level: 'Beginner',
    progress: 0,
    image: 'https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '5',
    title: 'Māori Customs',
    description: 'Understanding Pōwhiri (welcome ceremony) and other customs',
    level: 'Cultural',
    progress: 0,
    image: 'https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '6',
    title: 'Weather and Seasons',
    description: 'Vocabulary for describing weather and seasons',
    level: 'Intermediate',
    progress: 0,
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '7',
    title: 'Food and Cooking',
    description: 'Food vocabulary and traditional Māori cuisine',
    level: 'Intermediate',
    progress: 0,
    image: 'https://images.pexels.com/photos/5677332/pexels-photo-5677332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export const lessonContents = [
  {
    id: '1',
    title: 'Basic Greetings',
    description: 'Learn common Māori greetings and introductions',
    level: 'Beginner',
    bannerImage: 'https://images.pexels.com/photos/5605061/pexels-photo-5605061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    contents: [
      {
        type: 'word',
        text: 'Kia ora',
        translation: 'Hello / Thank you / Welcome',
        audio: 'kia_ora.mp3',
        image: 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        type: 'word',
        text: 'Mōrena',
        translation: 'Good morning',
        audio: 'morena.mp3',
        image: 'https://images.pexels.com/photos/1370740/pexels-photo-1370740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        type: 'phrase',
        text: 'Tēnā koe',
        translation: 'Hello (to one person)',
        example: 'Tēnā koe, James! (Hello, James!)',
        audio: 'tena_koe.mp3',
        image: 'https://images.pexels.com/photos/6474538/pexels-photo-6474538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        type: 'quiz',
        question: 'What does "Mōrena" mean?',
        options: ['Good night', 'Thanks', 'Good morning'],
        answer: 'Good morning',
      },
      {
        type: 'phrase',
        text: 'Ka kite anō',
        translation: 'See you again',
        audio: 'ka_kite_ano.mp3',
        image: 'https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        type: 'quiz',
        question: 'Which phrase means "See you again"?',
        options: ['Kia ora', 'Ka kite anō', 'Tēnā koe'],
        answer: 'Ka kite anō',
      },
    ],
  },
  {
    id: '2',
    title: 'Family Members',
    description: 'Learn words for family relationships',
    level: 'Beginner',
    bannerImage: 'https://images.pexels.com/photos/7879942/pexels-photo-7879942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    contents: [
      {
        type: 'word',
        text: 'Whānau',
        translation: 'Family, extended family',
        audio: 'whanau.mp3',
        image: 'https://images.pexels.com/photos/5560485/pexels-photo-5560485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        type: 'word',
        text: 'Māmā',
        translation: 'Mother, mom',
        audio: 'mama.mp3',
        image: 'https://images.pexels.com/photos/1132141/pexels-photo-1132141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        type: 'word',
        text: 'Pāpā',
        translation: 'Father, dad',
        audio: 'papa.mp3',
        image: 'https://images.pexels.com/photos/6153361/pexels-photo-6153361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        type: 'quiz',
        question: 'What does "Whānau" mean?',
        options: ['Mother', 'Father', 'Family'],
        answer: 'Family',
      },
    ],
  },
  {
    id: '3',
    title: 'Basic Phrases',
    description: 'Everyday useful phrases',
    level: 'Beginner',
    bannerImage: 'https://images.pexels.com/photos/14035619/pexels-photo-14035619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    contents: [
      {
        type: 'phrase',
        text: 'Ko [name] ahau',
        translation: 'I am [name]',
        example: 'Ko Hana ahau. (I am Hana)',
        audio: 'ko_name_ahau.mp3',
        image: 'https://images.pexels.com/photos/5256142/pexels-photo-5256142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        type: 'phrase',
        text: 'Kei te pēhea koe?',
        translation: 'How are you?',
        audio: 'kei_te_pehea_koe.mp3',
        image: 'https://images.pexels.com/photos/6146929/pexels-photo-6146929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        type: 'phrase',
        text: 'Kei te pai',
        translation: 'I\'m good/fine',
        audio: 'kei_te_pai.mp3',
        image: 'https://images.pexels.com/photos/6146931/pexels-photo-6146931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        type: 'quiz',
        question: 'What does "Kei te pēhea koe?" mean?',
        options: ['What is your name?', 'How are you?', 'Where are you from?'],
        answer: 'How are you?',
      },
    ],
  },
];