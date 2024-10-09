import type {
  CreateVacataireMutation,
  CreateVacataireInput,
  CreateVacataireMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import VacataireForm from 'src/components/Vacataire/VacataireForm'

const CREATE_VACATAIRE_MUTATION: TypedDocumentNode<
  CreateVacataireMutation,
  CreateVacataireMutationVariables
> = gql`
  mutation CreateVacataireMutation($input: CreateVacataireInput!) {
    createVacataire(input: $input) {
      id
    }
  }
`

const NewVacataire = () => {
  const [createVacataire, { loading, error }] = useMutation(
    CREATE_VACATAIRE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Vacataire created')
        navigate(routes.vacataires())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateVacataireInput) => {
    createVacataire({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Vacataire</h2>
      </header>
      <div className="rw-segment-main">
        <VacataireForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewVacataire
