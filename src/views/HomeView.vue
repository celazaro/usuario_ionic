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
    <div class="logohome">
      <ion-img
        src="src/assets/images/logo_carla.png"
        alt="Hospital Notti"
        class="imagehome"
      ></ion-img>
    </div>
    
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

import { IonPage, IonContent, IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon, IonRouterOutlet, IonImg, IonTitle, IonItem, IonHeader, IonToolbar  } from '@ionic/vue'

import { logInOutline, logOutOutline } from 'ionicons/icons'

</script>




<style>

  .logohome {
    display: flex;
    justify-content: center; /* Alineación horizontal */
    align-items: center;    /* Alineación vertical */
    height:300px;          /* Altura del div */
    border: 2px solid #2d75db; /* Opcional: solo para visualizar el div */
    margin: 20px;
  
  }
  .imagehome {
    max-width: 250px;
  }

</style>