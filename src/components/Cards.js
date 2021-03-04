import React from 'react'
import Card from './Card'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
    {
        id: 1,
        title: 'Diablo 3 Reaper of Souls',
        image: image1,
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTJhxjf2RSisG9GfYAJuheX-wgwhMHYE9-82ky1fn9gsYXLRbbFVliSoBYG31jnag/pubhtml'
    },
    {
        id:2,
        title: 'Path of Exiles',
        image: image2,
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQryhJxy6gOGKRBsLsLiMz8T2XdH22JXk5m5kR-KJqsStoONXvAD4XN108Lqm0mfQ/pubhtml'
    },
    {
        id:3,
        title: 'Wolcen Lords of Mayhem',
        image: image3,
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSjVSod8s9JYOrE3cSxru1Gp4fAWbzp1_avEHcKM-3laFDfY2ncr6-TtccP2RHhdw/pubhtml'
    }
]

function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} imageSource={card.image} url={card.url}/>
                        </div>
                    ))
                }  
            </div>
            
        </div>
    )
}

export default Cards
