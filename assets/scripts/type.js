console.log('test');
new TypeIt('#replaceStrings', {
  strings: [
    "Hiya! My name is Wendy.",
    "I am a...",
    "Cognitive Scientist.",
    "Amateur Pianist.",
    "Cat Lover.",
    "Motorcyclist.",
    "Plant Mum.",
    "Tamale eater.",
    "Caffeine drinker.",
    "UX Afficionado.",
    "Hiya! My name is Wendy."
  ],
  speed: 60,
  breakLines: false,
  waitUntilVisible: true
}).go();
