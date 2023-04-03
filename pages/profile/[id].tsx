import { useRouter } from 'next/router'
import Image from "next/image";
import userData from '@/data/mock-user-data.json'

const ProfilePage = () => {
  const router = useRouter()
  const id = parseInt(router.query.id as string)

  return (
    <div className={'p-4 flex flex-col sm:flex-row'}>
      <Image width={200} height={200} src={userData[id]?.avatar} alt={userData[id]?.first_name}/>
      <div className={'p-4'}>
        <div className={'text-xl my-4'}>{userData[id]?.first_name} {userData[id]?.last_name}</div>
        <div className={'text-lg my-2'}>Email: {userData[id]?.email}</div>
        <div className={'text-lg my-2'}>Gender: {userData[id]?.gender}</div>
        <div className={'text-lg my-2'}>Location: {userData[id]?.city}</div>
      </div>
    </div>
  )
}

export default ProfilePage