<template >
<ion-page>
  <ion-header>
    <ion-toolbar>
      <ion-title class="ion-text-center">
        NUTRICIÓN PEDIÁTRICA
      </ion-title>
    </ion-toolbar>
  </ion-header>
  <br><br><br>
  <ion-content>
    <ion-grid>
      <ion-row class="ion-justify-content-center">
        <ion-col size="10" class="colimage">
          <ion-img
          :src="imageSrc"
          alt="Hospital Notti"
          ></ion-img>
        </ion-col>
      </ion-row>
    </ion-grid>

    <ion-item class="ion-text-center">
      <ion-title >
        Atendemos tu salud 
      </ion-title>
    </ion-item>
  </ion-content>
  
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

import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon, IonRouterOutlet, IonImg, IonTitle, IonItem, IonHeader, IonToolbar } from '@ionic/vue'

import { logInOutline, logOutOutline } from 'ionicons/icons'

import { ref } from 'vue'

const imageSrc = ref('src/assets/images/logo_carla.png');


</script>




<style>

.colimage {
  border: solid 2px #1939f0;
  max-height: 300px;
  margin-bottom: 20px;
  overflow: hidden; 
  display: flex;
  justify-content: center;
  align-items: center;
}
.colimage ion-img {
  max-width: 350px;    /* La imagen no superará el ancho del contenedor */
  height: 350px;   /* La imagen no superará el alto del contenedor */
  
}

</style>