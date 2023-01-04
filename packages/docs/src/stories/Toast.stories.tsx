import type { Meta, StoryObj } from '@storybook/react'
import { Box, Toast, ToastProps } from '@primittive-ui/react'

export default {
  title: 'Overlay/Toast',
  component: Toast,
  args: {
    open: false,
  },
  argTypes: {
    open: {
      control: {
        type: null,
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
} as Meta<ToastProps>

export const Default: StoryObj<ToastProps> = {}
