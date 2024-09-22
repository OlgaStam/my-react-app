import React, { useState, useEffect } from 'react'
import './Modal.scss' // Импортируем стили из отдельного CSS-файла

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
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        question: '',
    })

    const [errors, setErrors] = useState<{ [key: string]: string }>({})

    useEffect(() => {
        if (isOpen) {
            setFormData({
                name: '',
                email: '',
                phone: '',
                question: '',
            })
            setErrors({})
        }
    }, [isOpen])

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '', // Очистка ошибок при изменении
        }))
    }

    const handleBlur = (
        e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name } = e.target
        const validationErrors = validateForm(name)
        setErrors((prevErrors) => ({
            ...prevErrors,
            ...validationErrors,
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const validationErrors = validateForm()
        if (Object.keys(validationErrors).length === 0) {
            console.log('Дані відправлені:', formData)
            onClose() // Закрываем модал после отправки
        } else {
            setErrors(validationErrors)
        }
    }

    const validateForm = (fieldName?: string) => {
        const newErrors: { [key: string]: string } = {}
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const phoneRegex = /^\+?\d{10,15}$/

        if (!fieldName || fieldName === 'name') {
            if (!formData.name) newErrors.name = "Ім'я не може бути порожнім"
        }
        if (!fieldName || fieldName === 'email') {
            if (!emailRegex.test(formData.email))
                newErrors.email = 'Невірний формат електронної пошти'
        }
        if (!fieldName || fieldName === 'phone') {
            if (!phoneRegex.test(formData.phone))
                newErrors.phone = 'Невірний формат номера телефону'
        }
        if (!fieldName || fieldName === 'question') {
            if (!formData.question)
                newErrors.question = 'Коротке питання не може бути порожнім'
        }

        return newErrors
    }

    return (
        <>
            {isOpen && <div className="modal-overlay" />}
            <div
                className={`modal fade ${isOpen ? 'show' : ''}`}
                style={{ display: isOpen ? 'block' : 'none' }}
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myModalLabel"
                aria-hidden={!isOpen}
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form id="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group field-contactform-name required">
                                    <label
                                        className="control-label"
                                        htmlFor="contactform-name"
                                    >
                                        Ім'я
                                    </label>
                                    <input
                                        type="text"
                                        id="contactform-name"
                                        className="form-control"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.name && (
                                        <div className="help-block text-danger">
                                            {errors.name}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group field-contactform-email required">
                                    <label
                                        className="control-label"
                                        htmlFor="contactform-email"
                                    >
                                        Електронна пошта
                                    </label>
                                    <input
                                        type="email"
                                        id="contactform-email"
                                        className="form-control"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.email && (
                                        <div className="help-block text-danger">
                                            {errors.email}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group field-contactform-phone required">
                                    <label
                                        className="control-label"
                                        htmlFor="contactform-phone"
                                    >
                                        Номер телефону
                                    </label>
                                    <input
                                        type="text"
                                        id="contactform-phone"
                                        className="form-control"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.phone && (
                                        <div className="help-block text-danger">
                                            {errors.phone}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group field-contactform-question required">
                                    <label
                                        className="control-label"
                                        htmlFor="contactform-question"
                                    >
                                        Питання
                                    </label>
                                    <textarea
                                        id="contactform-question"
                                        className="form-control"
                                        name="question"
                                        value={formData.question}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.question && (
                                        <div className="help-block text-danger">
                                            {errors.question}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group consulting-submit-button">
                                    <button
                                        type="submit"
                                        className="btn btn-success"
                                    >
                                        Надіслати
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary close-modal"
                                onClick={onClose}
                            >
                                Закрити
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
