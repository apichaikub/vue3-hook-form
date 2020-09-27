<template>
    <form @submit="handleSubmit($event, onSubmit)">
        <div>
            <label>Email</label>
            <input name="email">
        </div>
        <div>
            <label>Password</label>
            <input name="password">
        </div>
        <div>
            <label>Type</label>
            <select name="type">
                <option value="">
                    --- select ---
                </option>
                <option value="admin">
                    Admin
                </option>
                <option value="user">
                    User
                </option>
            </select>
        </div>
        <div>
            <label>Remember me</label>
            <input type="checkbox" name="remember">
        </div>
        <button type="submit">Login</button>
    </form>
</template>

<script>
import useForm from '../use/form'

export default {
    setup() {
        const options = {
            defaultValues: {
                email: 'foo@bar.com',
                password: '1234',
                type: 'admin',
                remember: true,
            },
        }

        const { handleSubmit } = useForm(options)

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
