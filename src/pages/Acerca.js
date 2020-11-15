import React from 'react';

//Image
import acercaImage from "../images/about.jpg";
import arrow from "../images/arrow.svg";

const Acerca = () => {
  return (
    <>
      <div className="acerca" id="acerca">
        <div className="image-acerca">
          <img src={acercaImage} alt="Acerca de cocina mary"/>
        </div>
        <div className="information-acerca">
          <div className="title">
            <span>Acerca de cocina Mary</span>
          </div>
          <div className="information">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, quis sem elit tellus augue tortor orci a
            volutpat. Tellus, nunc laoreet pharetra vitae pulvinar in nec risus. Et id id eu neque nunc ut lorem viverra
            ut. Morbi iaculis amet placerat dolor placerat et ornare sollicitudin condimentum. Auctor diam porttitor
            quisque facilisi tristique pharetra.

            Nec dui dictum elementum a. Aenean hendrerit suspendisse volutpat, sed mauris turpis turpis ultrices. Metus
            posuere in venenatis aenean. Interdum sed ac nunc, viverra tincidunt tortor nisl sagittis ut. Dolor magna at
            eu velit dis sagittis eget. Sit donec diam amet, sem risus a, pharetra consequat. Sed fermentum magna ipsum
            urna massa iaculis sit at. Id proin odio cras nibh.
          </span>
          </div>
          <div className="btn-menu">
            <a className="waves-effect waves-light btn-large" href="">Ver menu</a>

          </div>
        </div>
      </div>
    </>
  );
};

export default Acerca;