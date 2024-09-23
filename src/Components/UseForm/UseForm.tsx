import React from 'react'

import { useState } from 'react'

interface FormData {
    name: string
    email: string
    phone: string
    question: string
}

const useForm = (initialValues: FormData) => {
    // eslint-disable-next-line no-unused-vars
    const [formData, setFormData] = useState<FormData>(initialValues)

    const [errors, setErrors] = useState<{ [key: string]: string }>({})

    const validateForm = (fieldName?: keyof FormData) => {
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prevData) => ({ ...prevData, [name]: value }))
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }))
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name } = e.target
        const validationErrors = validateForm(name as keyof FormData)
        setErrors((prevErrors) => ({ ...prevErrors, ...validationErrors }))
    }

    const handleSubmit = (
        e: React.FormEvent<HTMLFormElement>,
        // eslint-disable-next-line no-unused-vars
        onSubmit: (formData: FormData) => void
    ) => {
        e.preventDefault()
        const validationErrors = validateForm()
        if (Object.keys(validationErrors).length === 0) {
            onSubmit(formData)
        } else {
            setErrors(validationErrors)
        }
    }

    const resetForm = () => {
        setFormData(initialValues)
        setErrors({})
    }

    return {
        formData,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        resetForm, // Добавлено
    }
}

export default useForm
