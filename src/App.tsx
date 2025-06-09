import kolenkaIncLogo from '/koleno.png'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={kolenkaIncLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Kolenka Inc</h1>
      <h2>Запускаем стартапы и помогаем с процессами</h2>
      <div className="functions">
        <div>Программируем веб-сервисы и мобильные приложения</div>
        <div>Автоматизируем и интегрируем бизнес-процессы</div>
        <div>Примиряем точки зрения разработки и бизнеса</div>
        <div>Развиваем ваши IT-отделы</div>
        <div>Помогаем экономить на IT-решениях</div>
      </div>
      <h2>Напишите нам на почту <a href="mailto:dmitry@romashov.tech">dmitry@romashov.tech</a></h2>
    </>
  )
}

export default App
