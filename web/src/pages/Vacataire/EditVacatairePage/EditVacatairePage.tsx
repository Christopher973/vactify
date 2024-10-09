import EditVacataireCell from 'src/components/Vacataire/EditVacataireCell'

type VacatairePageProps = {
  id: number
}

const EditVacatairePage = ({ id }: VacatairePageProps) => {
  return <EditVacataireCell id={id} />
}

export default EditVacatairePage
