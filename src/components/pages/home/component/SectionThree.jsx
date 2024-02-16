import SingleCard from "./card/SingleCard";
const SectionThree = () => {
  return (
    <>
      <section className="sec-three">
        <div className="title">
          <h5>Ən çox işlənənlər</h5>
          <h2>İmtahanlar</h2>
        </div>
        <div className="container">
          <div className="boxs">
            <div className="exam-question">
              <div className="filter-card">
                <h5>Filter</h5>
                <p>Kategoriyalar</p>
                <div className="active-card">
                  <p>İbtidai sinif</p>
                </div>
                <div className="card-about">
                  <p>Buraxılış</p>
                </div>
                <div className="card-about">
                  <p>Blok</p>
                </div>
                <div className="card-about">
                  <p>Təkmilləşdirmə</p>
                </div>
                <div className="card-about">
                  <p>Liseylərə</p>
                </div>
                <div className="card-about">
                  <p>Magistratura</p>
                </div>
                <div className="card-about">
                  <p>Olimpiada</p>
                </div>
                <div className="card-about">
                  <p>Fənn imtahanı</p>
                </div>
                <div className="classes">
                  <p>Etiketlər</p>
                  <div className="card-about">
                    <p>2-ci sinif</p>
                  </div>
                  <div className="card-about">
                    <p>3-cü sinif</p>
                  </div>
                  <div className="active-card">
                    <p>4-cü sinif</p>
                  </div>
                </div>
              </div>
            </div>
        
              <div className="classes-about">
                <SingleCard />
                <SingleCard />
                <SingleCard />
                <SingleCard />
                <SingleCard />
                <SingleCard />
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionThree;
