const {Router} = require("express");
const {getAllTeams} = require("../handlers/teamsHandlers")
const teamsRouter = Router();

teamsRouter.get("/",getAllTeams)

module.exports = teamsRouter


