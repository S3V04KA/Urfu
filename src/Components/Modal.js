export default function Modal({onClose, time}){
    return (
        <div className="modal">
            <h4>Я модальное окно</h4>
            <p>Время: {time}</p>
            <button onClick={onClose}>Закрыть</button>
        </div>
    )
}