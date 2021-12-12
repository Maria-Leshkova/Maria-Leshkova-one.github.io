import React, {useState} from "react";
import "./styles.css";
import closeIcon from "../../../images/close_icon.svg";
import ReactModal from "react-modal";
import map from "../../../images/map.png";

const Form = () => {
    const [nameValue, setNameValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("");
    const [questionValue, setQuestionValue] = useState("");
    const [isNameFocused, setNameFocused] = useState(false);
    const [isPhoneFocused, setPhoneFocused] = useState(false);
    const [isQuestionFocused, setQuestionFocused] = useState(false);
    const [showModal, setShow] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);

    const handleSubmit = e => {
        setNameError(false);
        setPhoneError(false);
        e.preventDefault();
        if (nameValue && phoneValue) {
            setShow(true);
        }  else {
            if (!phoneValue) {
                setPhoneError(true);
            }
            if (!nameValue) {
                setNameError(true);
            }
        }
    };

    const closeModal = () => {
      setShow(false);
      setPhoneValue("");
      setQuestionValue("");
      setNameValue("");
    };

    return (
        <div className="form-wrapper">
            <h2 className="form-title">Задайте вопрос специалисту и получите быстрый ответ!</h2>
            <div className="form-container flex">
                <form className="form" onSubmit={e => handleSubmit(e)}>
                    <div className="input-wrapper">
                        <label htmlFor="name" className={isNameFocused || nameValue ? "label focused" : "label"}>
                            Имя<span className="label-span">*</span>
                        </label>
                        <input className="input" id="name" name="name" onFocus={() => setNameFocused(true)}
                               value={nameValue} onChange={e => setNameValue(e.target.value)} onBlur={() => setNameFocused(false)}/>
                        {nameError && <span className="errorMessage">*Пожалуйста, заполните поле</span>}
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="phone" className={isPhoneFocused || phoneValue ? "label focused" : "label"}>
                            Телефон<span className="label-span">*</span>
                        </label>
                        <input className="input" id="phone" name="phone" type="phone" onFocus={() => setPhoneFocused(true)}
                               value={phoneValue} onChange={e => setPhoneValue(e.target.value)} onBlur={() => setPhoneFocused(false)}/>
                        {phoneError && <span className="errorMessage">*Пожалуйста, заполните поле</span>}
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="question" className="label" className={isQuestionFocused || questionValue ? "label focused" : "label"}>
                            Вопрос
                        </label>
                        <textarea className="input" rows={15} id="question" name="question"
                                  onFocus={() => setQuestionFocused(true)} onBlur={() => setQuestionFocused(false)}
                                  value={questionValue} onChange={e => setQuestionValue(e.target.value)}/>
                    </div>
                    <button className="form-button" type="submit">
                        Отправить
                    </button>
                </form>
                <a href="https://goo.gl/maps/DbcA7qFnzrSSubbKA" target="_blank" className="maps-link">
                    <img src={map} className="map"/>
                </a>
            </div>
            <ReactModal className="modal" isOpen={showModal} closeTimeoutMS={500}>
                <div className="close-icon" onClick={() => closeModal()}><img src={closeIcon}/></div>
                <h6 className="modal-title">Спасибо, ваш вопрос отправлен!</h6>
                <p>В ближайшее время с Вами свяжется первый освободившийся оператор.</p>
            </ReactModal>
        </div>
    );
}

export default Form;
