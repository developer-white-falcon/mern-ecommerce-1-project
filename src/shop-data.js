
import brownbrim from '../../assets/brown-brim.webp';
import bluebeanie from '../../assets/blue-beanie.webp';
import browncowboy from '../../assets/brown-cowboy.webp';
import greybrim from '../../assets/grey-brim.webp';
import greenbeanie from '../../assets/green-beanie.webp';
import palmtreecap from '../../assets/palm-tree-cap.webp';
import redbeanie from '../../assets/red-beanie.webp';
import wolfcap from '../../assets/wolf-cap.webp';
import bluesnapback from '../../assets/blue-snapback.webp';
import adidasnmd from '../../assets/adidas-nmd.webp';
import yeezy from '../../assets/yeezy.webp';
import blackconverse from '../../assets/black-converse.webp';
import whitenikehightops from '../../assets/white-nike-high-tops.webp';
import nikesred from '../../assets/nikes-red.webp';
import nikebrown from '../../assets/nike-brown.webp';
import nikefunky from '../../assets/nike-funky.webp';
import timberlands from '../../assets/timberlands.webp';
import blackshearling from '../../assets/black-shearling.webp';
import bluejeanjacket from '../../assets/blue-jean-jacket.webp';
import greyjeanjacket from '../../assets/grey-jean-jacket.webp';
import brownshearling from '../../assets/brown-shearling.webp';
import browntrench from '../../assets/brown-trench.webp';
import bluetank from '../../assets/blue-tank.webp';
import floralblouse from '../../assets/floral-blouse.webp';
import floralskirt from '../../assets/floral-skirt.webp';
import redpolkadotdress from '../../assets/red-polka-dot-dress.webp';
import stripedsweater from '../../assets/striped-sweater.webp';
import yellowtracksuit from '../../assets/yellow-track-suit.webp';
import whitevest from '../../assets/white-vest.webp';
import camovest from '../../assets/camo-vest.webp';
import floralshirt from '../../assets/floral-shirt.webp';
import longsleeve from '../../assets/long-sleeve.webp';
import pinkshirt from '../../assets/pink-shirt.webp';
import rollupjeanshirt from '../../assets/roll-up-jean-shirt.webp';
import polkadotshirt from '../../assets/polka-dot-shirt.webp';


const SHOP_DATA = [
  {
    title: 'Hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: brownbrim,
        price: 25,
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: bluebeanie,
        price: 18,
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: browncowboy,
        price: 35,
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: greybrim,
        price: 25,
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: greenbeanie,
        price: 18,
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: palmtreecap,
        price: 14,
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: redbeanie,
        price: 18,
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: wolfcap,
        price: 14,
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: bluesnapback,
        price: 16,
      },
    ],
  },
  {
    title: 'Sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: adidasnmd,
        price: 220,
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: yeezy,
        price: 280,
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: blackconverse,
        price: 110,
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: whitenikehightops,
        price: 160,
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: nikesred,
        price: 160,
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: nikebrown,
        price: 160,
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: nikefunky,
        price: 190,
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: timberlands,
        price: 200,
      },
    ],
  },
  {
    title: 'Jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: blackshearling,
        price: 125,
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: bluejeanjacket,
        price: 90,
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: greyjeanjacket,
        price: 90,
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: brownshearling,
        price: 165,
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: browntrench,
        price: 185,
      },
    ],
  },
  {
    title: 'Womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: bluetank,
        price: 25,
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: floralblouse,
        price: 20,
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: floralskirt,
        price: 80,
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: redpolkadotdress,
        price: 80,
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: stripedsweater,
        price: 45,
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: yellowtracksuit,
        price: 135,
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: whitevest,
        price: 20,
      },
    ],
  },
  {
    title: 'Mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: camovest,
        price: 325,
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: floralshirt,
        price: 20,
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: longsleeve,
        price: 25,
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: pinkshirt,
        price: 25,
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: rollupjeanshirt,
        price: 40,
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: polkadotshirt,
        price: 25,
      },
    ],
  },
];

export default SHOP_DATA;
