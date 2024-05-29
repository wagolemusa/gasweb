import { createRouter } from 'next-connect';
import dbConnect from "../../../../backend/config/dbConnect";
import onError from "../../../../backend/middlewares/errors";

import {
  
  isAuthenticatedUser,
} from "../../../../backend/middlewares/auth";

import { deleteGas, getGasById, getGasData, newGas } from '../../../../backend/controllers/gasController';



const router = createRouter({ 
    onError,
 });

dbConnect();


router.use(isAuthenticatedUser).post(newGas);
router.use(isAuthenticatedUser).get(getGasData)
router.use(isAuthenticatedUser).get(getGasById)
router.use(isAuthenticatedUser).delete(deleteGas)



export default router.handler();