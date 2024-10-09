// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  intervenants: [
    {
      __typename: 'Intervenants' as const,
      id: 42,
    },
    {
      __typename: 'Intervenants' as const,
      id: 43,
    },
    {
      __typename: 'Intervenants' as const,
      id: 44,
    },
  ],
})
