import express from 'express'
import * as prospectController from '../controllers/prospectController.js'

const router = express.Router();

router.post('/api/prospects/', prospectController.createProspect)
router.get('/api/prospects/', prospectController.getAllProspects)
router.get('/api/prospects/:id', prospectController.getProspectById)
router.put('/api/prospects/:id/status', prospectController.updateProspectStatus)

export default router