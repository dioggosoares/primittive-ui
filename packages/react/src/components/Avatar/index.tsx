import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { capitalizeLetters } from '../../utils/capitalize'
import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  name?: string
  fallBackType?: 'icon' | 'name'
  colorScheme?: 'primary' | 'secondary' | 'tertiary'
}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600} colorScheme={props.colorScheme}>
        {props?.fallBackType === 'name' ? (
          capitalizeLetters(props?.name ?? '')
        ) : (
          <User />
        )}
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
