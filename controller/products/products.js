import { executeQuery } from "../../config/db";

const getAllEmployees = async (req, res) => {
  try {
    console.log("all the products");
    let employeeData = await executeQuery("select * from products", []);
    res.send(employeeData);
  } catch (err) {
    res.status(500).json(err);
  }
};

export {
  getAllEmployees,
};
