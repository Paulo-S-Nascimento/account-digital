// importa o React para usar recursos como componentes 
import React from "react"

// função que retorna o conteúdo do componente
export default function Left() {
  
    return (
		<aside className="flex flex-column">
				<div className="flex flex-column">
					<div className="logo">
						<a href="/">
							<img src="public/img/logo.svg" />
						</a>
					</div>
					<div className="titulo">
						<h1>
							Complete os campos ao lado para abrir sua Conta
							Digital
						</h1>
						<p className="subtitulo">
							Aqui, você acontece com segurança e toda a
							praticidade que o Digital Bank oferece. Mais do que
							uma conta com cartão, você tem uma experiência
							completa com investimentos, Mimos exclusivos e muito
							mais.
						</p>
					</div>
					<small> &copy; Paulo Sergio Nascimento - 37022263 </small>
				</div>
		</aside>
    )
  }