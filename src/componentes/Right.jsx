// importa o React para usar recursos como componentes 
import React, { useState } from "react";
// importa o componente Inputs
import Inputs from "./Inputs";
// importa o componente Terms
import Terms from "./terms";

// função que retorna o conteúdo do componente
export default function Right() {

  // cria estados para armazenar os valores dos campos do formulário
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // cria um estado para armazenar se o botão de visualizar senha foi clicado
  const [btnSenha, setBtnSenha] = useState(false);

  // função que calcula o progresso do formulário
  const progress = () => {
    let cont = 0;
    if (nome) cont++;
    if (telefone) cont++;
    if (email) cont++;
    if (senha) cont++;

    return (cont / 4) * 100;
  };

  // função que altera o estado da senha para visualizar ou ocultar
  const senhaVisualizar = () => {
    setBtnSenha(!btnSenha);
  };

  return (
    <div className="flex flex-column">
      <div className="formulario flex flex-column">
        <div className="progresso">
          <label className="">Preencha os campos</label>
          <progress value={progress()} max="100"></progress>
        </div>

        <Inputs label="Digite seu nome" type="text" id="nome" onChange={(e) => setNome(e.target.value)} />
        <Inputs label="Digite seu telefone" type="text" id="telefone" onChange={(e) => setTelefone(e.target.value)} />
        <Inputs label="Digite seu e-mail" type="email" id="email" onChange={(e) => setEmail(e.target.value)} />


        <div className="flex flex-column">
          <label htmlFor="senha">Digite sua senha</label>
          <input
            type={btnSenha ? "text" : "password"} 
            id="senha"
            value={senha} 
            onChange={(e) => setSenha(e.target.value)} 
          />
          <button className="mostra-senha" onClick={senhaVisualizar}>
            {btnSenha ? "Ocultar Senha" : "Mostrar Senha"}
          </button>
        </div>

        <Terms />

      </div>
    </div>
  );
}
