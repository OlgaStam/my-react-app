import React from 'react'
import './Modal.scss'
import useForm from '../../Components/UseForm/UseForm'

const Modal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
    isOpen,
    onClose,
}) => {
    const {
        formData,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        resetForm,
    } = useForm({
        name: '',
        email: '',
        phone: '',
        question: '',
    })

    const handleClose = () => {
        resetForm() // Сбросить форму
        onClose()
    }

    const onSubmit = (formData: any) => {
        console.log('Дані відправлені:', formData)
        handleClose()
    }

    return (
        <>
            {isOpen && <div className="modal-overlay" onClick={handleClose} />}
            <div
                className={`modal ${isOpen ? 'show' : ''}`}
                style={{ display: isOpen ? 'block' : 'none' }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        {/* <div className="modal-body"> */}
                        <form
                            className="modal-body"
                            onSubmit={(e) => handleSubmit(e, onSubmit)}
                        >
                            {(
                                ['name', 'email', 'phone', 'question'] as Array<
                                    keyof typeof formData
                                >
                            ).map((field) => (
                                <div
                                    className={`form-group field-contactform-${field} ${errors[field] ? 'has-error' : ''}`}
                                    key={field}
                                >
                                    <label htmlFor={`contactform-${field}`}>
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
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors[field] && (
                                        <div className="help-block text-danger">
                                            {errors[field]}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="form-group button-group">
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                >
                                    Надіслати
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={handleClose}
                                >
                                    Закрити
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default Modal
