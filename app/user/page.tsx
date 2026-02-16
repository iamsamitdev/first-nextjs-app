async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}

export default async function UserPage() {

    // สร้างตัวแปร users รับค่าจากฟังก์ชัน getUsers
    const users = await getUsers()

    // console.log(users)

    // กำหนดชนิดข้อมูลที่จะแสดงผลจาก api
    interface User {
        id: number;
        name: string;
        phone: string;
        email: string;
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl mb-6">Users</h1>
            <table className="table-auto border rounded-lg">
                <thead>
                    <tr className="border">
                        <th className="px-6 py-3 border">ID</th>
                        <th className="px-6 py-3 border">Name</th>
                        <th className="px-6 py-3 border">Phone</th>
                        <th className="px-6 py-3 border">Email</th>
                    </tr>
                </thead>
                <tbody>
                { users.map((user:User, index:number) => (
                        <tr className="border" key={index}>
                            <td className="px-6 py-3 border">{user.id}</td>
                            <td className="px-6 py-3 border">{user.name}</td>
                            <td className="px-6 py-3 border">{user.phone}</td>
                            <td className="px-6 py-3 border">{user.email}</td>
                        </tr>
                        )
                    )
                }
                </tbody>
            </table>
        </div>
    )
}