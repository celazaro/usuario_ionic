<template >
    <ion-page class="ion-padding">
        <div>
            <h1>Página de Inicio</h1>
        </div>

        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>

            <ion-tab-bar slot="bottom">
              <ion-tab-button tab="tab1" href="/login">
                <ion-icon aria-hidden="true" :icon="logInOutline" />
                <ion-label>Login</ion-label>
              </ion-tab-button>
      
              <ion-tab-button tab="tab2" href="/registration">
                <ion-icon aria-hidden="true" :icon="logOutOutline" />
                <ion-label>Registrarse</ion-label>
              </ion-tab-button>
      
              
            </ion-tab-bar>
        </ion-tabs>

    </ion-page>

    
</template>



<script lang="ts" setup >

import { IonPage, IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon, IonRouterOutlet  } from '@ionic/vue'

import { logInOutline, logOutOutline } from 'ionicons/icons'

</script>




<style>
    
</style>