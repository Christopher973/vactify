import type { Vacataire } from '@prisma/client'

import {
  vacataires,
  vacataire,
  createVacataire,
  updateVacataire,
  deleteVacataire,
} from './vacataires'
import type { StandardScenario } from './vacataires.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('vacataires', () => {
  scenario('returns all vacataires', async (scenario: StandardScenario) => {
    const result = await vacataires()

    expect(result.length).toEqual(Object.keys(scenario.vacataire).length)
  })

  scenario('returns a single vacataire', async (scenario: StandardScenario) => {
    const result = await vacataire({ id: scenario.vacataire.one.id })

    expect(result).toEqual(scenario.vacataire.one)
  })

  scenario('creates a vacataire', async () => {
    const result = await createVacataire({
      input: {
        nom: 'String',
        prenom: 'String',
        dateNaissance: '2024-10-09T20:22:08.552Z',
        email: 'String7008072',
        adressePostale: 'String',
        telephone: 'String',
        updatedAt: '2024-10-09T20:22:08.552Z',
      },
    })

    expect(result.nom).toEqual('String')
    expect(result.prenom).toEqual('String')
    expect(result.dateNaissance).toEqual(new Date('2024-10-09T20:22:08.552Z'))
    expect(result.email).toEqual('String7008072')
    expect(result.adressePostale).toEqual('String')
    expect(result.telephone).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2024-10-09T20:22:08.552Z'))
  })

  scenario('updates a vacataire', async (scenario: StandardScenario) => {
    const original = (await vacataire({
      id: scenario.vacataire.one.id,
    })) as Vacataire
    const result = await updateVacataire({
      id: original.id,
      input: { nom: 'String2' },
    })

    expect(result.nom).toEqual('String2')
  })

  scenario('deletes a vacataire', async (scenario: StandardScenario) => {
    const original = (await deleteVacataire({
      id: scenario.vacataire.one.id,
    })) as Vacataire
    const result = await vacataire({ id: original.id })

    expect(result).toEqual(null)
  })
})
