exports.getProducts=(req,res,next) =>{
    res.status(200).json({
        success:true,
        messaje:"En esta ruta ud va a  ver todos los productos"

    })
}