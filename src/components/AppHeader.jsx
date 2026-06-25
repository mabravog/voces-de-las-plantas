function AppHeader({ title, subtitle, eyebrow }) {
  return (
    <header className="app-header">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>
    </header>
  )
}

export default AppHeader
