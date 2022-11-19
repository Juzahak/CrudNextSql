import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
  getAllEmployees,
  
} from "../../../controller/products/products";
const handler = nc(onError);
handler.get(getAllEmployees);
export default handler;
