const { Router } = require("express");
const driversRouter = require("./driversRoute")
const teamsRouter = require("./teamsRoute")
const mainRouter = Router();

mainRouter.use("/drivers",driversRouter)
mainRouter.use("/teams",teamsRouter)


module.exports = mainRouter;
