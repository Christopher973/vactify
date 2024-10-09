import type { Meta, StoryObj } from '@storybook/react'

import IntervenantPage from './IntervenantPage'

const meta: Meta<typeof IntervenantPage> = {
  component: IntervenantPage,
}

export default meta

type Story = StoryObj<typeof IntervenantPage>

export const Primary: Story = {}
