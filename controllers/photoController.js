import Photo from "../models/photoModel.js"

const createPhoto = async (req,res) =>{
try {
    const photo =await Photo.create(req.body);
    res.status(201).json({
        succeded: true,
        photo,
    }); 
} catch (error) {
    res.status(500).json({
        succeded: false,
        error,
    })
}

}

const getAllPhotos = async (req,res)=>{
    try {
        const photos = await Photo.find({})
        res.status(200).render("photos",{
            photos,//sayfa içeriğinde burası sayedisnde gelen data kullanılacak
            link:"photos",
        })
    } catch (error) {
        res.status(500).json({
            succceded:false,
            error,
        });
    } 
}

const getAPhoto = async (req,res)=>{
    try {
        const photo = await Photo.findById({ _id :  req.params.id})
        res.status(200).render("photo",{
            photo,
            link:"photos",
        })
    } catch (error) {
        res.status(500).json({
            succceded:false,
            error,
        });
    }
}

export {createPhoto,getAllPhotos,getAPhoto};