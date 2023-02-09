import Favourite from "../models/favourite.js";

export const getFavourite = async (req, res) => {
    try {
        const favorite = await Favourite.findOne({
            where: {
                userId: req.params.userId,
                movieId: req.params.movieId,
            }
        });
        
        if (favorite) {
            res.send(favorite);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const getAllFavourite = async (req, res) => {
    try {
        const favorite = await Favourite.findAll({
            where: {
              userId: req.params.userId,
            }
          });
        
        if (favorite) {
            res.send(favorite);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const addFavourite = async (req, res) => {
    try {
        const favorite = await Favourite.create(req.body);
        console.log(req.body)
        res.json({
            "message": "Favourite Movie Created",
            data: favorite
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const deleteFavourite = async (req, res) => {
    try {
        await Favourite.destroy({
            where: {
                userId: req.params.userId,
                movieId: req.params.movieId,
                
            }
        });
        res.json({
            "message": "Favorite Movie Deleted"
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}