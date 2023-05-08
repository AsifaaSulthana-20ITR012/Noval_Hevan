import React, { useState } from 'react';
import './App.css';
import {
  InputGroup,
  Input,
  Button,
  FormGroup,
  Label,
  Spinner
} from 'reactstrap';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import Records from '../components/Records';
import Pagination from '../components/Pagination';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';

function App() {
  // States
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const [maxResults, setMaxResults] = useState(10);
  const [startIndex, setStartIndex] = useState(1);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

   // define variables for paging
   const indexOfLastRecord = currentPage * recordsPerPage;
   const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
   const currentRecords = cards.slice(indexOfFirstRecord, indexOfLastRecord);
   const nPages = Math.ceil(cards.length / recordsPerPage);

  // Handle Search
  const handleSubmit = () => {
   
    if (maxResults > 40 || maxResults < 1) {
      toast.error('max results must be between 1 and 40');
    } else {
     
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`
        )
        .then(res => {
          if (startIndex >= res.data.totalItems || startIndex < 1) {
            toast.error(
              `max reults must be between 1 and ${res.data.totalItems}`
            );
          } else {
            if (res.data.items.length > 0) {
              setCards(res.data.items);
              setLoading(false);
            }
          }
        })
        .catch(err => {
          setLoading(true);
          console.log(err.response);
        });
    }
  };
  // Main Show Case
  const mainHeader = () => {
    return (
      <div className='main-image d-flex justify-content-center align-items-center flex-column'>
        {/* Overlay */}
        <div className='filter'></div>
        <h1
          className='display-2 text-center text-white mb-3'
          style={{ zIndex: 2 }}
        >
          Book Palace
        </h1>
        <div style={{ width: '60%', zIndex: 2 }}>
          <InputGroup size='lg' className='mb-3'>
            <Input
              placeholder='Book Search'
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            {/* <InputGroupAddon addonType='append'> */}
              <Button color='secondary' onClick={handleSubmit}>
                
                <SearchTwoToneIcon/>
              </Button>
            {/* </InputGroupAddon> */}
          </InputGroup>
          <div className='d-flex text-white justify-content-center'>
            <FormGroup >
              <Label for='maxResults'>Enter Max Results</Label>
              <Input
                type='number'
                id='maxResults'
                placeholder='Max Results'
                value={maxResults}
                onChange={e => setMaxResults(e.target.value)}
              />
            </FormGroup>
            <FormGroup className='ml-5'>
              <Label for='startIndex'>Start Index of Book</Label>
              <Input
                type='number'
                id='startIndex'
                placeholder='Start Index'
                value={startIndex}
                onChange={e => setStartIndex(e.target.value)}
              />
            </FormGroup>
          </div>
        </div>
      </div>
    );
  };

  
  return (
    <div className='w-100 h-100'>
      {mainHeader()}
      <ToastContainer />
      <Records data={currentRecords}/>
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
    </div>
  );
}

export default App;
