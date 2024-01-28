export default function About({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>About Page: {params.slug}</h1>
    </div>
  )
}
