import Header from './Header.js'
import Footer from './Footer.js'
import Card from './card.js'
import Data from './data.js'
import Section from './Section.js'

export default function App(){
    const cards = Data.map(item=>{
        return(
        <Card 
                key={item.id}
                {...item}
            />
        )
    })
    return(
        <div>
            <Header/>
            <Section/>
            <section className='cards-list'>
            {cards}
            </section>
            <Footer/>
        </div>
    )

}
