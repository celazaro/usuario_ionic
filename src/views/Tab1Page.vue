<template>
  
  <ion-page>
    <ToolbarComponent tittle="Título 1"/>
    <ion-content :fullscreen="true" class="ion-padding">
      <h1>Hoja 1</h1>

    </ion-content>
  </ion-page>
  

</template>

<script setup lang="ts">



import ToolbarComponent from '@/components/ToolbarComponent.vue';
import { IonPage, IonContent } from '@ionic/vue';




</script>
