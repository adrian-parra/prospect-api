import * as prospectService from '../services/prospectService.js'

export const createProspect = async (req, res) => {
    try {
        const prospect = await prospectService.createProspect(req.body)
        res.status(201).json(prospect)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

export const getAllProspects = async (req, res) => {
    try {
        const prospects = await prospectService.getAllProspects()
        res.json(prospects)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

export const getProspectById = async (req, res) => {
    try {
        const prospect = await prospectService.getProspectById(req.params.id)
        if (!prospect) {
            return res.status(404).json({ error: 'Prospect not found' })
        }
        res.json(prospect);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

export const updateProspectStatus = async (req, res) => {
    try {
        const { status, rejectionObservations } = req.body
        const prospect = await prospectService.updateProspectStatus(req.params.id, status, rejectionObservations)
        if (!prospect) {
            return res.status(404).json({ error: 'Prospect not found' })
        }
        res.json(prospect)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};
