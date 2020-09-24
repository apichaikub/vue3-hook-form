import { reactive, onMounted } from 'vue'

const useForm = (options = {}) => {
    const { defaultValues = {} } = options
    const formState = reactive(defaultValues);

    onMounted(() => {
        const isSetDefaultValues = Object.keys(defaultValues).length
        if(isSetDefaultValues) {
            setDefaultValues(defaultValues)
        }
    })

    const setFormState = (name, value) => {
        formState[name] = value
    }

    const setValue = (name, value) => {
        if(typeof name === 'string' && (typeof value === 'string' || typeof value === 'number')) {
            setFormState(name, value)
            setElementValue(name, value)
        }
    }

    const setElementValue = (name, value) => {
        const element = document.querySelector(`[name='${name}']`)
        if(element) {
            element.value = value
        }
    }

    const setDefaultValues = (values = {}) => {
        Object.keys(values).forEach((key) => {
            const name = key
            const value = values[key]
            setElementValue(name, value)
        })
    }

    const getElementValue = (element) => {
        const type = element.getAttribute('type')

        if(type === 'checkbox') {
            return element.checked
        }

        return element.value
    }

    const getAttributeValue = (element) => {
        return element.getAttribute('name')
    }

    const handleSubmit = (event, callback) => {
        if(!event) {
            return
        }

        event.target.querySelectorAll("[name]").forEach((element) => {
            const name = getAttributeValue(element)
            const value = getElementValue(element)

            setFormState(name, value)
        })

        if(callback) {
            callback(formState)
        }

        event.preventDefault()
    }

    return {
        formState,
        setValue,
        handleSubmit
    }
}

export {
    useForm,
}