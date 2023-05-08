import React from 'react'
import BookCard from '../books/BookCard'

const Records = ({data}) => {
 
  return (  
   <div style={{display:"flex",flex:"space-between",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"1rem"}}>
            {data.map(item => (
           <p><BookCard
                thumbnail={item.volumeInfo.imageLinks.thumbnail}
                title={item.volumeInfo.title}
                pageCount={item.volumeInfo.pageCount}
                language={item.volumeInfo.language}
                authors={item.volumeInfo.authors}
                publisher={item.volumeInfo.publisher}
                description={item.volumeInfo.description}
                previewLink={item.volumeInfo.previewLink}
                infoLink={item.volumeInfo.infoLink}
              />
              </p>     
            ))}
      </div> 
  ) 
}

export default Records  