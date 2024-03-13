import type { user } from '@/interfaces/userInterface'
import { ref, type Ref } from 'vue'


const url = import.meta.env.VITE_API_URL || 'https://jsonplaceholder.typicode.com'

export default class postService {
    private Posts!: Ref<user[]>
    private post!: Ref<user>

    constructor() {
        //Datos reactivos
        this.Posts = ref([])
        this.post = ref({}) as Ref<user>
    }

    //getter
    getPosts(): Ref<user[]> { //array
        return this.Posts
    }

    getPost(): Ref<user> {   //objeto
        return this.post
    }
    async fetchAll(): Promise<void> {
        try {
            const json = await fetch(url + '/posts')
            const response = await json.json()
            this.Posts.value = await response
        } catch (error) {
            console.log(error)
        }
    }

    async fetchPost(id: string): Promise<void> {
        try {
            const json = await fetch(url + '/posts/' + id)
            const response = await json.json()
            this.post.value = await response
        } catch (error) {
            console.log(error)
        }
    }

}