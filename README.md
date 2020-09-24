Easy way to control form input, select, checkbox etc. No state or v-model in the component. Vue 3 hook form is simple and lightweight.

### Install

```
npm i @treesoft/vue3-hook-form
```

### Usage

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
import useForm from './@treesoft/vue3-hook-form'

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