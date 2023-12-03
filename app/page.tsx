import Navbar from './components/Navbar'
import Hero from './pages/home/Hero'
import Form from './pages/home/Form'
import Features from './pages/home/Features'
import CallToAction from './pages/home/CallToAction'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className=" font-sans">
      <header className=''>
        <Navbar />
      </header>
      <main className='md:mt-20 mt-20'>
        <Hero />
        <Form />
        <div className='bg-slate-300 md:px-28 px-3 md:py-10 py-2'>
          <Features />
        </div>
        <CallToAction />
        <Footer />
      </main>
    </main>
  )
}
