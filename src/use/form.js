import { reactive, onMounted } from 'vue'

const useForm = (options = {}) => {
    const {
        defaultValues = {},
        validate = {},
    } = options
    const values = reactive(defaultValues)
    const errors = reactive({})

    onMounted(() => {
        const isSetDefaultValues = Object.keys(defaultValues).length
        if(isSetDefaultValues) {
            setDefaultValues(defaultValues)
        }
    })

    const setFormValue = (name, value) => {
        values[name] = value
    }

    const setErrors = (name, value) => {
        errors[name] = value
    }

    const setElementValue = (name, value) => {
        const element = document.querySelector(`[name='${name}']`)
        if(element) {
            const attrTypeValue = getAttributeValue(element)('type')
            if(attrTypeValue === 'checkbox') {
                element.checked = value
            } else {
                element.value = value
            }
        }
    }

    const getElementValue = (element) => (value) => {
        const type = element.getAttribute(value)
        if(type === 'checkbox') {
            return element.checked
        }
        return element.value
    }

    const setDefaultValues = (values = {}) => {
        Object.keys(values).forEach((key) => {
            const name = key
            const value = values[key]
            setElementValue(name, value)
        })
    }

    const getAttributeValue = (element) => (value) => {
        return element.getAttribute(value)
    }

    const setValue = (name, value) => {
        if(typeof name === 'string' && (typeof value === 'string' || typeof value === 'number')) {
            setFormValue(name, value)
            setElementValue(name, value)
        }
    }

    const handleSubmit = (event, callback) => {
        if(!event) {
            return
        }

        const elements = event.target.querySelectorAll("[name]") || []
        elements.forEach((element) => {
            const attrNameValue = getAttributeValue(element)('name')
            const eleValue = getElementValue(element)('type')
            setFormValue(attrNameValue, eleValue)

            const hasValidate = validate[attrNameValue]
            if(hasValidate) {
                const validateProps = validate[attrNameValue] || {}
                const propertyKeys = Object.keys(validateProps)
                const errorProps = {}
                propertyKeys.forEach((key) => {
                    const validateFunc = validateProps[key]
                    const isValid = validateFunc(eleValue)
                    const isError = !isValid
                    if(isError) {
                        errorProps[key] = isError
                    }
                })

                const hasErrors = Object.keys(errorProps).length
                if(hasErrors) {
                    setErrors(attrNameValue, errorProps)
                } else {
                    setErrors(attrNameValue, null)
                }
            }
        })

        if(callback) {
            callback(values)
        }

        event.preventDefault()
    }

    return {
        values,
        errors,
        setValue,
        handleSubmit
    }
}

export default useForm