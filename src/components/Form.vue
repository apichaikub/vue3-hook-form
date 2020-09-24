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
import useHookForm from '../use/hookForm'

export default {
    setup() {
        const { handleSubmit } = useHookForm()

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