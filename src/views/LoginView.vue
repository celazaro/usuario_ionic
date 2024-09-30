<template >

    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>
                    Login
                </ion-title>
                <ion-buttons slot="end">
                    <ion-button @click="Home"> <ion-icon :icon="homeOutline" ></ion-icon></ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <form @submit.prevent="Login">
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <ion-item style="--min-height: 70px;">
                                
                                <ion-input
                                label="Usuario"
                                label-placement="stacked"
                                fill="outline"
                                shape="round"
                                clear-input
                                placeholder="Nombre de Usuario"
                                required
                                v-model="username"
                                ></ion-input>
                            </ion-item>

                            <br>

                            <ion-item style="--min-height: 70px;">
                                <ion-input 
                                type="password" 
                                label="Contraseña" 
                                label-placement="stacked" 
                                fill="outline" 
                                shape="round" 
                                clear-input 
                                required 
                                placeholder="*********"
                                v-model="password" >
                                    <ion-input-password-toggle slot="end"></ion-input-password-toggle>
                                </ion-input>
                            </ion-item>
                                
                            <br>
                            <ion-button
                            type="submit"
                            shape="round"
                            color="primary"
                            expand="block"
                            >Iniciar Sesión</ion-button>
                            <div style="display: flex; justify-content: center;" >
                                <ion-item >
                                    <p>¿No tenés cuenta? </p>
                                    <a class="space-link" href="/registration"> Registrate</a>
                                </ion-item>
                            </div>
                            
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </form>

            <ion-toast
            :duration="3000"
            :message="toastMessage"
            :is-open="toastState"
            @didDimiss="toastState = false"
            :icon="informationCircleOutline"
            ></ion-toast>
        </ion-content>
    </ion-page>


</template>



<script lang="ts" setup >

import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons,  IonButton, IonInput,  IonGrid, IonRow, IonCol, IonItem, IonIcon, IonInputPasswordToggle, IonToast } from '@ionic/vue'

import { homeOutline, informationCircleOutline } from 'ionicons/icons';

import { ref } from 'vue'

import { useRouter } from 'vue-router'

import axios from 'axios'

import { Storage } from '@ionic/storage'

const router = useRouter()

const username = ref("")
const password = ref("")
const toastState = ref(false)
const toastMessage = ref('')


const Login = async()  => {

    toastState.value = false

    await axios
    .post('http://127.0.0.1:8000/api/login', {
        username: username.value,
        password: password.value
    })
    .then( response => {
        if ( response.status == 200 ) {
           
            toastState.value = true
            console.log('Ingreso perfecto!!')
            console.log('Valores obtenidos de base de datos: ' , response)

            toastMessage.value = `Datos correctos!. Bienvenid@ ${username.value}`

            const storage = new Storage()
            storage.create()

            storage.set('token', response.data.token)
            storage.set('username', response.data.user.username)

            username.value=''
            password.value=''

            router.push('/tabs/')

        }
    })
    .catch( error => {
        toastState.value = true
        // Limpiar los campos en caso de error
        username.value = ""
        password.value = ""

        if ( error.response && error.response.status == 400 ) {
            console.log('Error en contraseña')
            toastMessage.value="Error en contraseña"

        } else if (error.response && error.response.status == 404) {
            console.log ('Su usuario no está registrado')
            toastMessage.value="Usuario no registrado"
            

        } else {
            console.log ('Problemas con el servidor.  Vuelva a intentar más tarde!!')
            toastMessage.value="Poblemas con el servidor. Intente más tarde."           
        }
    })
}

const Home = () => {
    router.push('/')
}

</script>



<style>

.space-link {
    margin-left: 12px; /* Ajusta el valor según necesites */
}


</style>