import ratelimit from "../config/upstash.js";


const ratelimiter = async(req,res,next) =>{
    try{
        const {success} = await ratelimit.limit("my-rate-limit")

        if(!success) {
            return res.status(429).json({message:"rate limit exceeded"})
        }

        next();
    }catch(error){
        console.log("rate limit error");
        next(error)
    }
}

export default ratelimiter;