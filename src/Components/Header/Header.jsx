import './Header.css'
import NewTaskForm from '../NewTaskForm'
import PropTypes from 'prop-types';

function Header({ onChangeInput = () => { }, label = 'label' }) {
    return (
        <header className='header'>
            <h1>todos</h1>
            <NewTaskForm onChangeInput={onChangeInput} label={label} />
        </header>
    )
}

export default Header

Header.propTypes = {
    onChangeInput: PropTypes.func,
    label: PropTypes.string
}

