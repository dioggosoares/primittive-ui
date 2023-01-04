import { X } from 'phosphor-react'
import { ComponentProps, useEffect, useRef, useState } from 'react'
import { Button } from '../Button'
import { Text } from '../Text'
import {
  ToastAction,
  ToastContainer,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {}

export function Toast(props: ToastProps) {
  const [open, setOpen] = useState(false)
  const eventDateRef = useRef(new Date())
  const timerRef = useRef(0)

  function oneWeekAway() {
    const now = new Date()
    const inOneWeek = now.setDate(now.getDate() + 7)
    return new Date(inOneWeek)
  }

  function prettyDate(date: Date) {
    return new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'full',
      timeStyle: 'short',
    }).format(date)
  }

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <ToastProvider swipeDirection="right">
      <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            eventDateRef.current = oneWeekAway()
            setOpen(true)
          }, 100)
        }}
      >
        Agendar
      </Button>
      <ToastContainer open={open} onOpenChange={setOpen}>
        <ToastTitle>
          <Text as="strong" size="xl">
            Agendamento realizado
          </Text>
        </ToastTitle>
        <ToastDescription asChild>
          <Text size="sm" css={{ color: '$gray200' }}>
            <time dateTime={eventDateRef.current.toISOString()}>
              {prettyDate(eventDateRef.current)}
            </time>
          </Text>
        </ToastDescription>
        <ToastAction asChild altText="Goto schedule to undo">
          <Button variant="tertiary" size="md">
            <X size={16} />
          </Button>
        </ToastAction>
      </ToastContainer>
      <ToastViewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
