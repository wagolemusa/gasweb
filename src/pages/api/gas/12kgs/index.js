import { createRouter } from 'next-connect';
import dbConnect from "../../../../backend/config/dbConnect";
import onError from "../../../../backend/middlewares/errors"
import { query12kgs } from '../../../../backend/controllers/gasController';

const router = createRouter( { onError });

dbConnect();

router.get(query12kgs)


export default router.handler();