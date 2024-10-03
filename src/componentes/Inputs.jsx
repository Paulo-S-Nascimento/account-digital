// importa o React para usar recursos como componentes 
import React from 'react';

// função que retorna o conteúdo do componente Inputs com os campos de formulário
// props: label, type, id
export default function Inputs({label, type, id, onChange}) {

return (
<div>
    
  <div className="flex flex-column">
  <label htmlFor="nome">{label}</label>
  <input type={type} id={id} onChange={onChange}/>
  </div>

</div>

) }