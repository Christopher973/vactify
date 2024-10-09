import { format, differenceInYears } from 'date-fns'
import { fr } from 'date-fns/locale'
import type {
  IntervenantsQuery,
  IntervenantsQueryVariables,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Intervenant from '../Intervenant/Intervenant'

export const QUERY: TypedDocumentNode<
  IntervenantsQuery,
  IntervenantsQueryVariables
> = gql`
  query IntervenantsQuery {
    vacataires: vacataires {
      id
      nom
      prenom
      dateNaissance
      email
      adressePostale
      telephone
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  vacataires,
}: CellSuccessProps<IntervenantsQuery>) => {
  return (
    <>
      {vacataires.map((vacataire) => (
        <Intervenant key={vacataire.id} vacataire={vacataire} />
      ))}
    </>
  )
}
