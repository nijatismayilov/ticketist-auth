import request from "supertest";

import { app } from "../../app";

it("responds with details about the current user", async () => {
  const signUpResponse = await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "1234",
    })
    .expect(201);

  const cookie = signUpResponse.get("Set-Cookie");

  const currentUserResponse = await request(app)
    .get("/api/users/currentuser")
    .set("Cookie", cookie)
    .send()
    .expect(200);

  expect(currentUserResponse.body.currentUser.email).toEqual("test@test.com");
});
