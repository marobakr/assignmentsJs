const game = {
  title: 'YS',
  developer: 'Falcom',
  releases: {
    'Oath In Felghana': ['USA', 'Japan'],
    'Ark Of Napishtim': {
      US: '20 USD',
      JAP: '10 USD',
    },
    Origin: '30 USD',
  },
};

let { title: t } = game;
console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

let { developer: d } = game;
console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

let [o] = Object.keys(game.releases);
let {
  releases: {
    'Oath In Felghana': [u, j],
  },
} = game;
console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

let [,a] = Object.keys(game.releases);
console.log(`Although I Love ${a}`);
// Although I Love Ark Of Napishtim
let {
  releases: {
    'Ark Of Napishtim': { US: u_price },
  },
} = game;
console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD
let {
  releases: {
    'Ark Of Napishtim': { JAP: j_price },
  },
} = game;
console.log(`${a} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD
let {
  releases: { Origin: or },
} = game;
console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD
