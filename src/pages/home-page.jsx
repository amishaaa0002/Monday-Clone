import React, { Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { HomeHeader } from '../cmps/home-header'
import { loadBoards } from '../store/board.actions'
import { BsStars } from 'react-icons/bs'
import { Loader } from '../cmps/loader'
import HomeScreenShot from '../cmps/home-screenshots'
import StartedButton from '../cmps/custom/getstarted-btn'

const homeImg = require('../assets/img/bgwhite.avif')

export default function HomePage () {
    const boards = useSelector(storeState => storeState.boardModule.boards)

    useEffect(() => {
        loadBoards()
    }, [])

    if (!boards.length) return <Loader />
    return (
            <Suspense fallback={<Loader />}>
                <HomeHeader boards={boards} />
                <section className='home-page '>
                    <div className='home-content layout'>
                        <div className="headers-container flex column space-between">
                            <h1 className='main-title' style= {{color: "rgb(51,51,51)"}}>
                                <span style= {{fontWeight: "600px"}}><b>A Platform Built For A</b></span>
                                <span style= {{fontWeight: "600px"}}><b>New Way Of Working</b></span>
                            </h1>
                            <h2 className='secondary-title'>What would you like to manage with monday.com Work OS?</h2>
                        </div>
                        <div className='get-started'>
                            <StartedButton boardId={boards[0]._id} />
                            <p className='home-paragraph'>No credit card needed <BsStars /> Unlimited time on Free Plan</p>
                        </div>
                    </div>
                    <img className="hero" src={homeImg} alt="hero-img" />
                </section >
              
                <HomeScreenShot boardId={boards[0]._id} />
            </Suspense>
    )
}
