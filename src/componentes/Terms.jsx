// importa o React para usar recursos como componentes 
import React from "react"
// importa o useState para criar estados nos componentes
import { useState } from 'react'

// função que retorna o conteúdo do componente
export default function Terms() {

// cria um estado para armazenar se o usuário aceitou os termos
const [aceitaTermos, setAceitaTermos] = useState(false)

// função que altera o estado de aceitaTermos
 const handleAceitaTermos = (event) => {
    setAceitaTermos(event.target.checked)
}
  
return (

<div> 
    <div className="flex termos">   
		<input type="checkbox"
               name="aceita-termos" 
               id="aceita-termos" 
               onChange={handleAceitaTermos}/>

		<label for="aceita-termos">
			Eu li, estou ciente das condições de tratamento dos
			meus dados pessoais e dou meu consentimento, quando
			aplicável, conforme descrito nesta
		</label>
	</div>

	<div className="flex button">
		<button className="botao" 
                disabled={!aceitaTermos}>
			Aceite os termos
		</button>
	</div>
</div>

    )
  }
