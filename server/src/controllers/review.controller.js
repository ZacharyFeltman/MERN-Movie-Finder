import responseHandler from "../handlers/response.handler.js";
import reviewModels from "../models/review.models.js";

const create = async (req, res) => {
    try {
        const { movieId } = req.params

        const review = new reviewModels({
            user: req.user.id,
            movieId,
            ...req.body
        })

        await review.save()

        responseHandler.created(res, {
            ...review._doc,
            id: review.id,
            user: req.user
        });
    } catch {
        responseHandler.error(res)
    }
};

const remove = async (req, res) => {
    try {
        const { reviewId } = req.params
        
        const review = await reviewModels.findOne({
            _id: reviewId,
            user: req.user.id
        })

        if (!review) return responseHandler.notfound(res);

        await review.remove();

        responseHandler.ok(res);
    } catch {
        responseHandler.error(res)
    }
};

const getReviewOfUser = async (req, res) => {
    try {
        const review = await reviewModels.find({
            user: req.user.id
        }).sort("-createdAt");

        responseHandler.ok(res, reviews)
    } catch {
        responseHandler.error(res)
    }
};

export default { create, remove, getReviewOfUser };