import express from "express"
import { Image } from "image-js"

const app = express()

app.get("/api/images", async (req, res) => {

    const filename = req.query.filename
    const width: number = Number(req.query.width) || 300
    const height: number = Number(req.query.height) || 300
    try {
        let image = await Image.load(`${__dirname}/images/${filename}.jpg`);
        let resImage = image.resize({ width: width, height: height })
        await resImage.save(`${__dirname}/public/${filename}-${width}x${height}.jpg`);
        res.sendFile(`${__dirname}/public/${filename}-${width}x${height}.jpg`)
    } catch (error) {
        
        res.json({message:"No Such Image with this ID"})
    }
        
    
})

app.listen(5000, () => void console.log("Server is Running..."))