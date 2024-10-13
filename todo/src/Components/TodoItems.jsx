import './CSS/TodoItems.css';
import tick from './Assets/tick.png';
import no_tick from './Assets/not_tick.png';
import cross from './Assets/cross.png';

const Todoitems = ({ no, display, text, setTodos }) => {
  const deleteTodo = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no !== no);
    setTodos(data);
  };

  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        data[i].display = data[i].display === "" ? "line_through" : "";
        break;
      }
    }
    setTodos(data);
  };

  return (
    <div className='todoitems'>
      <div className={`todoitems-container ${display}`} onClick={() => { toggle(no) }}>
        {display === "" ? <img src={no_tick} alt="" /> : <img src={tick} alt="" />}
        <div className="todoitems-text">{text}</div>
      </div>
      <img className='todoitems-cross-icon' onClick={() => { deleteTodo(no) }} src={cross} alt="" />
    </div>
  );
};

export default Todoitems;
