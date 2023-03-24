import NetflixSlider from "./components/NetflixSlider";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "841d3d62e4msh4d331cc7eefed46p1ed864jsn450ba9ceb17c",
    "X-RapidAPI-Host": "netflix-data.p.rapidapi.com",
  },
};

export const getStaticProps = async () => {
  try {
    const res = await fetch(
      "https://netflix-data.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20",
      options
    );
    const data = await res.json();
    console.log(data);

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log("error");
  }
};


//This code was for avoiding the data.map is not a function error
//The error "data.map is not a function" is occurring because the value of data is not an array. It is likely that the API response is not returning an array but an object instead.

// const index = ({ data }) => {
//   return (
//     <>
//       {Array.isArray(data) &&
//         data.map((curElem) => {
//           return (
//             <NetflixSlider key={curElem.summary.id} actualData={curElem} />
//           );
//         })}
//     </>
//   );
// };







const index = ({ data }) => {
  return (
    <>
      {data.titles.map((curElem) => {
        return <NetflixSlider key={curElem.summary.id} actualData={curElem} />;
      })}
    </>
  );
};


//we can also write the code as
// const index = ({ data }) => {
//   return (
//     <>
//       {data.titles &&
//         data.titles.map((curElem) => {
//           return (
//             <NetflixSlider key={curElem.summary.id} actualData={curElem} />
//           );
//         })}
//     </>
//   );
// };



export default index;
