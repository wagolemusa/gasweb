import { createRouter } from 'next-connect';
import dbConnect from "../../../backend/config/dbConnect";
import onError from "../../../backend/middlewares/errors"
import { getAddresses } from '../../../backend/controllers/addressControllers';


const router = createRouter({ onError });

dbConnect();


router.get(getAddresses)


export default router.handler();