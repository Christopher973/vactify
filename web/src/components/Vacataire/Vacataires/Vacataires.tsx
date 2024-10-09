import type {
  DeleteVacataireMutation,
  DeleteVacataireMutationVariables,
  FindVacataires,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Vacataire/VacatairesCell'
import { timeTag, truncate } from 'src/lib/formatters'

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

const VacatairesList = ({ vacataires }: FindVacataires) => {
  const [deleteVacataire] = useMutation(DELETE_VACATAIRE_MUTATION, {
    onCompleted: () => {
      toast.success('Vacataire deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteVacataireMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete vacataire ' + id + '?')) {
      deleteVacataire({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Date naissance</th>
            <th>Email</th>
            <th>Adresse postale</th>
            <th>Telephone</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {vacataires.map((vacataire) => (
            <tr key={vacataire.id}>
              <td>{truncate(vacataire.id)}</td>
              <td>{truncate(vacataire.nom)}</td>
              <td>{truncate(vacataire.prenom)}</td>
              <td>{timeTag(vacataire.dateNaissance)}</td>
              <td>{truncate(vacataire.email)}</td>
              <td>{truncate(vacataire.adressePostale)}</td>
              <td>{truncate(vacataire.telephone)}</td>
              <td>{timeTag(vacataire.createdAt)}</td>
              <td>{timeTag(vacataire.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.vacataire({ id: vacataire.id })}
                    title={'Show vacataire ' + vacataire.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editVacataire({ id: vacataire.id })}
                    title={'Edit vacataire ' + vacataire.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete vacataire ' + vacataire.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(vacataire.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default VacatairesList
