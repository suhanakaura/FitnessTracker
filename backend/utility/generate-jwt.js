import jwt from "jsonwebtoken"
const generatejwt=(userid,res)=>{
    const token = jwt.sign({id:userid},process.env.JWT_SECRET_KEY,{
        expiresIn:'1d'
    })
    console.log(token)
    res.cookie("jwt",token,{
        maxAge:1*24*60*60*1000,
        httpOnly:true,
        sameSite:"strict"
    })
}
export default generatejwt;