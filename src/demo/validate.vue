<template>
    <form @submit="handleSubmit($event, onSubmit)">
        <div>
            <label>Email</label>
            <input name="email">
            {{ errors.email && 'Email is required.' }}
        </div>
        <div>
            <label>Password</label>
            <input name="password">
            {{ errors.password && 'Password is required.' }}
        </div>
        <button type="submit">Login</button>
    </form>
</template>

<script>
import useForm from '../use/form'

const required = (value) => {
    return value ? true : false
}

const minLength = (length) => (value) => {
    return required(value) || String(value).length >= length
}

export default {
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
}
</script>

<style scoped>
form {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
