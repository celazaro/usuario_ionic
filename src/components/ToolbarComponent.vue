<template >
    <ion-header>
        <ion-toolbar>
            <ion-title> {{ tittle }} </ion-title>
            <ion-buttons slot="end">
                <ion-button @click="logout"> <ion-icon :icon="logOutOutline" ></ion-icon></ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
</template>



<script lang="ts" setup >

import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon  } from '@ionic/vue'
import { logOutOutline } from 'ionicons/icons'

import { useRouter } from 'vue-router'
import { Storage } from '@ionic/storage'

defineProps({
  tittle: String,
});

const router = useRouter()


const logout = async () => {

    const storage = new Storage()
    await storage.create()

    await storage.clear()

    await router.push('/')

}

</script>




<style>

ion-toolbar {
    --background: #b8cbf3;
}

</style>