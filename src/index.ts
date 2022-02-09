import express from "express"
import imageResize from "./imageResize"
const app = express()

app.get("/api/images", async (req, res):Promise<void> => {

    const filename: string | any = req.query.filename
    const width: number = Number(req.query.width) || 300
    const height: number = Number(req.query.height) || 300
    try {

       const image = await imageResize(filename, width, height) 
        res.sendFile(`${__dirname}/${image}`)

    } catch (error) {
        
        res.status(404).json({message:"No Such Image with this ID"})
    }
        
    
})

app.listen(3000, () => console.log("Server is Running..."))

export default app