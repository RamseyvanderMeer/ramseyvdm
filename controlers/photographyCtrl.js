const photographySchema = require('../models/photographyModel');


//get all users
exports.getPhotography = async (req, res) => {
    const photography = await photographySchema.find();
    try {
        res.json(photography);
    } catch (error) {
        res.status(500).json({ msg: 'server problems' })
    }
}

//add user
exports.addPhotography = async (req, res) => {
    const { title, product_id, name, description, images } = req.body;

    //first way async await
    try {
        const newPhotography = new photographySchema({
            title,
            product_id,
            name,
            description,
            images
        })
        await newPhotography.save();
        res.json(newPhotography);
    } catch (error) {
        res.status(500).json({ msg: 'server problems' })
    }

    //second way promises
    // const newAbout = new aboutSchema({
    //     about: about
    // })
    // newAbout.save()
    // .then(about=>res.json(`the article was sent`))
    // .catch(err=>res.status(500).json(`error:${err}`))

}


//get user by id
exports.getPhotographyID = async (req, res) => {
    //first way
    try {
        const photography = await photographySchema.findById(req.params.id)
        res.json(photography)
    } catch (error) {
        res.status(500).json({ msg: 'server problems' })
    }

    //second way
    // aboutSchema.findById(req.params.id)
    // .then(about=>res.json(about))
    // .catch(err=>res.status(400).json({msg:err}))
}


//update user by id
exports.updatePhotography = async (req, res) => {
    try {
        const { title, product_id, name, description, images } = req.body;
        const newPhotography = await photographySchema.findByIdAndUpdate(req.params.id, {
            title,
            product_id,
            name,
            description,
            images
        });

        let results = newPhotography.save()
        await results
        res.json({ msg: 'Items Updated' })
    } catch (error) {
        res.status(500).json({ msg: 'server problems' })
    }
}


//delete user by id
exports.delPhotography = async (req, res) => {
    try {
        const photography = await photographySchema.findByIdAndDelete(req.params.id);

        photography;

        res.json({msg:"Item deleted"})
    } catch (error) {
        res.status(500).json({ msg: 'server problems' })
    }
}