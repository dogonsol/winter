import './App.css';
import React, {useState,useEffect} from 'react';
import smallDog from './assets/smalldog.png';
import video from './assets/video.MP4';
import telegram from './assets/telegram.svg';
import twitter from './assets/twitter.svg';
import Loader from './components/Lodaer';

function App() {
  const ticker = "$GTFOOH";
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
        <div className="imgBlock"><img className="img" alt="dog" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog2" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog3" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog4" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog5" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog6" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog7" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog8" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog9" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog0" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog11" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog12" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog13" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog14" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog15" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog16" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog17" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog18" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog19" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog20" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog21" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog22" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog23" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog24" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog25" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog26" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog27" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog28" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog29" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog30" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog31" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog32" className="smallDog" src={smallDog}/></div>
        </div>
        <div className="section">
          <h1 className="dogHeading">
            Aegedafakaatahere
          </h1>
          <video className="video" width="250" height="300" controls autoPlay loop>
            <source className="actualVideo" src={video} type="video/mp4"/>
          Your browser does not support the video tag.
          </video>
          <div className="socialBlock">
            <a href="https://t.me/aejoinin"><img alt="telegram" className="telegram social" src={telegram}/></a>
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
        <div className="imgBlock"><img className="img" alt="dog33" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog34" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog35" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog36" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog37" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog38" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog39" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog40" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog41" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog42" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog43" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog44" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog45" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog46" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog47" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog48" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog49" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog50" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog51" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog52" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog53" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog54" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog55" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog56" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog57" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog58" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog59" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog60" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog61" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog62" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog63" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img className="img" alt="dog64" className="smallDog" src={smallDog}/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
