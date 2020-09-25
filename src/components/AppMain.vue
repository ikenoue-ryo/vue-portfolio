<template>
  <v-container fluid>
    <v-layout wrap>
        <div>
          <v-carousel cycle interval="4000" class="rounded-lg">
            <v-carousel-item
              v-for="(photo) in photos"
              :key="photo"
            >
              <v-row>
                <v-col class="mt-3">
                  <v-img 
                  :src="photo.image"
                  max-width=860 class="rounded-lg"
                  ></v-img>
                </v-col>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </div>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        photos: [
          {
            image: 'https://www.honda.co.jp/top-page/common/img/visual/FIT_200213.jpg'
          },
          {
            image: 'https://tk.ismcdn.jp/mwimgs/2/8/1140/img_285d39a114000a05feb109d7fb224bde302851.jpg'
          },
          {
            image: 'https://media.safarilounge.jp/online/thegear/content/theme/img/org/article/947/slider_5b0d3ad0b6c83_2.jpg?t=1577411173'
          },
          {
            image: 'https://www.honda.co.jp/top-page/common/img/visual/FIT_200213.jpg'
          },
          {
            image: 'https://tk.ismcdn.jp/mwimgs/2/8/1140/img_285d39a114000a05feb109d7fb224bde302851.jpg'
          },
        ],
      }
    },
  }
</script>

<style scoped>


</style>