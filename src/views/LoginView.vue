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
                                    label="Contraseña"
                                    label-placement="stacked"
                                    fill="outline"
                                    shape="round"
                                    clear-input
                                    placeholder="*********"
                                    type="password"
                                    required
                                    v-model="password"
                                ></ion-input>
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

            
        </ion-content>
    </ion-page>


</template>



<script lang="ts" setup >

import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons,  IonButton, IonInput,  IonGrid, IonRow, IonCol, IonItem, alertController, IonIcon } from '@ionic/vue'
import { homeOutline } from 'ionicons/icons';

import { ref } from 'vue'

import { useRouter } from 'vue-router';

const username = ref("")
const password = ref("")


const router = useRouter();

const Login = async () => {
    if (username.value =='celazaro' && password.value == 'contraseña') {
        
        username.value=""
        password.value=""

        console.log('Ingreso perfecto!!')
        await router.push('/tabs/')


    } else {
        console.log('No puede ingresar, error en sus datos.  Pruebe Nuevamente.')

        const alert = await alertController.create({
        header: 'Login',
        subHeader: 'Datos ingresados no corresponden',
        message: 'Intente nuevamente.  Muchas gracias!!',
        buttons: ['Regresar']
        });
        await alert.present();

        username.value=""
        password.value=""
    }
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