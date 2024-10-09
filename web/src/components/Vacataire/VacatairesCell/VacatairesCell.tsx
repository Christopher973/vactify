import type { FindVacataires, FindVacatairesVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Vacataires from 'src/components/Vacataire/Vacataires'

export const QUERY: TypedDocumentNode<FindVacataires, FindVacatairesVariables> =
  gql`
    query FindVacataires {
      vacataires {
        id
        nom
        prenom
        dateNaissance
        email
        adressePostale
        telephone
        createdAt
        updatedAt
      }
    }
  `

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      No vacataires yet.{' '}
      <Link to={routes.newVacataire()} className="rw-link">
        Create one?
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindVacataires>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  vacataires,
}: CellSuccessProps<FindVacataires, FindVacatairesVariables>) => {
  return <Vacataires vacataires={vacataires} />
}
