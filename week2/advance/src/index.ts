import express, { NextFunction, Request, response, Response } from "express";

const app = express();
const PORT = 3000; 

app.use(express.json()); 

app.use("/api", require("./api")); 

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("마! 이게 서버다!");
});

app.listen(PORT, () => {
  console.log(`
        #############################################
            🛡️ Server listening on port: ${PORT} 🛡️
        #############################################
    `);
}); 

