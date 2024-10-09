// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  intervenant: {
    __typename: 'Intervenant' as const,
    id: 42,
  },
})
