import type { Meta, StoryObj } from '@storybook/react'
import { Box, Tooltip, TooltipProps } from '@primittive-ui/react'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  args: {},
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
        <Box
          css={{
            display: 'flex',
            flexDirection: 'row',
            padding: '$12',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Default: StoryObj<TooltipProps> = {}
