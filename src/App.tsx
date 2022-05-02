interface ButtonProps {
  text: string;
}

function Button(props: ButtonProps) {
  return <button>{props.text}</button>
}

function App() {
  return (
    <div>
      <Button text="Enviar" /> <br/> <br/>
      <Button text="ok" />     <br/> <br/>
      <Button text="CPF" />    <br/> <br/>
      <Button text="nome" />   <br/> <br/>
      <Button text="RG" />     <br/> <br/>
      <Button text="nascimento" /> 
    </div>
  )
}

export default App
