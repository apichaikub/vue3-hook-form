Easy way to handle submit and validate form. No state, No two way binding or v-model in the component, just give the attribute name on the input elements. Vue 3 hook form is simpler and faster.

## Install

```
npm i @treesoft/vue3-hook-form
```

## Usage basic

```
<template>
    <form @submit="handleSubmit($event, onSubmit)">
        <input name="name">
        <textarea name="address">
        <button type="submit">Submit</button>
    </form>
</template>

<script>
import useForm from '@treesoft/vue3-hook-form'

export default {
    setup() {
        const { handleSubmit } = useForm()

        const onSubmit = (data) => {
            console.log(data) // { name: '', address: '' }
        }

        return {
            handleSubmit,
            onSubmit,
        }
    }
}
</script>
```

## APIs methods

| Name                                    | Params              | Description    |
| :---------------------------------------|:-------------------:|----------------|
| `setValue(name: string, value: string)` |                     | set element value such as: input, textarea, select, etc.
|                                         | `name`              | attributes name value of element.
|                                         | `value`             | value to be change.
| `handleSubmit(event: object, callback: function)` |           | hanler function when form is submitted.
|                                         | `event`             | eventListener interface represents an object that can handle .an event dispatched by an EventTarget object.
|                                         | `callback`          | callback function when the form was submitedd.
| `values: object`                        |                     | form state values, can be render in the template.
| `errors: object`                        |                     | error state, can be render in the template.

## APIs options

| Name                                    | Params                         | Description    |
| :---------------------------------------|:------------------------------:|----------------|
| `useForm(options: object)`              |                                | options
|                                         | `options.defaultValue: object` | form values to set by default
|                                         | `options.validate: object`     | form validation such as: email, password and ect.

### Set form value after called service api

```
setup() {
    const { setValue, handleSubmit } = useForm()

    const onSubmit = (data) => console.log(data)

    // call to service api to get user info
    axios.get('https://api.fake.com/me').then(({ status, data }) => {
        const { name, address } = data
        if(status === 200) {
            // then set form value
            setValue('name', name)
            setValue('address', address)
        }
    })

    return {
        handleSubmit,
        onSubmit,
    }
}
```

### Set form value by default

```
setup() {
    const options = {
        defaultValues: {
            name: 'Facebook',
            address: '1 Hacker Way, Menlo Park, 94025',
        }
    }
    
    const { formState, handleSubmit } = useForm(options)

    const onSubmit = (data) => {
        console.log(data)
    }

    return {
        formState,
        handleSubmit,
        onSubmit,
    }
}
```

### Validation form

```
setup() {
    const options = {
        validate: {
            email: {
                required,
            },
            password: {
                minLength: minLength(8)
            }
        },
    }

    const { errors, handleSubmit } = useForm(options)

    const onSubmit = (data) => {
        console.log(data)
    }

    return {
        errors,
        handleSubmit,
        onSubmit,
    }
}
```

Web development in 2020 is very interesting and the hook form is trending now on react but not for vue now. 

So, I have created the [@treesoft/vue3-hook-form](https://www.npmjs.com/package/@treesoft/vue3-hook-form) to make the component clean up and strongly code structure. No state, No two way binding or v-model but only one for `onSubmit` callback function. If you want to contribution with us don't be hesitate, create the pull request on [Github](https://github.com/apichaikub/vue3-hook-form) to make vue comunnity stronger 🚀🚀🚀