type Props = {
  params: Promise<{ slug: string }>
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  // แปลง url เป็นภาษาไทย
  const thaiSlug = decodeURIComponent(slug)
  
  return (
    <article className="p-8">
      <h1 className="text-3xl font-bold">
        บทความ: {thaiSlug}
      </h1>
    </article>
  )
}