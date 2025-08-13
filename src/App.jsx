import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import HeaderWithUser from './components/common/Header/HeaderWithUser'
import HeaderWithoutUser from './components/common/Header/HeaderWithoutUser'
import ProgressBar from './components/common/ProgressBar/ProgressBar';
import Step1 from './components/Steps/Step1/Step1'
import Step2 from './components/Steps/Step2/Step2'
import Step2IfYes from './components/Steps/Step2/Step2IfYes'
import SupportChat from './components/common/SupprtChat/SupportChat'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <HeaderWithoutUser />

      {/* <HeaderWithUser /> */}
      <ProgressBar currentStep={2}/>
      {/* <Step1 /> */}
      <Step2 />
      <Step2IfYes />

      <SupportChat />
    </div>

  )
}

export default App
