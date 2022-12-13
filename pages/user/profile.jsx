import React, { useContext } from 'react'
import BaseContext from '../../context/Creator'
import Head from "next/head"
import Link from "next/link"
import Image from 'next/image'
import linkdn from "../../public/social/ld.svg"
import twitterIcon from "../../public/social/twt.svg"
import fbCion from "../../public/social/fb.svg"
import instaIcon from "../../public/social/insta.svg"
import mmicon from "../../public/social/MetaMask_Fox.svg"

const Profile = () => {
  const context = useContext(BaseContext);
  const { User, logOut } = context;




  return (
    <div className='profileContainer'>
      <Head>
        <title>Profile</title>
      </Head>
      {User ? (
        <>

          <nav className='mainNav'>
            <li>
              <Link className='ltag' href="/"> Profile </Link>
            </li>
            <li>
              <Link className='ltag' href="/" onClick={logOut}> Log out </Link>
            </li>

          </nav>

          <nav className='mainNav2'> 
            <li>
              <Link className='cok' href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwie-ZP6sen7AhVkSmwGHRLaAKEQjBB6BAgKEAE&url=https%3A%2F%2Fcommunity.metamask.io%2Ft%2Flog-in-to-meta-mask%2F17904&usg=AOvVaw3QpY1xoLEv6moQ4QKBQkJh"> Connect your Metamask Wallet <Image className='mmcls cok' src={mmicon} height={40} width={40} /> </Link>
            </li>
          </nav>



          <div className='namenft'>

            <h2 className='thetext'>Hey User👋</h2>
            <div className='socialIconContainer'>
              {/* <div className="ldIcon">
                <a href="https://www.linkedin.com" target="_blank">
                  <Image src={linkdn} height={40} width={40} alt="linkedinIcon" />
                </a>
              </div>

              <div className="twicon">
              <a href="https://www.twitter.com" target="_blank">
                <Image src={twitterIcon} height={40} width={40} alt="twitter-Icon" />
                </a>
              </div>
              <div className="fbcion">
              <a href="https://www.fb.com" target="_blank">
                <Image src={fbCion} height={40} width={40} alt="facebook-Icon" />
                </a>
              </div>
              <div className="instaIcon">
              <a href="https://www.instagram.com" target="_blank">
                <Image src={instaIcon} height={40} width={40} alt="instagram-Icon" />
              </a>
              </div> */}
              <div className="createnft" >Create New NFT</div>
            </div>

          </div>
        </>
      ) : (
        <>
          <h1>Login First</h1>
        </>
      )}
    </div>
  )
}

export default Profile