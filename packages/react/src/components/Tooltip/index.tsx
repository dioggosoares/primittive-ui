import { ComponentProps } from 'react'
import { Box, Text } from '../..'
import {
  TooltipArrow,
  TooltipContainer,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  open: boolean
}

export function Tooltip(props: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipContainer {...props}>
        <TooltipTrigger asChild>
          <Box
            variant="secondary"
            css={{
              display: 'flex',
              flexDirection: 'row',
              padding: '$4 $6',
            }}
          >
            <Text size="sm" css={{ userSelect: 'none' }}>
              23
            </Text>
          </Box>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent sideOffset={-15}>
            <Text size="sm">31 de outubro - Disponível</Text>
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipContainer>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
