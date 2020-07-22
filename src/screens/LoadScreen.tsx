import React from 'react';

export function LoadScreen(){
  return(
    <div className="account-background error_page">
    <div className="account-table">
      <div className="account-table-cell" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-lg-offset-4">
              <div className="bg-form p-4 mt-5 rounded" style={{ backgroundColor: '#fff' }}>
                <div className="account-table">
                  <div className="account-table-cell">
                    <div className="text-center">
                      <img src={require('../assets/images/208.gif')} alt=""/>
                      <h4 className="mt-30 error_desc text-primary" style={{ marginTop: 10 }}>Wait A Moment</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}