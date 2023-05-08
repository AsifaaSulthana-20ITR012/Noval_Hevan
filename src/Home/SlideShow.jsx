import React from 'react';
import './slideshow.css'
import {Card,CardBody,CardTitle} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import PlayLessonIcon from '@mui/icons-material/PlayLesson';

import img1 from '../asserts/pexels1.webp'
import img4 from '../asserts/pexels2.jpeg';
import img3 from '../asserts/3pexels.webp'
const colors = [img3,img1, img4]
const delay = 3000;

function Middle()
{
 return(
    <div style={{outline:"2px",padding:"2rem"}}>
   <Card style={{textAlign:"center",padding:'2rem',backgroundColor:"lightblue"}}>
    <div >
    <h1>WELCOME TO THE ONLINE LIBRARY</h1>
    <p style={{zIndex:"3"}}>A Happy E-learning platform</p>
    </div>
    <br/>
    <hr/>
    <div class="container mt-3" style={{borderRadius:"1.5rem"}}>
  <div id="accordion">
    <div class="card">
      <div class="card-header">
        <a class="btn border" data-bs-toggle="collapse" href="#collapseOne">
          E-books <LibraryBooksIcon/>
        </a>
      </div>
      <div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
        <div class="card-body">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod voluptatibus natus assumenda, rerum amet, molestias placeat voluptatum ut nesciunt dolore similique neque sequi excepturi. Nulla vero ea error labore eveniet.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <a class="collapsed btn border" data-bs-toggle="collapse" href="#collapseTwo">
        Study Materials <AutoStoriesIcon/>
      </a>
      </div>
      <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
        <div class="card-body">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, quam inventore veritatis consequatur iusto adipisci, deleniti earum ullam perferendis incidunt totam corrupti dolor, tenetur cum natus aliquam repudiandae beatae veniam!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <a class="collapsed btn border" data-bs-toggle="collapse" href="#collapseThree">
         Children Books <LocalLibraryIcon/>
        </a>
      </div>
      <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
        <div class="card-body">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa amet libero quibusdam nihil earum, minus nulla eius aperiam sapiente voluptas fugiat sint, laboriosam harum voluptatem totam reprehenderit? Molestias, nulla eaque!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <a class="btn border" data-bs-toggle="collapse" href="#collapseFour">
         Comics <PlayLessonIcon/>
        </a>
      </div>
      <div id="collapseFour" class="collapse show" data-bs-parent="#accordion">
        <div class="card-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quas ab sint, optio ad perferendis facere quisquam maiores nam dignissimos quae esse assumenda eveniet similique consequatur! Distinctio, odit. Corrupti, doloribus?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
  </div>
</div>
   </Card>
    
    </div>
 )   
}

function Slideshow() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div>
           
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)`, height: "100vh" }}
            >
                {colors.map((home, index) => (
                    <img className="slide" src={home} key={index} alt="" />
                ))}
            </div>

            <div className="slideshowDots">
                {colors.map((_, ind) => (
                    <div
                        key={ind}
                        className={`slideshowDot${index === ind ? " active" : ""}`}
                        onClick={() => {
                            setIndex(ind);
                        }}
                    ></div>
                ))}
            </div>
        </div>
        <Middle/>
        </div>
    );
}
export default Slideshow;