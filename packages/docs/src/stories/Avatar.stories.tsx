import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps, Box } from '@primittive-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/dioggosoares.png',
    alt: 'Diogo Soares',
    name: 'Diogo Soares',
    colorScheme: 'primary',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallbackName: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    name: 'Diogo Soares',
    fallBackType: 'name',
  },
}

export const WithFallbackIcon: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    fallBackType: 'icon',
  },
}
