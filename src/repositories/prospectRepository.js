import { prisma } from '../index.js'

export const createProspect = async (prospectData) => {
    return await prisma.prospect.create({
        data: {
            ...prospectData,
            documents: {
                create: prospectData.documents
            }
        }
    });
};

export const getAllProspects = async () => {
    return await prisma.prospect.findMany({
        include: {
            documents: true
        }
    })
}

export const getProspectById = async (id) => {
    return await prisma.prospect.findUnique({
        where: { id: Number(id) },
        include: {
            documents: true
        }
    })
}

export const updateProspectStatus = async (id, status, rejectionObservations) => {
    return await prisma.prospect.update({
        where: { id: Number(id) },
        data: { status, rejectionObservations }
    })
}
