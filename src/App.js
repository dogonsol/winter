import './App.css';
import React, {useState,useEffect} from 'react';
import smallDog from './assets/smalldog.png';
import video from './assets/video.MP4';
import telegram from './assets/telegram.svg';
import twitter from './assets/twitter.svg';
import Loader from './components/Lodaer';

function App() {
  const ticker = "$GTFODOG";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); // Adjust the duration as needed

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="App">
      <Loader loading={loading}/>
      <div className="main">
        <div className="runningDog">
        <div className="imgBlock"><img alt="dog" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog2" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog3" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog4" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog5" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog2" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog3" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog4" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog5" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog2" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog3" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog4" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog5" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog2" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog3" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog4" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog5" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog2" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog3" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog4" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog5" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog2" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog3" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog4" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog5" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog2" className="smallDog" src={smallDog}/></div>
        </div>
        <div className="section">
          <h1 className="dogHeading">
            AYO GET THE FUCK OUT OF HERE
          </h1>
          <video className="video" width="250" height="300" controls autoPlay loop>
            <source className="actualVideo" src={video} type="video/mp4"/>
          Your browser does not support the video tag.
          </video>
          <div className="socialBlock">
            <a href="https://t.me/gtfodoog"><img alt="telegram" className="telegram social" src={telegram}/></a>
            <a href="https://twitter.com/gedafakaatahere"><img alt="twitter" className="twitter social" src={twitter}/></a>
          </div>
          <a href="https://raydium.io/"><button className="button">
            BUY {ticker}
          </button></a>
        </div>
        <div className="tokenomics">
          <div className="tokHead"><h2>Tokenomics:</h2></div>
          <div className="tokDetails">
            <h3>Supply: 100,000,000</h3>
            <h3>Ticker: {ticker}</h3>
            <h3>TAX: 0/0</h3>
            <h3>Marketing: 20%</h3>
            <h3>Mint: Revoked</h3>
            <h3>LP: Burned</h3>
            <h3>Mooning: Yes</h3>
            <h3>Dog good?: He is fine</h3>
          </div>
        </div>
        <div className="runningDog">
        <div className="imgBlock"><img alt="dog33" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog34" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog35" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog36" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog37" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog38" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog39" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog40" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog41" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog42" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog43" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog44" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog45" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog46" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog47" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog48" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog49" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog50" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog51" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog52" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog53" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog54" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog55" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog56" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog57" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog58" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog59" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog60" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog61" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog62" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog63" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog64" className="smallDog" src={smallDog}/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
