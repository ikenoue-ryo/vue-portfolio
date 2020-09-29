<template>
  <v-app>
    <AppHeader />

    <div class="back_body">
      <h2>Let's Ride {{ car_type.en_name }}</h2>

      <v-container fluid class="back_color">
        <v-content>
          <v-card href="/post/1" style="border">
          <v-container>
            <v-layout wrap>
              <v-flex xs12 sm6 md5>

                <div class="back_size" style="width:300px;">
                  <v-carousel v-model="model" height="200px" width="300px">
                    <v-carousel-item
                      style="width: 300px;"
                      v-for="(photo) in photos"
                      :key="photo"
                    >
                      <v-sheet
                        :photo="photo"
                        tile
                      >
                        <v-row
                          class="fill-height"
                          align="center"
                          justify="center"
                        >
                          <div class="display-3">
                            <v-img 
                            :src="photo.image"
                            max-width=300 class="rounded-lg"
                            ></v-img>
                          </div>
                        </v-row>
                      </v-sheet>
                    </v-carousel-item>
                  </v-carousel>
                </div>

              </v-flex>
              <v-flex xs12 sm6 md7>
                <div class="card_detail">
                    <div class="card_info">
                      <h3>福岡市中央区博多区</h3>
                      <ul>
                        <li>24h貸し出し可能</li>
                        <li>クルーズコントロール、カーナビ、TOYOTAセーフティ機能付</li>
                        <li>TOYOTAセーフティ機能付</li>
                        <li>定員5人OK</li>
                      </ul>
                      <ul class="tag clearfix">
                        <li>1ヶ月間貸し出しOK</li>
                        <li>駐車場無料使用OK</li>
                      </ul>
                      <div class="price">8,700<span class="yen"> 円/(月額)</span></div>
                    </div>
                  </div>
              </v-flex>
            </v-layout>
          </v-container>
          </v-card>
        </v-content>
      </v-container>

      <v-container fluid class="back_color">
        <v-content>
          <v-card href="/post/1" style="border">
          <v-container>
            <v-layout wrap>
              <v-flex xs12 sm6 md5>

                <div class="back_size" style="width:300px;">
                  <v-carousel v-model="model" height="200px" width="300px">
                    <v-carousel-item
                      style="width: 300px;"
                      v-for="(photo) in photos"
                      :key="photo"
                    >
                      <v-sheet
                        :photo="photo"
                        tile
                      >
                        <v-row
                          class="fill-height"
                          align="center"
                          justify="center"
                        >
                          <div class="display-3">
                            <v-img 
                            :src="photo.image"
                            max-width=300 class="rounded-lg"
                            ></v-img>
                          </div>
                        </v-row>
                      </v-sheet>
                    </v-carousel-item>
                  </v-carousel>
                </div>

              </v-flex>
              <v-flex xs12 sm6 md7>
                <div class="card_detail">
                    <div class="card_info">
                      <h3>福岡市中央区博多区</h3>
                      <ul>
                        <li>24h貸し出し可能</li>
                        <li>クルーズコントロール、カーナビ、TOYOTAセーフティ機能付</li>
                        <li>TOYOTAセーフティ機能付</li>
                        <li>定員5人OK</li>
                      </ul>
                      <ul class="tag clearfix">
                        <li>1ヶ月間貸し出しOK</li>
                        <li>駐車場無料使用OK</li>
                      </ul>
                      <div class="price">8,700<span class="yen"> 円/(月額)</span></div>
                    </div>
                  </div>
              </v-flex>
            </v-layout>
          </v-container>
          </v-card>
        </v-content>
      </v-container>

      <v-container fluid class="back_color">
        <v-content>
          <v-card href="/post/1" style="border">
          <v-container>
            <v-layout wrap>
              <v-flex xs12 sm6 md5>

                <div class="back_size" style="width:300px;">
                  <v-carousel v-model="model" height="200px" width="300px">
                    <v-carousel-item
                      style="width: 300px;"
                      v-for="(photo) in photos"
                      :key="photo"
                    >
                      <v-sheet
                        :photo="photo"
                        tile
                      >
                        <v-row
                          class="fill-height"
                          align="center"
                          justify="center"
                        >
                          <div class="display-3">
                            <v-img 
                            :src="photo.image"
                            max-width=300 class="rounded-lg"
                            ></v-img>
                          </div>
                        </v-row>
                      </v-sheet>
                    </v-carousel-item>
                  </v-carousel>
                </div>

              </v-flex>
              <v-flex xs12 sm6 md7>
                <div class="card_detail">
                    <div class="card_info">
                      <h3>福岡市中央区博多区</h3>
                      <ul>
                        <li>24h貸し出し可能</li>
                        <li>クルーズコントロール、カーナビ、TOYOTAセーフティ機能付</li>
                        <li>TOYOTAセーフティ機能付</li>
                        <li>定員5人OK</li>
                      </ul>
                      <ul class="tag clearfix">
                        <li>1ヶ月間貸し出しOK</li>
                        <li>駐車場無料使用OK</li>
                      </ul>
                      <div class="price">8,700<span class="yen"> 円/(月額)</span></div>
                    </div>
                  </div>
              </v-flex>
            </v-layout>
          </v-container>
          </v-card>
        </v-content>
      </v-container>

      <v-container fluid class="back_color">
        <v-content>
          <v-card href="/post/1" style="border">
          <v-container>
            <v-layout wrap>
              <v-flex xs12 sm6 md5>

                <div class="back_size" style="width:300px;">
                  <v-carousel v-model="model" height="200px" width="300px">
                    <v-carousel-item
                      style="width: 300px;"
                      v-for="(photo) in photos"
                      :key="photo"
                    >
                      <v-sheet
                        :photo="photo"
                        tile
                      >
                        <v-row
                          class="fill-height"
                          align="center"
                          justify="center"
                        >
                          <div class="display-3">
                            <v-img 
                            :src="photo.image"
                            max-width=300 class="rounded-lg"
                            ></v-img>
                          </div>
                        </v-row>
                      </v-sheet>
                    </v-carousel-item>
                  </v-carousel>
                </div>

              </v-flex>
              <v-flex xs12 sm6 md7>
                <div class="card_detail">
                    <div class="card_info">
                      <h3>福岡市中央区博多区</h3>
                      <ul>
                        <li>24h貸し出し可能</li>
                        <li>クルーズコントロール、カーナビ、TOYOTAセーフティ機能付</li>
                        <li>TOYOTAセーフティ機能付</li>
                        <li>定員5人OK</li>
                      </ul>
                      <ul class="tag clearfix">
                        <li>1ヶ月間貸し出しOK</li>
                        <li>駐車場無料使用OK</li>
                      </ul>
                      <div class="price">8,700<span class="yen"> 円/(月額)</span></div>
                    </div>
                  </div>
              </v-flex>
            </v-layout>
          </v-container>
          </v-card>
        </v-content>
      </v-container>

    </div>

    
  </v-app>
