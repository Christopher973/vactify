import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const vacataires: QueryResolvers['vacataires'] = () => {
  return db.vacataire.findMany()
}

export const vacataire: QueryResolvers['vacataire'] = ({ id }) => {
  return db.vacataire.findUnique({
    where: { id },
  })
}

export const createVacataire: MutationResolvers['createVacataire'] = ({
  input,
}) => {
  return db.vacataire.create({
    data: input,
  })
}

export const updateVacataire: MutationResolvers['updateVacataire'] = ({
  id,
  input,
}) => {
  return db.vacataire.update({
    data: input,
    where: { id },
  })
}

export const deleteVacataire: MutationResolvers['deleteVacataire'] = ({
  id,
}) => {
  return db.vacataire.delete({
    where: { id },
  })
}
