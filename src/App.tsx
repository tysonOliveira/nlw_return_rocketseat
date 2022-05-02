interface ButtonProps {
  text: string;
}

function Button(props: ButtonProps) {
  return <button className="bg-violet-500 px-4">{props.text ?? 'Default'}</button>
}

function App() {
  return (
    <div className="flex gap-2">
      <Button text="Enviar" /> 
      <Button text="ok" />     
  
    </div>
  )
}

export default App
