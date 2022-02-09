import { Image } from "image-js"

export default function imageResize(filename:string, width:number, height: number): Promise<string> {


    return new Promise (async (resolve, reject) => { 
        try {
            let image = await Image.load(`${__dirname}/images/${filename}.jpg`);

            let resImage = image.resize({ width: width, height: height })

            await resImage.save(`${__dirname}/public/${filename}-${width}x${height}.jpg`);

            resolve(`public/${filename}-${width}x${height}.jpg`)

        } catch (error) {

            reject(error) 

        }

    })
}