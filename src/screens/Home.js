import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';


function Home() {
  return (
    <body>
      <div style={{ backgroundColor: '#635f5f', height: "100%" }}>

        {/**Header*/}
        <Header />


        {/**Top-Banner*/}
        <div className='top-banner'>
          <div className='main-banner'>
            <Link to={'#'} style={{ height: '100%', width: '100%', display: 'block', padding: 10 }}>
              <img className='main-banner-img' src='https://cdn0.fahasa.com/media/magentothem/banner7/TTN_Banner__840x320.jpg' alt='' />
            </Link>
          </div>
          <div className='assist-banner'>
            <div className='a-banner-top'>
              <Link to={'/flashsale'} className='fls-banner-top'>
                <img className='fls-banner-img-top' src='https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/062022bigsale-flashsale_392.jpg' alt='' />
              </Link>
            </div>
            <div className='a-banner-bot'>
              <Link to={'#'} className='fls-banner-bot'>
                <img className='fls-banner-img-bot' src='https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/banner1.2-392x156.jpg' alt='' />
              </Link>
            </div>
          </div>
        </div>


        {/** 4 Banner inner */}
        <div className='banner-inner'>
          <div style={{ width: '25%', marginLeft: '4%' }}>
            <Link to={'#'} className='banner-inner-publ'>
              <img className='banner-inner-img' src='https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/062022bigsale-deal_310x210.jpg' alt='' />
            </Link>
          </div>
          <div style={{ width: '25%' }}>
            <Link to={'#'} className='banner-inner-publ'>
              <img className='banner-inner-img' src='https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/Monthly%20Sale%20T5_Freeship_Small%20banner_310x210.jpg' alt='' />
            </Link>
          </div>
          <div style={{ width: '25%' }}>
            <Link to={'#'} className='banner-inner-publ'>
              <img className='banner-inner-img' src='https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/DoChoi/Thang5/TTN_Banner__310x210png.png' alt='' />
            </Link>
          </div>
          <div style={{ width: '25%', marginRight: '4%' }}>
            <Link to={'#'} className='banner-inner-publ'>
              <img className='banner-inner-img' src='https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/0622bigsale-freeship_310.jpg' alt='' />
            </Link>
          </div>
        </div>



      </div>
    </body>

  );
}


export default Home;