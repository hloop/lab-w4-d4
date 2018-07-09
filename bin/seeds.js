const mongoose = require('mongoose');
const Plant    = require('../models/plant');

const dbName = 'newlab-w4-d4';
mongoose.connect(`mongodb://localhost/${dbName}`);

const plants = [
  {
    species : 'Vanda aliceae',
    family: 'Orchidaceae',
    subclass: 'Aeridinae',
    image: '../images/vandaAliceae.jpg',
  },
  {
    species : 'Asplenium nidus',
    family: 'Aspleniaceae',
    subclass: 'Pteridopsida',
    image: '../images/aspleniumNidus.jpg',

  },
  {
    species : 'Polytrichum juniperinum',
    family: 'Polytrichaceae',
    subclass: 'Polytrichidae',
    image: '../images/polytrichumJuniperinum.jpg'
  },
  {
    species : 'Ravenea rivularis',
    family: 'Arecaceae',
    subclass: 'Commelinids',
    image: '../images/RaveneaRivularis.jpg'
  },
  {
    species : 'Cordyline fruticosa',
    family: 'Asparagaceae',
    subclass: 'Asparagales',
    image: '../images/cordylineFruticosa.jpg'
  },
  {
    species : 'Echinopsis pachanoi',
    family: 'Cactaceae',
    subclass: 'Caryophyllales',
    image: '../images/echinopsisPachanoi.jpg'
  }
]

Plant.create(plants)
.then((result)=>{
    console.log(`created ${result.length} plants`);
    mongoose.disconnect();
})
.catch((err)=>{
    console.log(err)
})