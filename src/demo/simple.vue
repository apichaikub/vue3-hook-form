<template>
    <form @submit="handleSubmit($event, onSubmit)">
        <input name="email">
        <input name="password">
        <button type="submit">Login</button>
    </form>
</template>

<script>
import useForm from '../use/form'

export default {
    setup() {
        const { handleSubmit } = useForm()

        const onSubmit = (data) => {
            console.log(data)
        }

        return {
            handleSubmit,
            onSubmit,
        }
    }
}
</script>