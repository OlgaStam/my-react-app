import React, { useState, useEffect } from 'react'
import './Modal.scss'

// Интерфейс для хранения данных формы
interface FormData {
    name: string
    email: string
    phone: string
    question: string
}

const Modal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
    isOpen,
    onClose,
}) => {
    // Состояния для данных формы и ошибок
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        question: '',
    })

    // Ошибки для каждой поля формы
    const [errors, setErrors] = useState<{ [key: string]: string }>({})
    // Состояние для анимации выхода модального окна
    const [isExiting, setIsExiting] = useState(false)

    // Эффект для сброса данных формы при открытии модалки
    useEffect(() => {
        if (isOpen) {
            setFormData({
                name: '',
                email: '',
                phone: '',
                question: '',
            })
            setErrors({})
            setIsExiting(false)
        }
    }, [isOpen])

    // Функция для изменения состояния формы при вводе данных
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prevData) => ({ ...prevData, [name]: value }))
        // Сброс ошибки при изменении поля
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }))
    }

    // Функция валидации поля при потере фокуса
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name } = e.target
        const validationErrors = validateForm(name as keyof FormData)
        setErrors((prevErrors) => ({
            ...prevErrors,
            ...validationErrors,
        }))
    }

    // Обработка отправки формы
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const validationErrors = validateForm()
        // Если ошибок нет, отправляем данные
        if (Object.keys(validationErrors).length === 0) {
            console.log('Дані відправлені:', formData)
            handleClose()
        } else {
            setErrors(validationErrors)
        }
    }

    // Функция для закрытия модального окна с анимацией
    const handleClose = () => {
        setIsExiting(true)
        setTimeout(() => {
            onClose()
            setIsExiting(false)
        }, 500) // Задержка для анимации выхода
    }

    // Функция для валидации данных формы
    const validateForm = (fieldName?: keyof FormData) => {
        const newErrors: { [key: string]: string } = {}
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Регулярное выражение для проверки email
        const phoneRegex = /^\+?\d{10,15}$/ // Регулярное выражение для проверки номера телефона

        // Валидация имени
        if (!fieldName || fieldName === 'name') {
            if (!formData.name) newErrors.name = "Ім'я не може бути порожнім"
        }
        // Валидация email
        if (!fieldName || fieldName === 'email') {
            if (!emailRegex.test(formData.email))
                newErrors.email = 'Невірний формат електронної пошти'
        }
        // Валидация телефона
        if (!fieldName || fieldName === 'phone') {
            if (!phoneRegex.test(formData.phone))
                newErrors.phone = 'Невірний формат номера телефону'
        }
        // Валидация вопроса
        if (!fieldName || fieldName === 'question') {
            if (!formData.question)
                newErrors.question = 'Коротке питання не може бути порожнім'
        }

        return newErrors
    }

    return (
        <>
            {/* Фон модалки */}
            {isOpen && <div className="modal-overlay" onClick={handleClose} />}
            <div
                className={`modal ${isOpen ? 'show' : ''} ${isExiting ? 'fade-out' : ''}`}
                style={{ display: isOpen || isExiting ? 'block' : 'none' }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            {/* Форма обратной связи */}
                            <form id="contact-form" onSubmit={handleSubmit}>
                                {(
                                    [
                                        'name',
                                        'email',
                                        'phone',
                                        'question',
                                    ] as Array<keyof FormData>
                                ).map((field) => (
                                    <div
                                        className={`form-group field-contactform-${field} ${errors[field] ? 'has-error' : ''}`}
                                        key={field}
                                    >
                                        <label
                                            className="control-label"
                                            htmlFor={`contactform-${field}`}
                                        >
                                            {field === 'name'
                                                ? "Ім'я"
                                                : field === 'email'
                                                  ? 'Електронна пошта'
                                                  : field === 'phone'
                                                    ? 'Номер телефону'
                                                    : 'Питання'}
                                        </label>
                                        <input
                                            type="text"
                                            id={`contactform-${field}`}
                                            className={`form-control ${errors[field] ? 'is-invalid' : ''}`}
                                            name={field} // Используем значение field для имени поля
                                            value={formData[field]}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            autoComplete={
                                                field === 'email'
                                                    ? 'email'
                                                    : 'off'
                                            }
                                        />
                                        {/* Отображение ошибки, если она есть */}
                                        {errors[field] && (
                                            <div className="help-block text-danger">
                                                {errors[field]}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <div
                                    className="form-group button-group"
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    {/* Кнопка отправки */}
                                    <button
                                        type="submit"
                                        className="btn btn-success"
                                    >
                                        Надіслати
                                    </button>
                                    {/* Кнопка закрытия */}
                                    <button
                                        type="button"
                                        className="btn btn-secondary close-modal"
                                        onClick={handleClose}
                                    >
                                        Закрити
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
