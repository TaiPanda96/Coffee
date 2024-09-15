import { Inline } from '../components/inline'
import { Stack } from '../components/stack'
import { TextInput } from '../components/text-input'
import { Suspense } from 'react'
import { CoffeeSection } from './coffee-section'

function LoadingComponent() {
  return <div>Loading Coffee Selections...</div>
}

export default function Home() {
  return (
    <div className="mt-11 ml-11">
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

      <Suspense fallback={<LoadingComponent />}>
        <CoffeeSection />
      </Suspense>
    </div>
  )
}
