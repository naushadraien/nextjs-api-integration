const NetflixSlider = ({ actualData }) => {
  const { jawSummary } = actualData;

  return (
    <>
      <div className="card" style={{width: '18rem'}}>
        <img src={jawSummary.backgroundImage.url} className="card-img-top" alt={jawSummary.title} />
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
