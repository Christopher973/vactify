import type { EditVacataireById, UpdateVacataireInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormVacataire = NonNullable<EditVacataireById['vacataire']>

interface VacataireFormProps {
  vacataire?: EditVacataireById['vacataire']
  onSave: (data: UpdateVacataireInput, id?: FormVacataire['id']) => void
  error: RWGqlError
  loading: boolean
}

const VacataireForm = (props: VacataireFormProps) => {
  const onSubmit = (data: FormVacataire) => {
    props.onSave(data, props?.vacataire?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormVacataire> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="nom"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Nom
        </Label>

        <TextField
          name="nom"
          defaultValue={props.vacataire?.nom}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="nom" className="rw-field-error" />

        <Label
          name="prenom"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Prenom
        </Label>

        <TextField
          name="prenom"
          defaultValue={props.vacataire?.prenom}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="prenom" className="rw-field-error" />

        <Label
          name="dateNaissance"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Date naissance
        </Label>

        <DatetimeLocalField
          name="dateNaissance"
          defaultValue={formatDatetime(props.vacataire?.dateNaissance)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="dateNaissance" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.vacataire?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="adressePostale"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Adresse postale
        </Label>

        <TextField
          name="adressePostale"
          defaultValue={props.vacataire?.adressePostale}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="adressePostale" className="rw-field-error" />

        <Label
          name="telephone"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Telephone
        </Label>

        <TextField
          name="telephone"
          defaultValue={props.vacataire?.telephone}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="telephone" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default VacataireForm
