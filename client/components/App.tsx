import Joblist from './jobs'
import AddJob from './addJob'
import Footer from './footer'
import Header from './header'
import React from 'react'
interface Props {
  id: number
}

function App(id: Props) {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <section className="main">
        <AddJob />
        <Joblist />
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  )
}

export default App
