import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import AuthService from '@/services/AuthServices'

export const useUserStore = defineStore('user', () => {
    //state
    const user = ref('usuarioporasignar') 
    const token = ref('')
    const service = ref() 
    //actions
    async function login(email: string, password: string): Promise<boolean> {
        try {
            service.value = new AuthService()
            await service.value.login(email, password)
            token.value = await service.value.getToken()
            if (token.value) {
                localStorage.setItem('myToken', JSON.stringify(token.value))
                return true
            } else {
                console.log('Error, no se encuentra')
                return false
            }
        } catch (error) {
            console.log(error)
            return false
        }
    }
    function logout() {
        token.value = ''
        localStorage.clear()
    }
    //getters
    const ValidToken = computed(() =>
        (token.value ? true : false) || localStorage.getItem('myToken') ? true : false
    )

    return { login, user, logout, ValidToken }
})

