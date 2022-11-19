import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
  getEmployeeById,
} from "../../../controller/products/products";

const handler = nc({ onError });
handler.get(getEmployeeById);
export default handler;
