import {useState, useEffect} from 'react';
import NetflixSlider from './components/NetflixSlider';

const index = () => {

  const [myData, setMyData] = useState([]);
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '841d3d62e4msh4d331cc7eefed46p1ed864jsn450ba9ceb17c',
		'X-RapidAPI-Host': 'netflix-data.p.rapidapi.com'
	}
};

const fetchData = async ()=>{
  try {
    const res = await fetch('https://netflix-data.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20', options)
    const data = await res.json();
    setMyData(data.titles);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  fetchData();
}, [])


  return (
    <>
    {
      myData.map((curElem)=>{
        return <NetflixSlider key={curElem.summary.id} actualData={curElem}></NetflixSlider>
      })
    }
    </>
  )
}

export default index;