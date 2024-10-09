import type {
  DeleteVacataireMutation,
  DeleteVacataireMutationVariables,
  FindVacataireById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_VACATAIRE_MUTATION: TypedDocumentNode<
  DeleteVacataireMutation,
  DeleteVacataireMutationVariables
> = gql`
  mutation DeleteVacataireMutation($id: Int!) {
    deleteVacataire(id: $id) {
      id
    }
  }
`

interface Props {
  vacataire: NonNullable<FindVacataireById['vacataire']>
}

const Vacataire = ({ vacataire }: Props) => {
  const [deleteVacataire] = useMutation(DELETE_VACATAIRE_MUTATION, {
    onCompleted: () => {
      toast.success('Vacataire deleted')
      navigate(routes.vacataires())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteVacataireMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete vacataire ' + id + '?')) {
      deleteVacataire({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Vacataire {vacataire.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{vacataire.id}</td>
            </tr>
            <tr>
              <th>Nom</th>
              <td>{vacataire.nom}</td>
            </tr>
            <tr>
              <th>Prenom</th>
              <td>{vacataire.prenom}</td>
            </tr>
            <tr>
              <th>Date naissance</th>
              <td>{timeTag(vacataire.dateNaissance)}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{vacataire.email}</td>
            </tr>
            <tr>
              <th>Adresse postale</th>
              <td>{vacataire.adressePostale}</td>
            </tr>
            <tr>
              <th>Telephone</th>
              <td>{vacataire.telephone}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(vacataire.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(vacataire.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editVacataire({ id: vacataire.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(vacataire.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Vacataire
