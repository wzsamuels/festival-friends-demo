import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import userData from '../data/mock-user-data.json'
import {festivalData} from "@/data/festivalData";

export default function Home() {

  return (
    <>
      <Head>
        <title>Festival Friends</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
        <div className={'flex flex-col items-center p-4'}>
          { festivalData.map(festival =>
            <div className={'w-auto m-4 rounded-xl shadow-md max-w-4xl w-full'} key={festival.id}>
              <div className={'relative'}>
                <Image className={' rounded-t-xl'} src={festival.image} alt={festival.name}/>
                <div className={'absolute bottom-4 left-4 rounded-xl z-10 max-w-[300px] w-full p-4 font-bold bg-white'}>
                  <div className={'bold'}>{festival.name}</div>
                  <div>{festival.location}</div>
                  <div>{festival.dates}</div>
                </div>
              </div>
                <div>
                  <h2 className={'text-xl m-2'}>Attending</h2>
                  <div className={'flex flex-wrap'}>
                    { [...Array( Math.floor(Math.random() * 4) + 4)].map(item => {
                        let user_number = Math.floor(Math.random() * userData.length);
                        return (
                          <Link href={`/profile/${user_number}`} className={'flex items-center max-w-[300px] items-center m-4 border border-white p-2 rounded-xl hover:border-gray-500'} key={userData[user_number].id.$oid}>
                            <div className={'mx-4'}>
                              <Image className={'rounded-full'} width={50} height={50} src={userData[user_number].avatar} alt={userData[0].first_name}/>
                            </div>
                            <div>{userData[user_number].first_name} {userData[user_number].last_name}</div>
                          </Link>
                        )
                      }
                    )}
                  </div>
                </div>
              </div>
          )}
        </div>
      </main>
    </>
  )
}
