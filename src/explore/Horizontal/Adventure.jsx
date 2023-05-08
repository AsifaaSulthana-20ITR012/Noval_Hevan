import React from 'react'
import './Horizontal.css'

export default function Religious() {
    return (
        <div id='explore'>
            <div class="container">
                <h2>Adventure</h2><hr style={{ color: 'blue', height: '2px' }}></hr>
                <ul class="cards">
                    <li class="card">
                        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRkWXbfQrO5oTm1I5izjeRTbQD-vKPnybT24S2kFw2eH8LyyCo5" alt="" />
                        <h3 class="card-title">Harry Portter and the Sorcerer's Stone</h3>
                        {/* <div> */}
                     
                            <a target="_blank" href="https://books.google.co.in/books/about/Harry_Potter_and_the_Sorcerer_s_Stone.html?id=wrOQLV6xB-wC&source=kp_cover&redir_esc=y" class="card-link">More info</a>
                        {/* </div> */}
                    </li>
                    <li class="card">
                        <img src="https://m.media-amazon.com/images/I/61Nvv+LTdeL.jpg" alt="" />
                        <h3 class="card-title">Treasure Island</h3>
                        {/* <div> */}
                            <a target="_blank" href="https://www.gutenberg.org/files/120/120-h/120-h.htm" class="card-link">More Info</a>
                        {/* </div> */}
                    </li>
                    <li class="card">
                        <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328864746l/1086164.jpg" alt="" />
                        <h3 class="card-title">Journey to the Center of the Earth</h3>
                        {/* <div> */}
                            <a target="_blank" href="https://www.gutenberg.org/ebooks/18857" class="card-link">More Info</a>
                        {/* </div> */}
                    </li>
                    <li class="card">
                        <img src="https://m.media-amazon.com/images/I/61nkEgnbf2L.jpg" alt="" />
                        <h3 class="card-title">Tarzan of the Apes</h3>
                        {/* <div> */}
                            <a target="_blank" href="https://www.gutenberg.org/files/78/78-h/78-h.htm" class="card-link">More Info</a>
                        {/* </div> */}
                    </li>
                    <li class="card">
                        <img src="https://m.media-amazon.com/images/I/51MV5rjhvUL.jpg" alt="" />
                        <h3 class="card-title">Heart of Darkness</h3>
                        {/* <div> */}
                            <a target="_blank" href="https://www.gutenberg.org/files/219/219-h/219-h.htm" class="card-link">More Info</a>
                        {/* </div> */}
                    </li>
                    <li class="card">
                        <img src="https://m.media-amazon.com/images/I/51AuG91eHEL.jpg" alt="" />
                        <h3 class="card-title">The Jungle Book</h3>
                        {/* <div> */}
                            <a target="_blank" href="https://www.gutenberg.org/files/236/236-h/236-h.htm" class="card-link">More Info</a>
                        {/* </div> */}
                    </li>
                    
                                       
                </ul>
            </div>

        </div>
    )
}