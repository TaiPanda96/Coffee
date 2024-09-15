import { Inline } from '@coffee-app/components/inline'
import { Stack } from '@coffee-app/components/stack'
import { TextInput } from '@coffee-app/components/text-input'

export function SearchComponent() {
  return (
    <Inline justify="between" align="center" gap={4}>
      <Stack gap={4} align="left">
        <Inline justify="left" align="center" gap={4}>
          <img src="/home-logo.png" alt="hero-image" />
          <TextInput color="regular" value="Your Next Cup" as="h1" bold size="xl" />
        </Inline>
      </Stack>
      <TextInput
        color="regular"
        value="How can we make our selections better?"
        as="h2"
        bold
        size="md"
        nowrap
      />
    </Inline>
  )
}
