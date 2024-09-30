<template >

    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>
                    Registrarse
                </ion-title>
                <ion-buttons slot="end">
                    <ion-button @click="Regresar"> <ion-icon :icon="arrowBackCircleOutline" ></ion-icon></ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <form @submit.prevent="Registration">
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
                                    label="Correo Electrónico"
                                    label-placement="stacked"
                                    fill="outline"
                                    shape="round"
                                    clear-input
                                    placeholder="Correo Electrónico"
                                    type="email"
                                    required
                                    v-model="email"
                                ></ion-input>
                            </ion-item>

                            <br>
                            <ion-item style="--min-height: 70px;">
                                <ion-input
                                    label="Contraseña"
                                    label-placement="stacked"
                                    fill="outline"
                                    shape="round"
                                    clear-input
                                    placeholder="*********"
                                    type="password"
                                    required
                                    v-model="password"
                                > <ion-input-password-toggle slot="end"></ion-input-password-toggle> </ion-input>
                            </ion-item>
                            <br>
                            <ion-button
                            type="submit"
                            shape="round"
                            color="primary"
                            expand="block"
                            >Registrarse</ion-button>
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

import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonInput,  IonGrid, IonRow, IonCol, IonItem, IonIcon, IonButtons, IonToast, IonInputPasswordToggle } from '@ionic/vue'

import axios from 'axios';

import { arrowBackCircleOutline, informationCircleOutline } from 'ionicons/icons';

import { ref } from 'vue'

import { useRouter } from 'vue-router';

const username = ref("")
const email = ref("")
const password = ref("")

const toastState = ref(false)
const toastMessage = ref('')


const router = useRouter();

const Registration = async () => {
    toastState.value = false
    await axios
    .post('http://127.0.0.1:8000/api/register', {
        username: username.value,
        password: password.value,
        email: email.value
    })
    .then( response => {
        toastState.value = true
        if (response.status == 200 || response.status == 201) {
            console.log('Usuario registrado correctamente!!')
            toastMessage.value = `Usuario registrado como ${username.value}!`
            router.push('/login')
        }
    })

    .catch( error => {
        toastState.value = true

        if ( error.response && error.response.status == 400 ) {
            console.log('Usuario existente')
            toastMessage.value="Usuario Existente"

        } else if (error.response && error.response.status == 500) {
            console.log ('Ingrese toda la información requerida')
            toastMessage.value="Usuario no registrado, intente nuevamente"
            

        } else {
            console.log ('Problemas con el servidor.  Vuelva a intentar más tarde!!')
            toastMessage.value="Poblemas con el servidor. Intente más tarde."           
        }
    })

    
}

const Regresar = () => {
    router.push('/login')
}

</script>



<style>

.space-link {
    margin-left: 12px; /* Ajusta el valor según necesites */
}


</style>