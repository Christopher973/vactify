export const schema = gql`
  type Vacataire {
    id: Int!
    nom: String!
    prenom: String!
    dateNaissance: DateTime!
    email: String!
    adressePostale: String!
    telephone: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    vacataires: [Vacataire!]! @requireAuth
    vacataire(id: Int!): Vacataire @requireAuth
  }

  input CreateVacataireInput {
    nom: String!
    prenom: String!
    dateNaissance: DateTime!
    email: String!
    adressePostale: String!
    telephone: String!
  }

  input UpdateVacataireInput {
    nom: String
    prenom: String
    dateNaissance: DateTime
    email: String
    adressePostale: String
    telephone: String
  }

  type Mutation {
    createVacataire(input: CreateVacataireInput!): Vacataire! @requireAuth
    updateVacataire(id: Int!, input: UpdateVacataireInput!): Vacataire!
      @requireAuth
    deleteVacataire(id: Int!): Vacataire! @requireAuth
  }
`
