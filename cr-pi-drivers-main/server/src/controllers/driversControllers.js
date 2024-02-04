const { Driver } = require("../db"); 
const { infoCleaner } = require("../utils/index");
const axios = require("axios");

const getAllDriversController = async () => {
  try {
    const driversDB = await Driver.findAll(); 
    const response = await axios.get("http://localhost:5000/drivers");
    const infoApi = response.data;
    const driveryApi = infoCleaner(infoApi);
    return [...driversDB, ...driveryApi];
  } catch (error) {
    console.error("Error al obtener datos de la API:", error.message);
    return [];
  }
};
const getDriverDetailsByIdController = async (id) => {
  try {
    const getAllDriversId = await getAllDriversController(); 
    const driverById = getAllDriversId.find((driver) => driver.id == id);
    if (!driverById) {
      throw new Error('Conductor no encontrado');
    }
    return driverById;
  } catch (error) {
    console.error("Error al obtener datos de la API:", error.message);
  }
};
// traer por name seguir trabajando en eso
const getDriverDetailsByNameController = async (name) => {
  const driversApi = await getAllDriversController();
  if (name) {
    const driversFound = driversApi.filter(driver => driver.name === name);
    return driversFound;
  }
  return driversApi;
};



const createNewDriver = async (name,forename,description,image,nationality,dob)=>{
  const newDriver = await Driver.create({name,forename,description,image,nationality,dob})
  return newDriver
}




module.exports = 
{ getAllDriversController,
  getDriverDetailsByIdController,
  getDriverDetailsByNameController,
  createNewDriver };
