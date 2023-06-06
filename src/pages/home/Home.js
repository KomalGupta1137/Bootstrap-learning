import React from "react";

const Home = () => {
  return (
    <>
      <div className="section">
        <div className="card-header bg-transparent col-sm-12 border-bottom ">
            <div className = 'card'>
                <div className = 'card-body border-0'>
                    <div className = 'col-sm-12'>
                        <div className = 'row'>
                            <div className ='col-sm-10'>left</div>
                            <div className = 'col-sm-2'>
                                <div className = 'col-sm-12'>
                                    <div className= 'row'>
                                        <div className='col-sm-3'>Bell</div>
                                        <div className='col-sm-3'>Home</div>
                                        <div className='col-sm-3'>Ques</div>
                                        <div className='col-sm-3'>Profile</div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    
                </div>
            </div>
        </div>
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <div className="card border-0">
                <div className="card-header bg-transparent border-bottom-0">
                  head
                </div>
                <div className="card-body border-0">body</div>
                <div className="card-footer bg-transparent border-top-0">
                  footer
                </div>
              </div>
            </div>
            <div className="col-sm-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
