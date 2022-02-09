import supertest from "supertest"
import app from '../index'

const request = supertest(app)
describe("test endpoint responses", () => {
    it("gets the api endpoint", async () => {
        const respons = await request.get("/api/images?filename=madra&width=500&height=500")
        expect(respons.status).toBe(200)
    })
})