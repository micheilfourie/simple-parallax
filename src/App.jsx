import hero from './assets/hero.jpg'

function App() {
  return (
    <main className='relative'>
      <img className='absolute -z-50 w-full h-full object-cover' src={hero} alt="" />

    </main>
  )
}

export default App
