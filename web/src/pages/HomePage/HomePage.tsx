// import { Link, routes } from '@redwoodjs/router'
import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import IntervenantsCell from 'src/components/IntervenantsCell'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <IntervenantsCell />
    </>
  )
}

export default HomePage
