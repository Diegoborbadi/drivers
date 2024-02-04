const { getAllDriversController,
  getDriverDetailsByIdController,
  getDriverDetailsByNameController,
  createNewDriver } = require("../controllers/driversControllers");

const getAllDrivers = async (req, res) => {
  try {
    const response = await getAllDriversController();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getDriversDetailsById = async (req, res) => {
  try {
  const { id } = req.params;
    const response = await getDriverDetailsByIdController(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getDriversByName = async(req,res)=>{
  try {
    const {name} = req.query
    const response = await getDriverDetailsByNameController(name);
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const postDriver = async(req,res)=>{
  try {
    const {name,forename,description,image,nationality,dob} = req.body
    const response = await  createNewDriver(name,forename,description,image,nationality,dob)
    res.status(201).json(response)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
    getAllDrivers,
    getDriversDetailsById,
    postDriver,
    getDriversByName
}