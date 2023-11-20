import { Stack } from '@/components/stack'
import { CustomText } from '@/components/text-input'
import WallPaperComponent from '@/components/wall-paper'
import Image from 'next/image'

export default function HomePage() {
  return (
    <WallPaperComponent className="min-h-screen" backgroundImage="/options.jpeg">
      <div className="absolute top-0 right-0 m-4">
        <Image
          src="/yncm.svg"
          color="brand"
          alt="Your Next Cup Logo"
          width={50}
          height={50}
          priority
        />
      </div>
      <Stack gap={9} className="flex flex-col items-center justify-center min-h-screen">
        <CustomText
          value="Your Next Cup"
          color="regular"
          className="text-5xl font-bold text-center my-8 mt-28 -mb-48"
          as="h1"
          size="xxl"
        />
        <CustomText
          value="Discover your next great cup of coffee."
          color="regular"
          className="text-3xl font-bold text-center my-8 mt-24 -mb-44"
          size="lg"
        />
      </Stack>
    </WallPaperComponent>
  )
}
