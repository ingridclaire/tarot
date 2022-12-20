export const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    console.log(array[i])
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    console.log('==================')
  }
  return array;
}

export const deck = [
  {
    category: 'Major Arcana',
    character: 'The Fool',
    image: 'fool.jpg',
    upright: ['new beginnings', 'innocence', 'adventure'],
    reversed: ['recklessness', 'fearlessness', 'risk']
  },
  {
    category: 'Major Arcana',
    character: 'The Magician',
    image: 'magician.jpg',
    upright: ['willpower', 'creation', 'manifestation'],
    reversed: ['manipulation', 'illusions', 'working against your own creativity', 'your ideas are "too scandalous"']
  },
  {
    category: 'Major Arcana',
    character: 'The High Priestess',
    image: 'highPriestess.jpg',
    upright: ['intuitive', 'unconscious', 'divine feminine', 'for witches burnt at the stake, she symbolized the prophecy of the return of the Holy Spirit (the female aspect of the Trinity)', 'a time for learning and listening to your intuition rather than prioritizing intellect'],
    reversed: ['repressed feelings', 'withdrawal', 'silence', 'attraction to inner life has become an addiction, removing your interest in ordinary life']
  },
  {
    category: 'Major Arcana',
    character: 'The Empress',
    image: 'empress.jpg',
    upright: ['femininity', 'nurturing', 'abundance', 'connect with creativity, sensuality', 'search for beauty and happiness'],
    reversed: ['dependence', 'smothering', 'emptiness', 'tremendous natural power to correct']
  },
  {
    category: 'Major Arcana',
    character: 'The Emporer',
    image: 'emporer.jpg',
    upright: ['authority', 'structure', 'father figure', 'acknowledge your potential for mastery', 'reinforce a sense of sovereignty with yourself'],
    reversed: ['excessive control', 'rigidity', 'domination', 'try to curb arrogance that could be limiting your point of view', 'remember the emperor is a servant to everyone in his realm']
  },
  {
    category: 'Major Arcana',
    character: 'The Hierophant',
    image: 'hierophant.jpg',
    upright: ['spiritual wisdom', 'conformity', 'tradition', 'morality', 'ethics', 'the one who passes on teachings', 'maintain conventional boundaries that are considered standard'],
    reversed: ['rebellion', 'subversiveness', 'freedom', 'personal beliefs', 'without steadying influence of tradition, there is no stable point from which you can rebel']
  },
  {
    category: 'Major Arcana',
    character: 'The Lovers',
    image: 'lovers.jpg',
    upright: ['love', 'partnerships', 'harmony', 'choices', 'major life-changes choices to make', 'facing a dilemma', 'do not automatically take the easy road'],
    reversed: ['disbalance', 'one-sidedness', 'disharmony', 'you may be going along with a divided situation because of a vested interest in opposition', 'own up to your own double standard', 'do not just go along to get along']
  },
  {
    category: 'Major Arcana',
    character: 'The Chariot',
    image: 'chariot.jpg',
    upright: ['direction', 'control', 'determination', 'success', 'action', 'now is the time to get what you want','overcoming obstacles to achieve your goals', 'triumphal feeling of freedom', 'sign of empowerment', 'congratulations for high achievement'],
    reversed: ['lack of control', 'opposition', 'lack of direction', 'self-discipline', 'you may have not yet chosen to move toward change', 'you hesitate when you know you need to move forward', 'nothing is actually holding you back', 'own your own inner resistance']
  },
  {
    category: 'Major Arcana',
    character: 'Strength',
    image: 'strength.jpg',
    upright: ['courage', 'compassion', 'focus', 'persuasion', 'influence', 'will and passion of instinctive nature does not need to be broken but rather refined and brought to consciousness', 'calm disruptive energies by harmonizing differences in the spirit of collective good will'],
    reversed: ['self-doubt', 'insecurity', 'weakness', 'low energy', 'raw emotion', 'you may have little power to affect behavior', 'an out of control, untamed force is loose', 'may be time to lay low and preserve yourself']
  },
  {
    category: 'Major Arcana',
    character: 'The Hermit',
    image: 'hermit.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Major Arcana',
    character: 'The Wheel of Fortune',
    image: 'wheelOfFortune.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Major Arcana',
    character: 'Justice',
    image: 'justice.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Major Arcana',
    character: 'The Hanged Man',
    image: 'hangedMan.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Major Arcana',
    character: 'Death',
    image: 'death.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Major Arcana',
    character: 'Temperance',
    image: 'temperance.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Major Arcana',
    character: 'The Devil',
    image: 'devil.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Major Arcana',
    character: 'The Tower',
    image: 'tower.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Major Arcana',
    character: 'The Star',
    image: 'star.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Major Arcana',
    character: 'The Moon',
    image: 'moon.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Major Arcana',
    character: 'The Sun',
    image: 'sun.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Major Arcana',
    character: 'The Judgement',
    image: 'judgement.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Major Arcana',
    character: 'The World',
    image: 'world.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Wands',
    character: 'Ace of Wands',
    image: 'aceWands.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Wands',
    character: 'Two of Wands',
    image: 'twoWands.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Wands',
    character: 'Three of Wands',
    image: 'threeWands.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Wands',
    character: 'Four of Wands',
    image: 'fourWands.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Wands',
    character: 'Five of Wands',
    image: 'fiveWands.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Wands',
    character: 'Six of Wands',
    image: 'sixWands.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Wands',
    character: 'Seven of Wands',
    image: 'sevenWands.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Wands',
    character: 'Eight of Wands',
    image: 'eightWands.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Wands',
    character: 'Nine of Wands',
    image: 'nineWands.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Wands',
    character: 'Ten of Wands',
    image: 'tenWands.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Wands',
    character: 'Page of Wands',
    image: 'pageWands.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Wands',
    character: 'Knight of Wands',
    image: 'knightWands.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Wands',
    character: 'Queen of Wands',
    image: 'queenWands.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Wands',
    character: 'King of Wands',
    image: 'kingWands.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Cups',
    character: 'Ace of Cups',
    image: 'aceCups.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Cups',
    character: 'Two of Cups',
    image: 'twoCups.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Cups',
    character: 'Three of Cups',
    image: 'threeCups.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Cups',
    character: 'Four of Cups',
    image: 'fourCups.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Cups',
    character: 'Five of Cups',
    image: 'fiveCups.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Cups',
    character: 'Six of Cups',
    image: 'sixCups.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Cups',
    character: 'Seven of Cups',
    image: 'sevenCups.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Cups',
    character: 'Eight of Cups',
    image: 'eightCups.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Cups',
    character: 'Nine of Cups',
    image: 'nineCups.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Cups',
    character: 'Ten of Cups',
    image: 'tenCups.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Cups',
    character: 'Page of Cups',
    image: 'pageCups.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Cups',
    character: 'Knight of Cups',
    image: 'knightCups.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Cups',
    character: 'Queen of Cups',
    image: 'queenCups.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Cups',
    character: 'King of Cups',
    image: 'kingCups.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Swords',
    character: 'Ace of Swords',
    image: 'aceSwords.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Swords',
    character: 'Two of Swords',
    image: 'twoSwords.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Swords',
    character: 'Three of Swords',
    image: 'threeSwords.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Swords',
    character: 'Four of Swords',
    image: 'fourSwords.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Swords',
    character: 'Five of Swords',
    image: 'fiveSwords.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Swords',
    character: 'Six of Swords',
    image: 'sixSwords.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Swords',
    character: 'Seven of Swords',
    image: 'sevenSwords.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Swords',
    character: 'Eight of Swords',
    image: 'eightSwords.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Swords',
    character: 'Nine of Swords',
    image: 'nineSwords.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Swords',
    character: 'Ten of Swords',
    image: 'tenSwords.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Swords',
    character: 'Page of Swords',
    image: 'pageSwords.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Swords',
    character: 'Knight of Swords',
    image: 'knightSwords.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Swords',
    character: 'Queen of Swords',
    image: 'queenSwords.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Swords',
    character: 'King of Swords',
    image: 'kingSwords.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Pentacles',
    character: 'Ace of Pentacles',
    image: 'acePentacles.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Pentacles',
    character: 'Two of Pentacles',
    image: 'twoPentacles.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Pentacles',
    character: 'Three of Pentacles',
    image: 'threePentacles.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Pentacles',
    character: 'Four of Pentacles',
    image: 'fourPentacles.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Pentacles',
    character: 'Five of Pentacles',
    image: 'fivePentacles.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Pentacles',
    character: 'Six of Pentacles',
    image: 'sixPentacles.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Pentacles',
    character: 'Seven of Pentacles',
    image: 'sevenPentacles.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Pentacles',
    character: 'Eight of Pentacles',
    image: 'eightPentacles.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Pentacles',
    character: 'Nine of Pentacles',
    image: 'ninePentacles.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Pentacles',
    character: 'Ten of Pentacles',
    image: 'tenPentacles.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Pentacles',
    character: 'Page of Pentacles',
    image: 'pagePentacles.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Pentacles',
    character: 'Knight of Pentacles',
    image: 'knightPentacles.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Pentacles',
    character: 'Queen of Pentacles',
    image: 'queenPentacles.jpg',
    upright: [],
    reversed: []
  },
  {
    category: 'Pentacles',
    character: 'King of Pentacles',
    image: 'kingPentacles.jpg',
    upright: [],
    reversed: []
  }
]