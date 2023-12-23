import FerretCountController from '../Controller/FerretCountController.js';
import { Router } from 'express';

const router = Router();

/**
 * Get all Ferret Counts.
 *
 * @swagger
 * /api/get/all/ferretCounts:
 *   get:
 *     summary: Get all Ferret Counts
 *     responses:
 *       '200':
 *         description: Ferret Counts retrieved successfully
 *         content:
 *           application/json:
 *             example:
 *               ferretCounts:
 *                 - count: 270
 *                   version_id: 688
 *                   tenant: dinel
 *                   version_time_finished: null
 *                   data_uploaded: "2023-10-09 08:54:00"
 *                   asset_category: "Switches"
 *                   asset_type: "60 kV Switchgear (GM)"
 *                   asset_type_id: 72
 *                 - count: 300
 *                   version_id: 689
 *                   tenant: anotherTenant
 *                   version_time_finished: "2023-10-10 09:00:00"
 *                   data_uploaded: "2023-10-10 08:45:00"
 *                   asset_category: "Transformers"
 *                   asset_type: "Distribution Transformer"
 *                   asset_type_id: 85
 */
router.get('/api/get/all/ferretCounts', FerretCountController.getAllFerretCounts);



export default router;