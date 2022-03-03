export default function handler(req, res){
    res.status(200).json({
        name: 'teste API',
        metodo: req.method
    })
}