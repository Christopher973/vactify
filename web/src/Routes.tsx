import { Router, Route, Set } from '@redwoodjs/router'

import AppLayout from 'src/layouts/AppLayout'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Vacataires" titleTo="vacataires" buttonLabel="New Vacataire" buttonTo="newVacataire">
        <Route path="/vacataires/new" page={VacataireNewVacatairePage} name="newVacataire" />
        <Route path="/vacataires/{id:Int}/edit" page={VacataireEditVacatairePage} name="editVacataire" />
        <Route path="/vacataires/{id:Int}" page={VacataireVacatairePage} name="vacataire" />
        <Route path="/vacataires" page={VacataireVacatairesPage} name="vacataires" />
      </Set>
      <Set wrap={AppLayout}>
        <Route path="/intervenant/{id:Int}" page={IntervenantPage} name="intervenant" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
