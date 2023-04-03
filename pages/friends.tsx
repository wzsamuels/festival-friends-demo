import userData from '../data/mock-user-data.json'
import Image from "next/image";
import Link from 'next/link'

const FriendsPage = () => {
  return (
    <div className={'flex flex-col flex-wrap'}>
      { userData.map((user, index) =>
        <Link href={`/profile/${index}`} className={'flex max-w-[300px] items-center m-4 border border-white p-2 rounded-xl hover:border-gray-500'} key={user.id.$oid}>
          <div className={'mx-4'}>
            <Image className={'rounded-full'} width={50} height={50} src={user.avatar} alt={user.first_name}/>
          </div>
          <div>{user.first_name} {user.last_name}</div>
        </Link>
      ) }
    </div>
  )
}

export default FriendsPage