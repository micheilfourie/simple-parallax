import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react'
import imgParallaxBack from './assets/parallax-back.png'
import imgParallaxMid from './assets/parallax-mid.png'
import imgParallaxFront from './assets/parallax-fore.png'

function App() {
  return (
    <main>
      <Parallax pages={2} style={{ top: 0, left: 0, width: '100%', height: '100%' }}>
        <ParallaxLayer
          offset={0}
          speed={-0.05}
        // style={{
        //   backgroundImage: `url(${imgParallaxBack})`,
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center'
        // }}
        >

        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={-0.075}
          style={{
            backgroundImage: `url(${imgParallaxMid})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overflow: 'hidden'
          }}>

        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0}
          style={{
            backgroundImage: `url(${imgParallaxFront})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>

        </ParallaxLayer>
      </Parallax>

    </main >
  )
}

export default App
