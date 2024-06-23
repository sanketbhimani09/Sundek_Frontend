import React from 'react';

const MoreDetails = () => {
    return (
        <div style={{ backgroundColor: "lightgray", paddingTop: "20px", paddingBottom: "20px" }}>
            <div className='container' style={{ backgroundColor: "white", width: "70%", border: "2px solid black", borderRadius: "20px" }}>
                <div className='row'>
                </div>
                <div className='col d-flex justify-content-center'>
                    <img src='https://www.energy.gov/sites/default/files/styles/embed_image_large_480px_width_/public/2021-11/energysaver_green_0.png?itok=DTX4KODA' />
                </div>
                <div style={{ padding: "30px", fontSize: "17px" }} className='text-justify'>
                    <div>
                        Solar energy systems require periodic inspections and routine maintenance to keep them operating efficiently. Also, from time to time, components may need repair or replacement. You should also take steps to prevent scaling, corrosion, and freezing.
                    </div>
                    <br />
                    <br />
                    <div>
                        You might be able to handle some of the inspections and maintenance tasks on your own, but others may require a qualified technician. Work that requires going up ladders, walking on roofs, soldering or hot work, or cutting back tree limbs should be performed by a professional service for safety reasons. Ask for a cost estimate in writing before having any work done. For systems with extensive damage, it may be more cost effective to replace, shut off, or remove the solar system than to have it repaired.
                    </div>
                    <br />
                    <br />
                    <div>
                        <h2>Periodic Inspection List</h2>
                        Here are some suggested inspections of solar system components. Also read your owner's manual for a suggested maintenance schedule and keep track of previous maintenance activities in order to manage preventative maintenance intervals and better track elusive problems
                    </div>
                    <br />
                    <div>
                        <h4>Collector shading</h4>
                        <p><i className="fa fa-long-arrow-right"></i>&nbsp;&nbsp;&nbsp;Visually check for shading of the collectors during the day mid-morning, noon, and mid-afternoon on an annual basis. Shading can greatly affect the performance of solar collectors. Vegetation growth over time or new nearby construction may produce shading that wasn't there when the collectors were installed.</p>
                    </div>
                    <br />
                    <div>
                        <h4>Collector soiling</h4>
                        <p><i className="fa fa-long-arrow-right"></i>&nbsp;&nbsp;&nbsp;Dusty or soiled collectors will perform poorly. Periodic cleaning may be necessary in areas with specific sources of soiling such as birds or dust from plowing and if rain is not sufficient to rinse them off.</p>
                    </div>
                    <br />
                    <div>
                        <h4>Collector glazing and seals</h4>
                        <p><i className="fa fa-long-arrow-right"></i>&nbsp;&nbsp;&nbsp;Look for cracks in the collector glazing, and check to see if seals are in good condition. Plastic glazing, if excessively yellowed, may need to be replaced.</p>
                    </div>
                    <br />
                    <div>
                        <h4>Plumbing, ductwork, and wiring connections</h4>
                        <p><i className="fa fa-long-arrow-right"></i>&nbsp;&nbsp;&nbsp;Look for fluid leaks at pipe connections. Check duct connections and seals. Ducts should be sealed with a mastic compound. All wiring connections should be tight.</p>
                    </div>
                    <br />
                    <div>
                        <h4>Piping, duct, and wiring insulation</h4>
                        <p><i className="fa fa-long-arrow-right"></i>&nbsp;&nbsp;&nbsp;Check that all valves are in the proper operating position. Look for damage or degradation of insulation covering pipes, ducts, and wiring. Cover the pipe insulation with protective plastic or aluminum wrapping and replace if necessary. Protect wiring in conduits.</p>
                    </div>
                    <br />
                    <div>
                        <h4>Support structures</h4>
                        <p><i className="fa fa-long-arrow-right"></i>&nbsp;&nbsp;&nbsp;Check all nuts and bolts attaching the collectors to any support structures for tightness. Watch for corrosion on steel parts- and clean and paint if necessary.</p>
                    </div>
                    <br />
                    <div>
                        <h4>Storage systems</h4>
                        <p><i className="fa fa-long-arrow-right"></i>&nbsp;&nbsp;&nbsp;Check storage tanks, etc., for cracks, leaks, rust, or other signs of corrosion. Steel storage tanks have a “sacrificial anode” which corrodes before the tank does and should be replaced at an interval recommended by the supplier.  It is a good idea to flush storage tanks periodically to remove sediment.</p>
                    </div>
                    <br />
                    <div>
                        <h2>Preventing Scaling and Corrosion</h2>
                        Two major factors affecting the performance of properly sited and installed solar water heating systems include scaling (in liquid or hydronic-based systems) and corrosion (in hydronic and air systems).
                    </div>
                    <div>
                        <br />
                        <h3>Scaling</h3>
                        <br />
                        <div>
                            Domestic water that is high in mineral content (or "hard water") may cause the buildup or scaling of mineral (calcium) deposits on heat transfer surfaces. Scale buildup reduces system performance in a number of ways. If your system uses water as the heat-transfer fluid, scaling can occur in the collector, distribution piping, and heat exchanger. In systems that use other types of heat-transfer fluids such as propylene glycol, scaling can occur on the surface of the heat exchanger in contact with potable water that transfers heat from the solar collector to the domestic water. Scaling may also cause valve and pump failures on the potable water loop.
                            <br /><br/>
                            You can avoid scaling by using water softeners or by circulating a mild acidic solution (such as vinegar) through the collector or domestic hot water loop every 3–5 years, or as necessary depending on water conditions. You may need to carefully clean heat exchanger surfaces. A "wrap-around" external heat exchanger is an alternative to a heat exchanger located inside a storage tank.
                        </div>
                    </div>
                    <div>
                        <br />
                        <h3>Corrosion</h3>
                        <br />
                        <div>
                            Most well-designed solar systems experience minimal corrosion. When they do, it is usually galvanic corrosion, an electrolytic process caused by two dissimilar metals coming into contact with each other. One metal has a stronger positive electrical charge and pulls electrons from the other, causing one of the metals to corrode. The piping connection from the copper pipe to the steel tank should thus be a “bi-metallic” type of connector that uses a plastic sleeve to separate the dis-similar metals.  The heat-transfer fluid in some solar energy systems can also provide a bridge over which this exchange of electrons occurs.
                            <br /><br/>
                            Oxygen entering into an open loop hydronic solar system will cause rust in any iron or steel component. Such systems should have copper, bronze, brass, stainless steel, plastic, rubber components in the plumbing loop, and plastic or glass lined storage tanks.
                        </div>
                    </div>
                    <div>
                        <br />
                        <h3>Draining the Collector and Piping</h3>
                        <br />
                        <div>
                            Solar water heating systems that use only water as a heat-transfer fluid are the most vulnerable to freeze damage. "Draindown" or "drainback" systems typically use a controller to drain the collector loop automatically. Sensors on the collector and storage tank tell the controller when to shut off the circulation pump, to drain the collector loop, and when to start the pump again.<br /><br/>

                            Improper placement or the use of low-quality sensors can lead to their failure to detect freezing conditions. The controller may not drain the system, and expensive freeze damage may occur. Make sure that the freeze sensor(s) have been installed according to the manufacturer's recommendations, and check the controller at least once a year to be sure that it is operating correctly.
                        </div>
                        <div className='col d-flex justify-content-center'>
                            <img src='https://www.energy.gov/sites/default/files/styles/embed_image_large_480px_width_/public/2021-11/Solar%20Drain%20Back_0.jpg?itok=J1hZMOfL' />
                        </div>
                        <div>
                            To ensure that the collector loop drains completely, there should also be a means to prevent a vacuum from forming inside the collector loop as the liquid drains out. Usually an air vent is installed at the highest point in the collector loop. It is a good practice to insulate air vents so that they do not freeze. Also make sure that nothing blocks the airflow into the system when the drain cycle is active.
                            <br /><br/>
                            Collectors and piping must slope properly to allow the water to drain completely. All collectors and piping should have a minimum slope of 0.25 inches per foot (2.1 centimeters per meter).
                            <br /><br/>
                            In integral collector storage or "batch" systems, the collector is also the storage tank. Placing large amounts of insulation around the unglazed parts of the collector and covering the glazing at night or on cloudy days will help to protect the collector from cold temperatures. However, water in the collector can freeze over extended periods of very cold weather. The collector supply and return pipes are also susceptible to freezing, especially if they run through an unheated space or outside. This can happen even when the pipes are well insulated. It is best to drain the entire system before freezing temperatures occur to avoid any possible freeze damage.
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default MoreDetails;
