import imageResize from "../imageResize"

it("should get the image path", async () => {
    const image = await imageResize("naruto", 500, 500) 
    expect(image).toEqual("public/naruto-500x500.jpg")
})