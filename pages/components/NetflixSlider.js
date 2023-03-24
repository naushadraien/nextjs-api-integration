import Image from "next/image";
import Head from "next/head";

const NetflixSlider = ({ actualData }) => {
  const { jawSummary } = actualData;

  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
      <div className="card" style={{width: '18rem'}}>
        <Image src={jawSummary.backgroundImage.url} className="card-img-top" alt={jawSummary.title}  width={400} height={280}/>
        <div className="card-body">
          <h5 className="card-title">{jawSummary.title}</h5>
          <p className="card-text">
           {jawSummary.synopsis}
          </p>
        </div>
      </div>
    </>
  );
};

export default NetflixSlider;
