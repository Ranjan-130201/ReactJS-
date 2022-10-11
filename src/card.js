export default function card(props){
    let badgeText;
    if (props.openSpots === 0){
        badgeText="SOLD OUT";
    }
    else if (props.location === "Online"){
        badgeText="Online"
     }
    return(
        <div className="card">
        {badgeText && <div className='badge'>{badgeText}</div>}
        <img src={props.coverImg} className='card-img' />
            <div className='card-stats'>
                <img src={require('./Star1.png')} className='card-star' />
                <span  >{props.stats.rating}</span>
                <span className='greay' >({props.stats.reviewCount})</span>
                <span className='greay' >{props.location}</span>
            </div>
            <p className='card-title'>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}