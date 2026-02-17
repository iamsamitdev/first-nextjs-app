type Props = {
  params: Promise<{ id: string }>
}

async function getUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  return res.json()
}

export default async function UserPage({ params }: Props) {
  const { id } = await params

    // สร้างตัวแปร users รับค่าจากฟังก์ชัน getUser
    const user = await getUser(id)
  
  return (
    user.id ?
    (
        <article className="p-8 rounded-lg shadow-md width-full max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <div className="mt-4">
                <h2 className="font-semibold mb-2">Address</h2>
                <p>{user.address.street}, {user.address.suite}</p>
                <p>{user.address.city}, {user.address.zipcode}</p>
            </div>
        </article>
    ) : (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl mb-6">User Not Found</h1>
        </div>
    )
  )
}