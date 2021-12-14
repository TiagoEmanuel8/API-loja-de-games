'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products',
    [{
      id: 1,
      name: 'Battlefield 2042',
      type: 'Xbox One | X|S',
      price: 210.5,
      url_image: 'http://localhost:3001/images/bf2042_xbox.jpg'
    }, {
      id: 2,
      name: 'Battlefield 2042',
      type: 'Playstation 4',
      price: 210.5,
      url_image: 'http://localhost:3001/images/bf2042_ps4.jpg'
    }, {
      id: 3,
      name: 'Battlefield 2042',
      type: 'Playstation 5',
      price: 210.5,
      url_image: 'http://localhost:3001/images/bf2042_ps5.jpg'
    }, {
      id: 4,
      name: 'Cyberpunk 2077',
      type: 'Xbox One | X|S',
      price: 70.5,
      url_image: 'http://localhost:3001/images/cyberpunk2077_xbox.jpg'
    }, {
      id: 5,
      name: 'Cyberpunk 2077',
      type: 'Playstation 4',
      price: 70.5,
      url_image: 'http://localhost:3001/images/cyberpunk2077_ps4.jpg'
    }, {
      id: 6,
      name: 'Cyberpunk 2077',
      type: 'Playstation 5',
      price: 70.5,
      url_image: 'http://localhost:3001/images/cyberpunk2077_ps5.jpg'
    }, {
      id: 7,
      name: 'Far Cry 6',
      type: 'Xbox One | X|S',
      price: 150.0,
      url_image: 'http://localhost:3001/images/far_cry6_xbox.jpg'
    }, {
      id: 8,
      name: 'Far Cry 6',
      type: 'Playstation 4',
      price: 150.0,
      url_image: 'http://localhost:3001/images/far_cry6_ps4.jpg'
    }, {
      id: 9,
      name: 'Far Cry 6',
      type: 'Playstation 5',
      price: 150.0,
      url_image: 'http://localhost:3001/images/far_cry6_ps5.jpg'
    },
    /*  {
      id: 10,
      name: 'Fifa 21',
      type: 'Xbox One | X|S',
      price: 129.9,
      url_image: 'http://localhost:3001/images/far_cry6_xbox.jpg'
    }, {
      id: 11,
      name: 'Fifa 21',
      type: 'Playstation 4',
      price: 129.9,
      url_image: 'http://localhost:3001/images/fifa21_ps4.jpg'
    }, {
      id: 12,
      name: 'Fifa 21',
      type: 'Playstation 5',
      price: 129.9,
      url_image: 'http://localhost:3001/images/fifa21_ps5.jpg'
    }, {
      id: 13,
      name: 'Fifa 21',
      type: 'Nintendo Switch',
      price: 129.9,
      url_image: 'http://localhost:3001/images/fifa21_switch.jpg'
    }, {
      id: 14,
      name: 'Fortnite The last laugh bundle',
      type: 'Xbox One | X|S',
      price: 150.9,
      url_image: 'http://localhost:3001/images/fortnite_xbox.jpg'
    }, {
      id: 15,
      name: 'Fortnite The last laugh bundle',
      type: 'Playstation 4',
      price: 150.9,
      url_image: 'http://localhost:3001/images/fortnite_ps4.jpg'
    }, {
      id: 16,
      name: 'Fortnite The last laugh bundle',
      type: 'Playstation 5',
      price: 150.9,
      url_image: 'http://localhost:3001/images/fortnite_ps5.jpg'
    }, {
      id: 17,
      name: 'Just Dance 22',
      type: 'Xbox One | X|S',
      price: 189.9,
      url_image: 'http://localhost:3001/images/just_dance_22_xbox.jpg'
    }, {
      id: 18,
      name: 'Just Dance 22',
      type: 'Playstation 4',
      price: 189.9,
      url_image: 'http://localhost:3001/images/just_dance_22_ps4.jpg'
    }, {
      id: 19,
      name: 'Just Dance 22',
      type: 'Playstation 5',
      price: 189.9,
      url_image: 'http://localhost:3001/images/just_dance_22_ps5.jpg'
    }, {
      id: 20,
      name: 'Just Dance 22',
      type: 'Nintendo Switch',
      price: 189.9,
      url_image: 'http://localhost:3001/images/just_dance_22_nintendo.jpg'
    }, {
      id: 21,
      name: 'Life Is Strange True Colors',
      type: 'Xbox One | X|S',
      price: 89.9,
      url_image: 'http://localhost:3001/images/lifestrange_xbox.jpg'
    }, {
      id: 22,
      name: 'Life Is Strange True Colors',
      type: 'Playstation 4',
      price: 89.9,
      url_image: 'http://localhost:3001/images/lifestrange_ps4.jpg'
    }, {
      id: 23,
      name: 'Life Is Strange True Colors',
      type: 'Playstation 5',
      price: 89.9,
      url_image: 'http://localhost:3001/images/lifestrange_ps5.jpg'
    }, {
      id: 24,
      name: 'Life Is Strange True Colors',
      type: 'Nintendo Switch',
      price: 89.9,
      url_image: 'http://localhost:3001/images/lifestrange_nintendo.jpg'
    }, {
      id: 25,
      name: 'Minecraft Dungeons Hero Edition',
      type: 'Xbox One | X|S',
      price: 69.9,
      url_image: 'http://localhost:3001/images/minecraft_xbox.jpeg'
    }, {
      id: 26,
      name: 'Minecraft Dungeons Hero Edition',
      type: 'Playstation 4',
      price: 69.9,
      url_image: 'http://localhost:3001/images/minecraft_ps4.jpg'
    }, {
      id: 27,
      name: 'Minecraft Dungeons Hero Edition',
      type: 'Playstation 5',
      price: 69.9,
      url_image: 'http://localhost:3001/images/minecraft_ps5.jpg'
    }, {
      id: 28,
      name: 'Minecraft Dungeons Hero Edition',
      type: 'Nintendo Switch',
      price: 69.9,
      url_image: 'http://localhost:3001/images/minecraft_nintendo.jpg'
    }, {
      id: 29,
      name: 'Nba2K22',
      type: 'Xbox One | X|S',
      price: 99.9,
      url_image: 'http://localhost:3001/images/nba2k22_xbox.jpg'
    }, {
      id: 30,
      name: 'Nba2K22',
      type: 'Playstation 4',
      price: 99.9,
      url_image: 'http://localhost:3001/images/nba2k22_ps4.jpg'
    }, {
      id: 31,
      name: 'Nba2K22',
      type: 'Playstation 5',
      price: 99.9,
      url_image: 'http://localhost:3001/images/nba2k22_ps5.jpg'
    }, {
      id: 32,
      name: 'Nba2K22',
      type: 'Nintendo Switch',
      price: 99.9,
      url_image: 'http://localhost:3001/images/nba2k22_nintendo.jpg'
    }, {
      id: 33,
      name: 'Overwatch Origins Edition',
      type: 'Xbox One | X|S',
      price: 89.9,
      url_image: 'http://localhost:3001/images/overwatch_xbox.jpg'
    }, {
      id: 34,
      name: 'Overwatch Origins Edition',
      type: 'Playstation 4',
      price: 89.9,
      url_image: 'http://localhost:3001/images/overwatch_ps4.jpg'
    }, {
      id: 35,
      name: 'Overwatch Origins Edition',
      type: 'Playstation 5',
      price: 89.9,
      url_image: 'http://localhost:3001/images/overwatch_ps5.jpg'
    }, {
      id: 36,
      name: 'Overwatch Origins Edition',
      type: 'Nintendo Switch',
      price: 89.9,
      url_image: 'http://localhost:3001/images/overwatch_nintendo.jpg'
    }, {
      id: 37,
      name: 'Rise of the Tomb Raider',
      type: 'Xbox One | X|S',
      price: 70.0,
      url_image: 'http://localhost:3001/images/rise_of_tomb_raider_xbox.jpg'
    }, {
      id: 38,
      name: 'Rise of the Tomb Raider',
      type: 'Playstation 4',
      price: 70.0,
      url_image: 'http://localhost:3001/images/rise_of_tomb_raider_ps4.jpg'
    }, {
      id: 39,
      name: 'Rise of the Tomb Raider',
      type: 'Playstation 5',
      price: 70.0,
      url_image: 'http://localhost:3001/images/rise_of_tomb_raider_ps5.jpg'
    }, {
      id: 40,
      name: 'Rise of the Tomb Raider',
      type: 'Nintendo Switch',
      price: 70.0,
      url_image: 'http://localhost:3001/images/rise_of_tomb_raider_nintendo.jpg'
    }, {
      id: 41,
      name: 'The Witcher 3',
      type: 'Xbox One | X|S',
      price: 60.0,
      url_image: 'http://localhost:3001/images/the_witcher_xbox.jpg'
    }, {
      id: 42,
      name: 'The Witcher 3',
      type: 'Playstation 4',
      price: 60.0,
      url_image: 'http://localhost:3001/images/the_witcher_ps4.jpg'
    }, {
      id: 43,
      name: 'The Witcher 3',
      type: 'Nintendo Switch',
      price: 60.0,
      url_image: 'http://localhost:3001/images/the_witcher_nintendo.jpg'
    } */
    ], {
      timestamps: false,
      tableName: 'products',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
