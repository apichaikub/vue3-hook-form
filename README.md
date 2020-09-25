Easy way to handle the form input, select, checkbox, textarea etc. No state or v-model in the component. Vue 3 hook form is simple and lightweight.

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

## APIs

| Name                                    | Params                | Description    | default    |
| :---------------------------------------|:-------------------:|----------------|:-----------|
| `setValue(name, value)`                 |                     | set element value such as: input, textarea, select, etc.
|                                         | `name`              | the attributes name value of element
|                                         | `value`             | the value to be change
| `handleSubmit(event, callback)`         |                     | set element value such as: input, textarea, select, etc.
|                                         | `event`             | The EventListener interface represents an object that can handle an event dispatched by an EventTarget object.
|                                         | `callback`          | the callback function when the form was submitedd

### Set the form value after called service api

```
setup() {
    const { setValue, handleSubmit } = useForm()

    const onSubmit = (data) => console.log(data)

    // Call to service api to get user info
    axios.get('https://api.fake.com/me').then(({ status, data }) => {
        const { name, address } = data
        if(status === 200) {
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

    const { handleSubmit } = useForm(options)

    const onSubmit = (data) => {
        console.log(data) // { name: 'Facebook', address: '1 Hacker Way, Menlo Park, 94025' }
    }

    return {
        handleSubmit,
        onSubmit,
    }
}
```

Web development in 2020 is very interesting and hook is everywhere. 

`@treesoft/vue3-hook-form` make the component clean up and strongly code structure. No state, No v-model but only one for `onSubmit` handle function. If you want to contribution with us don't be hesitate, create the pull request on [Github](https://github.com/apichaikub/vue3-hook-form) now 🚀🚀🚀