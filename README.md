Easy way to handle submitting the form input, select, checkbox, textarea etc. No state or v-model in the component, just give the attribute name to it. Vue 3 hook form is simpler and faster.

## Install

```
npm i @treesoft/vue3-hook-form
```

## Usage

```
<template>
    <form @submit="handleSubmit($event, onSubmit)">
        <div>
            <label>Name</label>
            <input name="name">
        </div>
        <div>
            <label>Address</label>
            <textarea name="address">
        </div>
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

| Name                                    | Params                | Description    |
| :---------------------------------------|:-------------------:|----------------|:-----------|
| `setValue(name: string, value: string)` |                     | Set element value such as: input, textarea, select, etc.
|                                         | `name`              | Attributes name value of element.
|                                         | `value`             | Value to be change.
| `handleSubmit(event: object, callback: function)` |                     | Hanler function when form is submitted.
|                                         | `event`             | EventListener interface represents an object that can handle .an event dispatched by an EventTarget object.
|                                         | `callback`          | Callback function when the form was submitedd.
| `formState: object`                     |                     | Form reactive or state values, can be render in the template.

## APIs options

| Name                                    | Params                         | Description    |
| :---------------------------------------|:------------------------------:|----------------|:-----------|
| `useForm(options: object)`              |                                | options
|                                         | `options.defaultValue: object` | form values to set by default

### Set the form value after called service api

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

### Or set form value by default

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

Web development in 2020 is very interesting and the concept of hook is trending. developers apply this concept to everywhere, even form control.

[@treesoft/vue3-hook-form](https://www.npmjs.com/package/@treesoft/vue3-hook-form) make the component clean up and strongly code structure. No state, No v-model but only one for `onSubmit` handle function. If you want to contribution with us don't be hesitate, create the pull request on [Github](https://github.com/apichaikub/vue3-hook-form) now 🚀🚀🚀