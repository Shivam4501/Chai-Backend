import { asyncHandler } from "../utils/asyncHndler";

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json9({
        message: "Hitman Bhai..."
    })
} )


export { registerUser }