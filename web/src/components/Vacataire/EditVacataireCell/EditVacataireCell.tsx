import type {
  EditVacataireById,
  UpdateVacataireInput,
  UpdateVacataireMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import VacataireForm from 'src/components/Vacataire/VacataireForm'

export const QUERY: TypedDocumentNode<EditVacataireById> = gql`
  query EditVacataireById($id: Int!) {
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

const UPDATE_VACATAIRE_MUTATION: TypedDocumentNode<
  EditVacataireById,
  UpdateVacataireMutationVariables
> = gql`
  mutation UpdateVacataireMutation($id: Int!, $input: UpdateVacataireInput!) {
    updateVacataire(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ vacataire }: CellSuccessProps<EditVacataireById>) => {
  const [updateVacataire, { loading, error }] = useMutation(
    UPDATE_VACATAIRE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Vacataire updated')
        navigate(routes.vacataires())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateVacataireInput,
    id: EditVacataireById['vacataire']['id']
  ) => {
    updateVacataire({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Vacataire {vacataire?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <VacataireForm
          vacataire={vacataire}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