</template>

<script>
import AppHeader from '../components/AppHeader';
import car_types from '../pages/carTypes';

export default {
  components:{
    AppHeader,
  },
  data () {
    return {
    model: 0,
    photos: [
        {
          image: 'https://lh3.googleusercontent.com/pw/ACtC-3fYdGWASYQcPttnU6cGD7OJeQdCnuEIZciUb69jMDYucp4WAq9G8Lcph2Iybng0DapIWhI3GN4LLKcRe_qOuWZ21e88v0aZMCba71WmCcEIZdleUWFozU23JI8rTv3aG9v8Ujxhmgw0qZmiKWSptupq=w1880-h1410-no?authuser=0'
        },
        {
          image: 'https://lh3.googleusercontent.com/pw/ACtC-3fTv4VZI0rjLUvkqhvgNV9IYHAHdLPXuwnBmNSuk1hY9DqdGWwL0sh-fcTjhn8m9Vte1R35Z9yvE1CX0FTt9ancMw3NWJwgMJHpyzBYkhPmw_2l-67WI9ihdQXyBXAgTimz1PpllqcUi4afc4P5SSjM=w1880-h1410-no?authuser=0'
        },
        {
          image: 'https://lh3.googleusercontent.com/pw/ACtC-3fFxuGkyQ4Ptks6YZFZlxa4nFK-p6MiJqzBZw2xKBy5xapGGJ3wVNKpr8EZg9Og1ygvhTbW_fhaLBTck4pb48gAg5I8FLqeoJrIudbkGrWsg1V94ZY2CrbpJ2vs9oHbfNREoecvsk42en5VNVaHbIuV=w1880-h1410-no?authuser=0'
        },
        {
          image: 'https://lh3.googleusercontent.com/pw/ACtC-3c5-mYefFGUMD7SzqHCDAnhRrlGf7HhV7xNHI6WCN1Nm_-VWCXM4xGoLLy6HzaMMnGtxcQ7Ws82jfZVJLPCbDl5fbXRE2xMaPesT40Y3DKGZhGlu7UxYfv3BZHzh_EnwsnMuhRE_8RM_pWqzVWV4fHq=w1880-h1410-no?authuser=0'
        },
        {
          image: 'https://lh3.googleusercontent.com/pw/ACtC-3fcS4fX1FG55xLgw55LvePc5CpqLW1HN5ruL3Awcu8mvRCq-YuJ0E4pnzgTJ5reJ1FOmtYtQ6RaXrcS6LjvOhySGSu-cuipRO5sqrJbnFq_cnbh4ZHb1vXCEFJl71ilcct9oDCe6DjngIY40x5DSsjA=w1880-h1410-no?authuser=0'
        },
      ],
    }
  },
  computed:{
    car_types(){
      return this.$route.params.en_name
    },
    car_type(){
      return car_types.find(car_type => car_type.en_name === this.car_types)
    },
  }
}
</script>


<style lang="scss" scoped>
.container{
  background: #fff;

  a{
    padding: 20px;
  }
}

.back_body{
  background-color: #eee;
  overflow: hidden;
  

  h2{
    font-size: 45px;
    font-weight: 600;
    text-align: center;
    margin: 30px;
  }

  .back_color {
    background-color: #eee;
    overflow: hidden;
    width: 900px;
  }
}

.header_class {
  font-family: Rubik, "Noto Sans JP", sans-serif;
}

.price {
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 1.2rem;
  font-weight: 500;
  margin: 10px 0;
  text-align: right;

  span.yen {
    font-size: 0.9rem;
  }
}

.card_info{
  h3{
    font-size: 1rem;
    margin-bottom: 10px;
  }

  ul.tag {
    margin: 0;
    padding: 0;

    li {
        display: inline-block;
        float: left;
        font-size: 0.8rem;
        margin: 0 5px;
        padding: 3px 10px;
        border-radius: 6px;
        font-weight: 500;
        border: solid 2px #dce4ec;
        font-weight: 600;
        position: relative;
        top: 43px;
    }
  }
}

.clearfix::after {
   content: "";
   display: block;
   clear: both;
}

</style>