import { Router } from 'express';
import LoadflowController from '../Controller/LoadflowController.js';
import FerretConnectednessController from '../Controller/FerretConnectednessController.js';
import FerretCountController from '../Controller/FerretCountController.js';

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


/**
 * Get Ferret Connectedness.
 *
 * @swagger
 * /api/get/ferretConnectedness:
 *   get:
 *     summary: Get Ferret Connectedness
 *     responses:
 *       '200':
 *         description: Ferret Connectedness retrieved successfully
 *         content:
 *           application/json:
 *             example:
 *               ferretConnectedness:
 *                 name: nkforsyning
 *                 version_id: 274
 *                 overall_connectedness: 83.6
 *                 time_finished: "2023-08-18 13:05:02.955427"
 *                 time_started: "2023-08-18 13:03:08.219411"
 *                 values_by_station:
 *                   - station_name: HOL
 *                     connectedness: 89
 *                   - station_name: MML
 *                     connectedness: 83
 *                   - station_name: NSV
 *                     connectedness: 83
 *                   - station_name: YDN
 *                     connectedness: 79.4
 */
router.get('/api/get/all/ferretConnectedness', FerretConnectednessController.getAllFerretConnectedness);

/**
 * Get loadflow from nk-forsyning.
 *
 * @swagger
 * /api/get/loadflow-nkforsyning:
 *   get:
 *     summary: Get loadflow from nk-forsyning
 *     responses:
 *       '200':
 *         description: loadflow retrieved successfully
 *         content:
 *           application/json:
 *             example:
 *               loadflow-nkforsyning:
 *                 primary_substation: HOL
 *                 period: "2020-08"
 *                 n_timestamps: "577"
 *                 n_successful: "0"
 *                 n_failed: "577"
 *                 success_percentage: "0.0"
 *                 simulation_id: "320"
 *                 version_id: "384"
 *                 name: "loadflownkforsyning"
 */
router.get('/api/get/loadflow-nkforsyning', LoadflowController.getAllLoadFlows);




export default router;