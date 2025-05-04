// import express from "express";
// import { PrismaClient as PrimaryClient } from "../generated/primary";
// import { PrismaClient as ReplicaClient } from "../generated/replica";

// const app = express();
// const db = new PrimaryClient(); // for writes
// const dbRead = new ReplicaClient(); // for reads

// app.use(express.json());

// app.post("/messages", async (req, res) => {
//   const { content } = req.body;
//   const message = await db.message.create({ data: { content } });
//   res.json(message);
// });

// app.get("/messages", async (_, res) => {
//   const messages = await dbRead.message.findMany();
//   res.json(messages);
// });

// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });
