import type { Prisma, Vacataire } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.VacataireCreateArgs>({
  vacataire: {
    one: {
      data: {
        nom: 'String',
        prenom: 'String',
        dateNaissance: '2024-10-09T20:22:08.579Z',
        email: 'String7101054',
        adressePostale: 'String',
        telephone: 'String',
        updatedAt: '2024-10-09T20:22:08.579Z',
      },
    },
    two: {
      data: {
        nom: 'String',
        prenom: 'String',
        dateNaissance: '2024-10-09T20:22:08.579Z',
        email: 'String2608202',
        adressePostale: 'String',
        telephone: 'String',
        updatedAt: '2024-10-09T20:22:08.579Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Vacataire, 'vacataire'>
