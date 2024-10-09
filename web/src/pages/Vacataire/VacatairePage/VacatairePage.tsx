import VacataireCell from 'src/components/Vacataire/VacataireCell'

type VacatairePageProps = {
  id: number
}

const VacatairePage = ({ id }: VacatairePageProps) => {
  return <VacataireCell id={id} />
}

export default VacatairePage
