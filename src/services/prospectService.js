import * as prospectRepository from '../repositories/prospectRepository.js'

export const createProspect = async (prospectData) => {
    return await prospectRepository.createProspect(prospectData)
}

export const getAllProspects = async () => {
    return await prospectRepository.getAllProspects()
}

export const getProspectById = async (id) => {
    return await prospectRepository.getProspectById(id)
}

export const updateProspectStatus = async (id, status, rejectionObservations) => {
    return await prospectRepository.updateProspectStatus(id, status, rejectionObservations)
}
