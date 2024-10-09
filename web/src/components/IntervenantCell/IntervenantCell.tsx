import type {
  FindIntervenantQuery,
  FindIntervenantQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Intervenant from '../Intervenant/Intervenant'

export const QUERY: TypedDocumentNode<
  FindIntervenantQuery,
  FindIntervenantQueryVariables
> = gql`
  query FindIntervenantQuery($id: Int!) {
    vacataire: vacataire(id: $id) {
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

export const Failure = ({
  error,
}: CellFailureProps<FindIntervenantQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  vacataire,
}: CellSuccessProps<FindIntervenantQuery, FindIntervenantQueryVariables>) => {
  return <Intervenant vacataire={vacataire} />
}
