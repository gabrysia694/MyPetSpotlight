document.addEventListener("DOMContentLoaded", function () {
  const pets = [
    {
      imgURL: "./assets/images/sofi.jpg",
      altName: "Sofi the cute dog",
      name: "Sofi",
      type: "Dog",
      age: "2 years",
      personalities: ["Naughty", "Protective", "Lazy"],
      toy: "Slippers",
      ownerURL: "https://github.com/iceTmZz",
      owner: "Aayush",
    },
    {
      imgURL: "./assets/images/luna.jpg",
      altName: "Luna the Cat",
      name: "Luna",
      type: "Cat",
      age: "4 years",
      personalities: ["Curious", "Adoring", "Fast"],
      toy: "Mouse",
      ownerURL: "https://github.com/gabrysia694",
      owner: "Gabriela",
    },
    {
        imgURL: './assets/images/pusho_op.jpeg',
        altName: 'Pusho the Cat',
        name: 'Pusho',
        type: 'Cat',
        age: '4 years',
        personalities:  ['Fighter','Playful','Friendly'],
        toy: 'Laser Light',
        ownerURL: 'https://github.com/Gallantfarhan',
        owner:  'Farhan'
    },
    {
        imgURL: './assets/images/gruba.png',
        altName: 'Gruba the Cat',
        name: 'Gruba',
        type: 'Cat',
        age: '3 years',
        personalities:  ['Lazy','Sleepy','Vocal'],
        toy: 'Shoe Lace',
        ownerURL: 'https://github.com/gabrysia694',
        owner:  'Gabriela'
    },
    {
        imgURL: './assets/images/August.jpg',
        altName: 'August the Cat',
        name: 'August',
        type: 'Cat',
        age: '2 years',
        personalities:  ['Playful','Adaptable','Quirky'],
        toy: 'Foil Ball',
        ownerURL: 'https://github.com/marehori',
        owner:  'Ivan'
    },
    {
        imgURL: './assets/images/Cooper.jpg',
        altName: 'Cooper the Dog',
        name: 'Cooper',
        type: 'Dog',
        age: '5 years',
        personalities:  ['Loyal','Protective','Friendly'],
        toy: 'Chew Rope',
        ownerURL: 'https://github.com/Sranjan0208',
        owner:  'Sujal'
    },
    {
        imgURL: './assets/images/Goldfish.jpg',
        altName: 'Bubble the Fish',
        name: 'Bubble',
        type: 'Goldfish',
        age: '2 years',
        personalities:  ['Social','Playful','Adaptable','Lazy'],
        toy: 'Ping Pong Ball',
        ownerURL: 'https://github.com/Vishal-Parasram',
        owner:  'Vishal'
    },
    {
        imgURL: './assets/images/Sheru.jpg',
        altName: 'Sheru the Dog',
        name: 'Sheru',
        type: 'Dog',
        age: '3 years',
        personalities:  ['Social','Active','Protective'],
        toy: 'Shoes',
        ownerURL: 'https://github.com/Pragyan14',
        owner:  'Pragyan'
    },
    {
        imgURL: './assets/images/littlemike.jpg',
        altName: 'Picture of Little Mike',
        name: 'Little Mike',
        type: 'Cat',
        age: '1 years',
        personalities:  ['Crazy','Active'],
        toy: 'Me',
        ownerURL: 'https://github.com/ValerioPinsone',
        owner:  'Valerio'
    },
    {
        imgURL: './assets/images/whiskeys1.jpg',
        altName: 'Whiskey the Dog',
        name: 'Whiskey',
        type: 'Dog',
        age: '2 years',
        personalities:  ['Energetic','Enthusiastic'],
        toy: 'Plushy Carrot',
        ownerURL: 'https://github.com/Yuva0',
        owner:  'Tanuj'
    },
    {
        imgURL: './assets/images/shadowCandid.jpg',
        altName: 'Shadow the Cat',
        name: 'Shadow',
        type: 'Cat',
        age: '1 and half years',
        personalities:  ['Energetic','Curious','Playful'],
        toy: 'Feather Wand',
        ownerURL: 'https://github.com/harisdev-netizen',
        owner:  'Haris'
    },
    {
        imgURL: './assets/images/hamster.jpg',
        altName: 'Amber the Hamster',
        name: 'Amber',
        type: 'Hamster',
        age: '2 years',
        personalities:  ['Joyful','Playful','Freaky'],
        toy: 'Willow Balls',
        ownerURL: 'https://github.com/SANDEEP-NAYAK',
        owner:  'Sandeep'
    },
    {
        imgURL: './assets/images/maximus.jpg',
        altName: 'Maximus the Cat',
        name: 'Maximus',
        type: 'Cat',
        age: '1.5 years',
        personalities:  ['Sassy','Hella Smart','Moody'],
        toy: 'Carrom',
        ownerURL: 'https://github.com/Abhinav2712',
        owner:  'Abhinav'
    },
    {
        imgURL: './assets/images/max.jpg',
        altName: 'Max the Dog',
        name: 'Max',
        type: 'Dog',
        age: '3 years',
        personalities:  ['Friendly','Energetic'],
        toy: 'Chew Rope',
        ownerURL: 'https://github.com/AnkitAnandMastery17',
        owner:  'Ankit'
    },
    {
        imgURL: './assets/images/oreo.jpg',
        altName: 'Oreo the Cat',
        name: 'Oreo',
        type: 'Cat',
        age: '8 Months',
        personalities:  ['Curious','Lazy','Sleepy'],
        toy: 'Legs',
        ownerURL: 'https://github.com/Zaris47',
        owner:  'Akhil'
    },
    {
        imgURL: './assets/images/borf.jpg',
        altName: 'Borf the Dog',
        name: 'Borf',
        type: 'Dog',
        age: '10 years',
        personalities:  ['lazy','Friendly','Fatty'],
        toy: 'Squeaky Gloves',
        ownerURL: 'https://github.com/IanLuong',
        owner:  'Ian'
    },
    {
        imgURL: './assets/images/pippa.jpg',
        altName: 'King Charles Cavalier',
        name: 'Pippa',
        type: 'Dog',
        age: '5 years',
        personalities:  ['Sleepy','Hungry','Barky'],
        toy: 'Ball',
        ownerURL: 'https://github.com/KalebArmburst',
        owner:  'Kaleb'
    },
    {
        imgURL: './assets/images/Grim.jpg',
        altName: 'Grim the Dog',
        name: 'Grim',
        type: 'Dog',
        age: '4 years',
        personalities:  ['Friendly','Energetic','Intelligent'],
        toy: 'Frisbee',
        ownerURL: 'https://github.com/KyloRen04',
        owner:  'Akshat'
    },
    {
        imgURL: './assets/images/eren.jpg',
        altName: 'Eren The Dog',
        name: 'Eren',
        type: 'Dog',
        age: '6 years',
        personalities:  ['Clingy','Brave','Mean'],
        toy: 'Socks',
        ownerURL: 'https://github.com/Raulj123',
        owner:  'Raul'
    },
    {
        imgURL: './assets/images/maxwell.jpeg',
        altName: 'My Lovely Cat Maxwell',
        name: 'Maxwell',
        type: 'Cat',
        age: 'One years',
        personalities:  ['Playful','Sneaky','Lovely','Food Lover'],
        toy: 'Stuffed Animal',
        ownerURL: 'https://github.com/isurumaldeniya',
        owner:  'Isuru'
    },
    {
        imgURL: './assets/images/max-2.jpg',
        altName: 'Max the Dog',
        name: 'Max',
        type: 'Dog',
        age: '12 years',
        personalities:  ['Hungry','Lazy','Friendly'],
        toy: 'Stuffed Animals',
        ownerURL: 'https://github.com/josh76543210',
        owner:  'Josh'
    },
    {
        imgURL: './assets/images/Snowey.jpg',
        altName: 'Cute Cat',
        name: 'Snowey',
        type: 'Cat',
        age: '2 years',
        personalities:  ['Energetic','Fearless','Playful','Smart','Moody'],
        toy: 'Wool',
        ownerURL: 'https://github.com/Pyth0nHere',
        owner:  'Piethon'
    },
    {
        imgURL: './assets/images/feijao.jpg',
        altName: 'Feijao, King of gordos',
        name: 'Feijão',
        type: 'Cat',
        age: '10 years',
        personalities:  ['Talkative','Lazy','Clingy','Hungry'],
        toy: 'Strings',
        ownerURL: 'https://github.com/paternostrox',
        owner:  'Pedro'
    },
    {
        imgURL: './assets/images/lilly.jpg',
        altName: 'Lilly - The Cat',
        name: 'Lilly',
        type: 'Cat',
        age: '2 years',
        personalities:  ['Sleepy','Funny','Curious'],
        toy: 'Teddy',
        ownerURL: 'https://github.com/SoundaryaKoutharapu',
        owner:  'Soundarya'
    },
    {
        imgURL: './assets/images/peeru.jpg',
        altName: 'Peeru - The Dog',
        name: 'Peeru',
        type: 'Dog',
        age: '1 years',
        personalities:  ['Cuteness','Funny'],
        toy: 'Ball',
        ownerURL: 'https://github.com/roy2pushkar',
        owner:  'Pushkar'
    },
    {
        imgURL: './assets/images/shiro.jpg',
        altName: 'Shiro the Dog',
        name: 'Shiro',
        type: 'Dog',
        age: '5 years',
        personalities:  ['Sleepy','Clingy','Curious'],
        toy: 'Ball',
        ownerURL: 'https://github.com/Souvik2376',
        owner:  'Souvik'
    },
    {
        imgURL: './assets/images/Chota.jpg',
        altName: 'Chota the Cat',
        name: 'Chota',
        type: 'Cat',
        age: '3.5 years',
        personalities:  ['Sleepy','Cute','Playful'],
        toy: 'Wool',
        ownerURL: 'https://github.com/Ishita-Ghosh-25',
        owner:  'Ishita'
    },
    {
        imgURL: './assets/images/bhondu.jpg',
        altName: "That's my Dog Bhondu",
        name: 'Bhondu',
        type: 'Dog',
        age: '2 years',
        personalities:  ['Cute','Lovely'],
        toy: 'My Shoes',
        ownerURL: 'https://github.com/helloakash1701',
        owner:  'Akash'
    },
    {
        imgURL: './assets/images/ManiAndBoka.jpeg',
        altName: 'Mani & Boka',
        name: 'Mani And Boka',
        type: 'Cat',
        age: '2 years',
        personalities:  ['Adorable','Affectionate','Nataki'],
        toy: 'Mouse',
        ownerURL: 'https://github.com/AniketNS',
        owner:  'AniketNS'
    },
    {
        imgURL: './assets/images/bella.jpeg',
        altName: 'Bella is a bad Dog :D',
        name: 'Bella',
        type: 'Dog',
        age: '3 years',
        personalities:  ['Shy','Licky'],
        toy: 'Sticks',
        ownerURL: 'https://github.com/gozie11',
        owner:  'Gozie'
    },
    {
        imgURL: './assets/images/mangoandbella.jpeg',
        altName: 'Sweetest Mango Ever',
        name: 'Mango',
        type: 'Dog',
        age: '3 years',
        personalities:  ['Lively','Friendly'],
        toy: 'Sticks',
        ownerURL: 'https://github.com/gozie11',
        owner:  'Gozie'
    },
    {
        imgURL: './assets/images/My_dear_Snowflake.jpg',
        altName: 'Dove',
        name: 'Snowflake',
        type: 'Dove',
        age: '2 years',
        personalities:  ['Gentle','Curious'],
        toy: 'Mini Bird Swing',
        ownerURL: 'https://github.com/SyedTathahir',
        owner:  'SyedTathahir'
    },
    {
        imgURL: './assets/images/robin.jpg',
        altName: 'Robin the Cat',
        name: 'Robin',
        type: 'Cat',
        age: '2 years',
        personalities:  ['Quick','Playful','Lazy'],
        toy: 'Mouse',
        ownerURL: 'https://github.com/Helixjoe',
        owner:  'Joel'
    },
    {
        imgURL: './assets/images/oscar.jpg',
        altName: 'Oscar the Dog',
        name: 'Oscar',
        type: 'Dog',
        age: '3 years',
        personalities:  ['Ferocious','Intelligent'],
        toy: 'Frisbee',
        ownerURL: 'https://github.com/RaghavGoel01',
        owner:  'Raghav'
    },
    {
        imgURL: './assets/images/mittu_cat.jpg',
        altName: 'Mittu Pic',
        name: 'Mittu',
        type: 'Cat',
        age: '2 years',
        personalities:  ['sweet','cute'],
        toy: 'ball',
        ownerURL: 'https://github.com/AnandRP2030',
        owner:  'Anand'
    },
    {
        imgURL: './assets/images/tom_cat.jpg',
        altName: 'Tom',
        name: 'Tom',
        type: 'Cat',
        age: '1 year',
        personalities:  ['sleepy','hungry'],
        toy: 'hands',
        ownerURL: 'https://github.com/Ananya-Jha1208',
        owner:  'Ananya'
    },
    {
      imgURL: "./assets/images/ash.jpg",
      altName: "Ash Cutie",
      name: "Ash",
      type: "Dog",
      age: "3 years",
      personalities: ["Loyal", "Friendly", "Foody"],
      toy: "Frisbee",
      ownerURL: "https://github.com/vishalsingh2972",
      owner: "Vishal",
    },
    {
      imgURL: "./assets/images/vee.jpg",
      altName: "Vee Dog",
      name: "Vee",
      type: "Dog",
      age: "2 years",
      personalities: ["Sleepy", "Clingy", "Curious"],
      toy: "Sticks",
      ownerURL: "https://github.com/vanshb03",
      owner: "Vansh",
    },
    {
      imgURL: "./assets/images/Cesar.jpg",
      altName: "Cesar the Dog",
      name: "Cesar",
      type: "Dog",
      age: "1 year",
      personalities: ["Playful", "Adoring", "mischievous"],
      toy: "Dog bone",
      ownerURL: "https://github.com/RuchirDixit",
      owner: "Ruchir",
    },
    {
      imgURL: "./assets/images/roxy.jpg",
      altName: "Roxy",
      name: "Roxy",
      type: "Dog",
      age: "1 year",
      personalities: ["Playful", "Adoring", "Hungry"],
      toy: "Sticks",
      ownerURL: "https://github.com/AswinSaj",
      owner: "Aswin",
    },
    {
      imgURL: "./assets/images/Kavin.jpg",
      altName: "Kavin",
      name: "Kavin",
      type: "Dog",
      age: "3 year",
      personalities: ["Playful", "Adoring", "Curious"],
      toy: "Ball",
      ownerURL: "https://github.com/venk404",
      owner: "Venkatesh",
    }

    // ADD YOUR PET HERE
  ];

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  shuffleArray(pets);

    const petCardTemplate = document.getElementById('pet-card-template').innerHTML;
    const compiledTemplate = Handlebars.compile(petCardTemplate);
  
    let petCardsHTML = '';
    pets.forEach(pet => {
      petCardsHTML += compiledTemplate(pet);
    });
  
    const petCardContainer = document.querySelector('#list');
    petCardContainer.innerHTML = petCardsHTML;
  });
