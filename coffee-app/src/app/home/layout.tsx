import { Suspense } from 'react'
import { CoffeeSection } from './components/coffee-section'
import { SearchComponent } from './components/search-component'

function LoadingComponent() {
  return <div>Loading Coffee Selections...</div>
}

export default function HomeLayout() {
  return (
    <div className="mt-11 ml-11">
      <SearchComponent />
      <Suspense fallback={<LoadingComponent />}>
        <CoffeeSection />
      </Suspense>
    </div>
  )
}
