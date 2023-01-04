import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',
  transition: '0.2s ease-out',
  transitionDelay: '150ms',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$primary500',

        '&:not(:disabled):hover': {
          backgroundColor: '$primary300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
          opacity: 0.5,
        },
      },

      secondary: {
        color: '$white',
        backgroundColor: '$secondary500',

        '&:not(:disabled):hover': {
          color: '$secondary300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
          opacity: 0.5,
        },
      },

      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$gray400',
        },

        '&:disabled': {
          color: '$gray600',
          opacity: 0.5,
        },
      },

      outline: {
        color: '$primary300',
        border: '2px solid $primary500',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
          opacity: 0.5,
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
