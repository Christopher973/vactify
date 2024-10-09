import { format, differenceInYears } from 'date-fns'
import { fr } from 'date-fns/locale'
import { Vacataire } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

interface Props {
  vacataire: Vacataire
}

const Intervenant = ({ vacataire }: Props) => {
  const birthDate = new Date(vacataire.dateNaissance)
  const age = differenceInYears(new Date(), birthDate)

  return (
    <div>
      <header>
        <h2>
          <Link to={routes.intervenant({ id: vacataire.id })}>
            {vacataire.nom} {vacataire.prenom}
          </Link>
        </h2>
      </header>
      <ul>
        <li>
          Date de naissance : {format(birthDate, 'd MMMM yyyy', { locale: fr })}{' '}
          (Âge : {age} ans)
        </li>
        <li>Email : {vacataire.email}</li>
        <li>Adresse Postale : {vacataire.adressePostale}</li>
        <li>Téléphone : {vacataire.telephone}</li>
      </ul>
    </div>
  )
}

export default Intervenant
