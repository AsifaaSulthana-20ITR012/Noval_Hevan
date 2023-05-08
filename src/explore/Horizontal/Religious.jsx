import React from 'react'
import './Horizontal.css'
import img1 from '../../asserts/quran.jpg'
import img2 from '../../asserts/bible.jpg'
import img3 from '../../asserts/jainism.jpg'
import img4 from '../../asserts/buddha.jpg'
import img5 from '../../asserts/bgita.jpg'
import img6 from '../../asserts/ramayanam.jpg'

export default function Religious() {
    return (
        <div id='explore'>
            <div class="container">
                <h2>Religious</h2><hr style={{ color: 'blue', height: '2px' }}></hr>
                <ul class="cards">
                    <li class="card">
                        <img src={img1} alt="" />
                        <h3 class="card-title">QURAN</h3>
                        {/* <div> */}
                     
                            <a href="https://quran.com/" target="_blank" class="card-link">More info</a>
                        {/* </div> */}
                    </li>
                    <li class="card">
                        <img src={img2} alt="" />
                        <h3 class="card-title">BIBLE</h3>
                        {/* <div> */}
                            <a href="https://biblehub.com/niv/version.htm"target="_blank" class="card-link">More Info</a>
                        {/* </div> */}
                    </li>
                    <li class="card">
                        <img src={img6} alt="" />
                        <h3 class="card-title">RAMAYANAM</h3>
                        {/* <div> */}
                            <a href="https://www.holybooks.com/ramayana/"target="_blank" class="card-link">More Info</a>
                        {/* </div> */}
                    </li>
                    <li class="card">
                        <img src={img5} alt="" />
                        <h3 class="card-title">Bhagavat Gita</h3>
                        {/* <div> */}
                            <a href="https://www.holybooks.com/mahabharata-all-volumes-in-12-pdf-files/"target="_blank" class="card-link">More Info</a>
                        {/* </div> */}
                    </li>
                    <li class="card">
                        <img src={img3} alt="" />
                        <h3 class="card-title">JAINISM</h3>
                        {/* <div> */}
                            <a href="https://jainonline.org/Resource.asp?i=4"target="_blank" class="card-link">More Info</a>
                        {/* </div> */}
                    </li>
                    <li class="card">
                        <img src={img4} alt="" />
                        <h3 class="card-title">BUDDHISM</h3>
                        {/* <div> */}
                            <a href="https://www.buddhanet.net/pdf_file/buddha-teachingsurw6.pdf"target="_blank" class="card-link">More Info</a>
                        {/* </div> */}
                    </li>
                    
                                       
                </ul>
            </div>

        </div>
    )
}