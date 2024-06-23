import React from 'react';
// import './AboutUs.css'; // Make sure to import the CSS file
import './index.css'
const AboutUs = () => {
  return (
    <div className='forAbout'>
      <div className="container ">
        <div className="we-help-section ">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-7 mb-5 mb-lg-0">
                <div className="imgs-grid">
                  <div className="grid grid-1">
                    <img src="./images/solar4i.png" alt="Untree.co" height={500} />
                  </div>
                  <div className="grid grid-2">
                    <img src="./images/solar8.png" alt="Untree.co" height={220} width={180} />
                  </div>
                  <div className="grid grid-3">
                    <img src="./images/solar9.png" alt="Untree.co" />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 ps-lg-5">
                <h2 className="section-title mb-4">Advantages of Sundek solar water heater</h2>

                <ul style={{ listStyleType: 'circle', fontFamily: 'serif', fontSize: '25px' }} className="my-4">
                  <li>More efficient and less expensive.</li>
                  <li>Higher quality and more water than other solar.</li>
                  <li>100% saving on electricity bills.</li>
                  <li>Safe use without fear of accidents.</li>
                  <li>Give full return of money spent in 1 to 2 years.</li>
                  <li>The environment is not harmed.</li>
                  <li>It will give you hot water 24 hours 365 days.</li>
                </ul>
                <br />
                <div id='comparison'>
                  Model Selection
                </div>
                <table className="comparison-table tblAbout">
                  <thead>
                    <tr>
                      <th>Sr No. </th>
                      <th>Capacity(Liters/Day)</th>
                      <th>Number of persons</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>100</td>
                      <td>3-4</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>150</td>
                      <td>4-6</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>200</td>
                      <td>6-9</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>250</td>
                      <td>9-12</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>300</td>
                      <td>12-14</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>500</td>
                      <td>14-20</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div id='comparison'>
            Comparison of Sundek Solar with Geyser/Gas/Other Electric gadgets
          </div>
          <table className="comparison-table tblAbout">
            <thead>
              <tr>
                <th>Comparison of heat <br /> 100 liters/day</th>
                <th>Electric Geyser</th>
                <th>Gas/heater</th>
                <th>Sundek solar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Original cost</td>
                <td>4000&#8377;</td>
                <td>4000&#8377;</td>
                <td>12000&#8377;</td>
              </tr>
              <tr>
                <td>Life time</td>
                <td>4-6 years</td>
                <td>4-6 years</td>
                <td>20 years</td>
              </tr>
              <tr>
                <td>Annual fuel costs</td>
                <td>8100&#8377;</td>
                <td>4500&#8377;</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Total cost after <br /> 10 years</td>
                <td>89000&#8377;</td>
                <td>54000&#8377;</td>
                <td>12000&#8377;</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
      </div>
      <br/>
    </div>
  );
};

export default AboutUs;
