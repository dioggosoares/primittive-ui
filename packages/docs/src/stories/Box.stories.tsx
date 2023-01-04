import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@primittive-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento Box.</Text>,
    variant: 'primary',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

export const Secondary: StoryObj<BoxProps> = {
  args: {
    variant: 'secondary',
  },
}
