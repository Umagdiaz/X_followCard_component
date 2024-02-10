import './App.css'
import { TwFollowCard } from './TwFollowCard'

const users = [
    {
      userName: 'Pothead',
      name: 'Potter Headlig',
      isFollowing: true
    },
    {
      userName: 'heralb',
      name: 'Hemrrick Ralf',
      isFollowing: false
    },
    {
      userName: 'PacoHdezs',
      name: 'Paco Hdez',
      isFollowing: true
    },
    {
      userName: 'TMCheif',
      name: 'Tom Cheivoff',
      isFollowing: false
    }
  ]

export function App () {

    return (
    <section className='App'>
       {
        users.map(({ userName, name, isFollowing}) => 
        <TwFollowCard
        key={userName}
        userName= {userName}
        initialIsFollowing={isFollowing}
       >
        {name}
       </TwFollowCard>)
       }
    </section>
    )       
}