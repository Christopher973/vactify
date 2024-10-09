import type {
  FindVacataireById,
  FindVacataireByIdVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Vacataire from 'src/components/Vacataire/Vacataire'

export const QUERY: TypedDocumentNode<
  FindVacataireById,
  FindVacataireByIdVariables
> = gql`
  query FindVacataireById($id: Int!) {
    vacataire: vacataire(id: $id) {
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

export const Empty = () => <div>Vacataire not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindVacataireByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  vacataire,
}: CellSuccessProps<FindVacataireById, FindVacataireByIdVariables>) => {
  return <Vacataire vacataire={vacataire} />
}
