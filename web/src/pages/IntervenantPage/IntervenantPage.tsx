// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import IntervenantCell from 'src/components/IntervenantCell'

interface Props {
  id: number
}

const IntervenantPage = ({ id }: Props) => {
  return (
    <>
      <Metadata title="Intervenant" description="Intervenant page" />

      <IntervenantCell id={id} />
    </>
  )
}

export default IntervenantPage
