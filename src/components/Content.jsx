export function MainContent({ children }) {
  return (
    <main>
      <h2>Подробнее о проекте курсах</h2>
      {children}
    </main>
  )
}

export function Section() {
  return (
    <section>
      <p>Этот проект пишется в учебных целях в рамках обучения в REDEV.</p>
      <p>Говорят, что здесь лучшие курсы по REACT и JS</p>
    </section>
  )
}
