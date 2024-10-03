// importação dos componentes Left e Right
import Left from './componentes/Left'
import Right from './componentes/Right'
// importação do arquivo de estilos
import './App.css'

// função que retorna o conteúdo do componente
function App() {
  return (
    <body> 
    <main className="flex">
      <Left />
      <Right />
    </main>
   </body>
  )
}

// exporta o componente App
export default App
