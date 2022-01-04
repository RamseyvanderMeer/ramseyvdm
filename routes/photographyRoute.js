const router = require('express').Router();
const {getPhotography, getPhotographyID, updatePhotography, addPhotography, delPhotography} = require('../controlers/photographyCtrl');

//get photography
router.get('/fetchphotography', getPhotography)

//add photography
router.post('/fetchphotography', addPhotography)

//get photography by id
router.get('/fetchphotography/:id', getPhotographyID)

//update photography by id
router.put('/fetchphotography/update/:id', updatePhotography)

//delete photography by id
router.delete('/fetchphotography/:id', delPhotography)


module.exports = router;