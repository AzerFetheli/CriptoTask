

export default function  Btns({sortByTitle,sortByPrice,sortByChange}) {

    return (
      
        <div className='btns'>
            <button  onClick={sortByTitle} >Name</button>
            <button onClick={sortByPrice}>Price</button>
            <button onClick={sortByChange}>Change24h</button>
        </div>
    )
}
