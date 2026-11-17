const request = require("supertest");
const app = require("../server/server");

describe("GET /foods", () => {
    test("returns all five foods as JSON", async () => {
        const response = await request(app).get("/foods");

        expect(response.status).toBe(200);
        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.body).toHaveLength(5);

        response.body.forEach((food) => {
            expect(food).toEqual({
                id: expect.any(Number),
                name: expect.any(String),
                price: expect.any(Number)
            });

            expect(food.price).toBeGreaterThan(0);
        });
    });
});

describe("Unknown routes", () => {
    test("returns a 404 error", async () => {
        const response = await request(app).get("/missing");

        expect(response.status).toBe(404);
        expect(response.body).toEqual({
            error: "Route not found"
        });
    });
});