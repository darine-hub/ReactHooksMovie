import React,{useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ListMovie from "./components/Movie/ListMovie";
import {Modal ,Button} from  "react-bootstrap";
import SearchMovie  from  "./components/Movie/SearchMovie";
import Star from "./components/Movie/Star"



import AddMovie from "./components/Movie/AddMovie";

function App() {

  const[movies,setMovies]=useState([
    {
      titre:'Transformers: The Last Knight',
      description:'https://ibb.co/gGv6QS',
      poster:'https://image.ibb.co/k7P0kS/transformers4_640x320.jpg',
      alt:'transformers4_640x320',
      rate:6
    },
    {
      titre:'Blade Runner 2049',
      description:'https://ibb.co/cXjfKn',
      poster:'https://image.ibb.co/ct9rQS/Blade_Runner2049_640x320.jpg',
      alt:'Blade_Runner2049_640x320',
      rate:4


    },
    {
      titre:'Guardians of the Galaxy: Vol. 2',
      description:'https://ibb.co/b4nLkS',
      poster:'https://image.ibb.co/jAu0kS/GOG2_640x320.jpg',
      alt:'GOG2_640x320',
      rate:5
    },
    {

      titre:'Spiderman: Homecoming',
      description:'https://ibb.co/mC5Uen',
      poster:'https://image.ibb.co/da7xX7/spiderman_homecoming_640x320.jpg',
      alt:'spiderman_homecoming_640x320',
      rate:8
    },
    {
      titre:'Wonder Woman',
      description:'https://ibb.co/enV1s7',
      poster:'https://image.ibb.co/dHdAkS/Wonder_Woman_640x320.jpg',
      alt:'Wonder_Woman_640x320',
      rate:9
    }

  ])




/* ******************************************************************************************************* */
  const [show, setShow] = useState(false  );
        

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
     
      
        const [search, setSearch] = useState('');
        const [rate, setRate] = useState(0);
      
        const searching =(s)=>{
          setSearch(s)
        }
      const rating=(r)=>{
        setRate(r)
      }
        
      
         /* const  mySubmitHandler= (event) => {
            event.preventDefault();
            setMovies([...movies, {titre:event.target.titre,description:event.target.description,poster:event.target.poster,alt:event.target.alt}]);

          
        }*/

        const handleAddMovie = (newMovie)=>{
          setMovies([...movies,newMovie])
        }
     


       /* <li class="nav-item has-subnav">
        <a description="#"></a>
        <a description="#"></a>
            <div class="subnav">
              <ul>
               <li> <a description= ""> </a> </li>
               
              </ul>
            </div>
      </li> */   

  return (
   
<div>
        
        <header>  
<div class="container">
  <nav>
  <ul class="nav-container"> 
    <li class="nav-item"><a description="#"><SearchMovie titre={searching} rate={rating} /></a></li>
   
    <li class="nav-item"><a description="#"><AddMovie handleAddMovie=  {handleAddMovie} /></a></li>
    </ul>
  </nav>
</div>
</header>

<div class="accordion">
<ul>
    <ListMovie movies={movies.filter((elm) => (elm.titre.toLowerCase().match(search.toLowerCase().trim())) && (elm.rate >= rate))}    />
    
  
  </ul>
  </div>
  
  
  </div>

    
  );
}

export default App;
