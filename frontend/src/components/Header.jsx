import Button from "./Button"

const Header = ({formToggle, currentState}) => {
  return (
    <header className="header">
        <h1>Oodles Todo</h1>
        <Button formToggle={formToggle} currentState={currentState}/>
    </header>
  )
}

export default Header
