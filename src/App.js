import React, { useState } from 'react';
import CounterIncrementDecrementSample from './Components/CounterIncrementDecrementSample.js'
//import UserLoginWithRef from './Components/UserLoginWithRef'
//import SetIntervalSampleBad from './Components/SetIntervalSampleBad.js'
//import SetIntervalSampleGood from './Components/SetIntervalSampleGood'
//import { Button, Flag, Segment } from 'semantic-ui-react'
//import TwoCountersOption2 from './Components/TwoCountersOption2.js'
//import UserLogin from './Components/UserLogin.js'
//import Posts from './Components/Posts.js'
//import ShowClicksUsingClass from './Components/ShowClicksUsingClass.js'
//import ShowClicksUsingHooks from './Components/ShowClicksUsingHooks'
//import AlbumsAndComments from './Components/AlbumsAndComments'
//import Clock from './Components/Clock'
//import RulesSample from './Components/RulesSample.js'
//import Level1 from './Components/Level1'
//import { LanguageContext } from './Components/LanguageContext'

function App() {
  //const [language, setLanguage] = useState('english')
  //const langObj = {language}
  return (
    <div className="App" style={{margin: '10px'}}>
    {/*}<TwoCountersOption2 />*/}
    {/*<UserLogin />*/}
    {/*<Posts />*/}
    {/*<ShowClicksUsingClass />*/}
    {/*<ShowClicksUsingHooks />*/}
    {/*<AlbumsAndComments />*/}
    {/*<Clock />*/}
    {/*<RulesSample />*/}
    {/*<Button primary onClick={() => setLanguage('english')}>english</Button>*/}
      {/*<Segment>
    <Flag onClick={() => setLanguage('english')} name='us'></Flag>
    {/*<Button primary onClick={() => setLanguage('portuguese')}>portuguese</Button>*/}
      {/*<Flag onClick={() => setLanguage('portuguese')} name='br'></Flag>
    </Segment>
    <LanguageContext.Provider value={language}>
    <Level1 />
    </LanguageContext.Provider>*/}
      {/*<SetIntervalSampleGood />*/}
      {/*<UserLoginWithRef />*/}
      <CounterIncrementDecrementSample initialState={{count: 0}}/>
    </div>
  );
}

export default App;
