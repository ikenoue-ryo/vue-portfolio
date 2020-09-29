<template>
  <div class="car_type">
    <h2>CAR SELECT</h2>

    <v-tabs
      background-color="#eee"
      color="#329eff"
      centered
    >
      <v-tab class="font_style">TOYOTA</v-tab>
      <v-tab class="font_style">HONDA</v-tab>
      <v-tab class="font_style">MAZDA</v-tab>

      <v-tab-item
        v-for="n in 3"
        :key="n"
      >
        <v-container fluid pa-0 class="mt-5">
          <v-row>
            <v-col cols="12" md="4" class="pa-2" v-for="car_type in car_types" :key="car_type.id">
              <v-hover
                v-slot:default="{ hover }"
                close-delay="200"
              >
                <v-card 
                  class="py-3 { 'on-hover': hover }"
                  :elevation="hover ? 12 : 2"
                  :href="car_type.en_name"
                >
                  <!-- <img v-bind:src="car_type.images"/> -->
                  <v-img :src="car_type.images" width=280 height=160></v-img>
                  <div class="card-body">
                    <h3 class="my-3">{{ car_type.jp_name }}</h3>
                    <p class="card-text text-uppercase">低燃費, 5人乗り, 駐無料</p>
                  </div>
                </v-card>
              </v-hover>

              <!-- <ul>
              <template v-for="car_type in car_types">
                <li :key="car_type.id">
                  <router-link :to="`/car-type/${car_type.id}`">
                  {{ car_type.name }}
                  </router-link>
                </li>
              </template>
              </ul> -->

            </v-col>
            <!-- <v-col cols="12" md="4" class="pa-2">
              <v-hover
                v-slot:default="{ hover }"
                close-delay="200"
              >
                <v-card 
                  class="py-3 { 'on-hover': hover }"
                  :elevation="hover ? 12 : 2"
                  href="/car-type/2"
                >
                  <v-img :src="`https://toyota.jp/pages/contents/prius/004_p_007/4.0/image/car-viewer/24_5_7/24_5_7_030_c.jpg`" width=280 height=160></v-img>
                  <div class="card-body">
                    <h3 class="my-3">プリウス</h3>
                    <p class="card-text text-uppercase">低燃費, 5人乗り</p>
                  </div>
                </v-card>
              </v-hover>
            </v-col>
            <v-col cols="12" md="4" class="pa-2">
              <v-hover
                v-slot:default="{ hover }"
                close-delay="200"
              >
                <v-card 
                  class="py-3 { 'on-hover': hover }"
                  :elevation="hover ? 12 : 2"
                  href="/car-type/3"
                >
                  <v-img :src="`https://toyota.jp/pages/contents/voxy/003_p_007/4.0/image/car-viewer/11_1_1/11_1_1_030_c.jpg`" width=280 height=160></v-img>
                  <div class="card-body">
                    <h3 class="my-3">ヴォクシー</h3>
                    <p class="card-text text-uppercase">7人乗り</p>
                  </div>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="4" class="pa-2">
              <v-hover
                v-slot:default="{ hover }"
                close-delay="200"
              >
                <v-card 
                  class="py-3 { 'on-hover': hover }"
                  :elevation="hover ? 12 : 2"
                  href="/car-type/4"
                >
                  <v-img :src="`https://toyota.jp/pages/contents/sienta/002_p_003/4.0/image/car-viewer/15_24_2/15_24_2_030_c.jpg`" width=280 height=160></v-img>
                  <div class="card-body">
                    <h3 class="my-3">シエンタ</h3>
                    <p class="card-text text-uppercase">7人乗り, 駐無料</p>
                  </div>
                </v-card>
              </v-hover>
            </v-col>
            <v-col cols="12" md="4" class="pa-2">
              <v-hover
                v-slot:default="{ hover }"
                close-delay="200"
              >
                <v-card 
                  class="py-3 { 'on-hover': hover }"
                  :elevation="hover ? 12 : 2"
                  href="/car-type/5"
                >
                  <v-img :src="`https://toyota.jp/pages/contents/aqua/001_p_011/4.0/image/car-viewer/1_6_9/1_6_9_030_c.jpg`" width=280 height=160></v-img>
                  <div class="card-body">
                    <h3 class="my-3">アクア</h3>
                    <p class="card-text text-uppercase">低燃費, ハイブリッド</p>
                  </div>
                </v-card>
              </v-hover>
            </v-col>
            <v-col cols="12" md="4" class="pa-2">
              <v-hover
                v-slot:default="{ hover }"
                close-delay="200"
              >
                <v-card 
                  class="py-3 { 'on-hover': hover }"
                  :elevation="hover ? 12 : 2"
                  href="/car-type/6"
                >
                  <v-img :src="`https://toyota.jp/pages/contents/alphard/003_p_009/image/car-viewer/9_20_6/9_20_6_030_c.jpg`" width=280 height=160></v-img>
                  <div class="card-body">
                    <h3 class="my-3">アルファード</h3>
                    <p class="card-text text-uppercase">7人乗り, 駐無料</p>
                  </div>
                </v-card>
              </v-hover>
            </v-col> -->
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </div>
</template>


<script>
import car_types from '../pages/carTypes';

export default{
  computed:{
    car_types(){
      return car_types;
    }
  },
}
</script>


<style lang="scss" scoped>
.car_type{
  width: 900px;
  margin: 0 auto;
  padding: 0 20px;
  margin-bottom: 80px;

  h2{
    font-size: 2.0rem;
    font-weight: 600;
    text-align: center;
    margin: 30px;
  }

  h3{
    font-size: 1.2rem;
  }

  .card-body{
    padding: 10px 20px;

    h3{
      color: #000;
    }

    p{
      font-size: 0.9rem;
      color: grey;
      margin: 0;
    }
  }

  .font_style{
    font-size: 1.0rem;
    font-weight: 600;
  }
}

.container {
  background-color: #eee;
}

.v-card:not(.on-hover) {
  transition: .2s ease-in-out;
  color: white;
}

</style>