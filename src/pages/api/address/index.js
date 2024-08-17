import { createRouter } from 'next-connect';
import dbConnect from "../../../backend/config/dbConnect";
import onError from "../../../backend/middlewares/errors"
import { getAddresses, newAddress } from '../../../backend/controllers/addressControllers';
import { isAuthenticatedUser } from '../../../backend/middlewares/auth';


const router = createRouter({ onError });

dbConnect();


router.post(newAddress)
router.use(isAuthenticatedUser).get(getAddresses)



export default router.handler();