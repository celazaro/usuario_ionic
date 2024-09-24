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
                                ></ion-input>
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
        </ion-content>
    </ion-page>


</template>



<script lang="ts" setup >

import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonInput,  IonGrid, IonRow, IonCol, IonItem, IonIcon, IonButtons, } from '@ionic/vue'

import { arrowBackCircleOutline } from 'ionicons/icons';

import { ref } from 'vue'

import { useRouter } from 'vue-router';

const username = ref("")
const email = ref("")
const password = ref("")


const router = useRouter();

const Registration = async () => {
    
    console.log('Usuario Registrado!!')
    await router.push('/login')
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