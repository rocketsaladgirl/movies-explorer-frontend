import { useRef } from 'react';

import './PopupContent.css';

import { useOnClickByOverlay } from '../../hooks/useOnClickByOverlay';

import fail from '../../images/logo/fail.svg';

function PopupContent ({ text, onClose }) {
    const popupRef = useRef(null);

    useOnClickByOverlay(popupRef, onClose);

    return (
        <div className='popup__container' ref={popupRef}>
            <div className='popup__content'>
                <button className='popup__close' type='button' aria-label='Закрыть модальное окно' onClick={onClose}/>
                <img className='popup__icon' src={fail} alt='Иконка ошибки'/>
                <h2 className={'popup__title'}>{text}</h2>
            </div>
        </div>
    )
}

export default PopupContent;