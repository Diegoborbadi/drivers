const {Router} = require("express");
const {getAllDrivers,getDriversDetailsById,postDriver,getDriversByName} = require("../handlers/driversHandlers")
const driversRouter = Router();

driversRouter.get("/",getAllDrivers)
driversRouter.get("/:id",getDriversDetailsById)
driversRouter.get("/drivers/name/",getDriversByName)
driversRouter.post("/",postDriver)

module.exports = driversRouter


