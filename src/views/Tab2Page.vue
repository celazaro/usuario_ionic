<template>
  <ion-page>
    <ToolbarComponent tittle="Título 2"/>
    <ion-content :fullscreen="true" class="ion-padding">
      <h1>Hoja 2</h1>
   
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';

import ToolbarComponent from '@/components/ToolbarComponent.vue';

</script>
