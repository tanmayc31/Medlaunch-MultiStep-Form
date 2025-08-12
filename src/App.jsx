import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderWithUser from './components/common/Header/HeaderWithUser'
// import HeaderWithoutUser from './components/common/Header/HeaderWithoutUser'
import ProgressBar from './components/common/ProgressBar/ProgressBar';
import Step1 from './components/Steps/Step1/Step1'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='App'>
      {/* <HeaderWithoutUser /> */}

      <HeaderWithUser />
      <ProgressBar currentStep={1}/>
      <Step1 />
    </div>
  )
}

export default App
