import { useState } from 'react'

export function TwFollowCard ({children, userName, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Following' : 'Follow'
    const buttonClassName = isFollowing
        ? 'tw-followCard-btn is-following'
        : 'tw-followCard-btn'
    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
    <article className='tw-cardAll'>
        <article className='tw-followCard'> 
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="avatar photo"  src="https://unavatar.io/deviantart/spyed" width={ 128 }></img>
                <div className='tw-followCard-info'>
                    <span className='tw-followCard-name'>{children}</span>
                    <span className='tw-followCard-userName'>@{userName}</span>
                </div>
            </header>
            
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                <span className='tw-followCard-text'>{text}</span> 
                    <span className="tw-followCard-stopFollow">Unfollow</span>
                </button>
            </aside>
        </article>
    </article>
    
    )
}
