import './Header.css'
import NewTaskForm from '../NewTaskForm'

function Header(props) {
    return (
        <header className='header'>
            <h1>todos</h1>
            <NewTaskForm onChangeInput={props.onChangeInput} label={props.label} />
        </header>
    )
}

export default Header
