import { Router } from 'express';
import LoadflowController from '../Controller/LoadflowController.js';
import FerretConnectednessController from '../Controller/FerretConnectednessController.js';
import FerretCountController from '../Controller/FerretCountController.js';
import StationController from '../Controller/StationController.js';
import ForbrugsController from '../Controller/ForbrugsController.js';

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

/**
 * Retrieve information about all stations.
 *
 * @swagger
 * /api/get/all/stations:
 *   get:
 *     summary: Get all stations
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               - id: MML
 *                 position:
 *                   lat: 55.22503702871599
 *                   lng: 11.750777235661934
 *               - id: HOL
 *                 position:
 *                   lat: 55.24673402394817
 *                   lng: 11.77157725310437
 *               - id: YDN
 *                 position:
 *                   lat: 55.20835346894054
 *                   lng: 11.740549069590848
 *               - id: NSV
 *                 position:
 *                   lat: 55.24740224552815
 *                   lng: 11.713430586100033
 */
router.get('/api/get/all/stations', StationController.getAllStations);


/**
 * @swagger
 * /api/get/all/forbrug:
 *   get:
 *     summary: Get all forbrug from nk-forsyning.
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               - Id: 1
 *                 time: "2020-01-01 00:00:00"
 *                 installation_number_hash: "your_hash_value_here"
 *                 value: 0.0
 *                 unit: "kWh"
 */

router.get('/api/get/all/forbrug', ForbrugsController.getAllForbrug);


export default router;