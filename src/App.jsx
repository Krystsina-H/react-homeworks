function Header() {
  return (
    <header>
      <h1>Учебный проект по REACT</h1>
    </header>
  )
}

function MainContent({ children }) {
  return (
    <main>
      <h2>Подробнее о проекте курсах</h2>
      {children}
    </main>
  )
}

function Section() {
  return (
    <section>
      <p>Этот проект пишется в учебных целях в рамках обучения в REDEV.</p>
      <p>Говорят, что здесь лучшие курсы по REACT и JS</p>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <p>{new Date().getFullYear()}</p>
    </footer>
  )
}

function App() {
  return (
    <div>
      <Header />
      <MainContent>
        <Section />
      </MainContent>
      <Footer />
    </div>
  )
}

export default App
