<template>
  <div>
    <PostDetails />
    <AppHeader />
    <!-- <p>{{ author }}</p>
    <p>{{ car_type }}</p>
    <p>{{ title }}</p>
    <p>{{ text }}</p> -->

    <div class="back_body">
      <h2>Let's Ride</h2>

      <div class="sns_photo">
        <!-- SNSアイコン -->
        <div class="sns_back clearfix">
          <div class="sns_icons">
            <v-fa :icon="['fab', 'facebook']" class="fb_icon" />
            <v-fa :icon="['fab', 'twitter']"  class="tw_icon" />
            <v-fa :icon="['fab', 'instagram']" class="ig_icon" />
            <v-fa :icon="['fab', 'linkedin']" class="li_icon" />
            <v-fa :icon="['fab', 'pinterest']" class="pi_icon" />
          </div>
        </div>
        <!-- SNSアイコン -->

        <v-app>
          <v-container fluid class="back_color">
            <v-layout wrap class="main_img">
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
                          max-width=680 class="rounded-lg"
                          ></v-img>
                        </v-col>
                      </v-row>
                    </v-carousel-item>
                  </v-carousel>
                </div>
            </v-layout>

            <v-row>
              <v-col class="blog_text">
              <h2>フィット基本情報！</h2>
                <ul>
                  <li>満タン時の走行距離：20km</li>
                  <li>駆動方式：2WD</li>
                  <li>色：ホワイト</li>
                  <li>エンジン：ガゾリン</li>
                  <li>定員数：5名</li>
                </ul>
              </v-col>
            </v-row>

            <v-row>
              <v-col class="blog_text">
                <h2>お気に入りポイント</h2>
                <img src="https://lh3.googleusercontent.com/pw/ACtC-3fFxuGkyQ4Ptks6YZFZlxa4nFK-p6MiJqzBZw2xKBy5xapGGJ3wVNKpr8EZg9Og1ygvhTbW_fhaLBTck4pb48gAg5I8FLqeoJrIudbkGrWsg1V94ZY2CrbpJ2vs9oHbfNREoecvsk42en5VNVaHbIuV=w1880-h1410-no?authuser=0">
                <ul>
                  <li>24h貸し出しOK</li>
                  <li>アメニティ・設備が豊富</li>
                  <li>クルーズコントロールでエコ運転</li>
                  <li>走行中が静かで快適</li>
                  <li>通勤や旅行に最適</li>
                </ul>
              </v-col>
            </v-row>

            <v-row>
              <v-col class="blog_text">
                <h2>快適で綺麗なシートです！</h2>
                <img src="https://lh3.googleusercontent.com/pw/ACtC-3dfmA4TDrOrcfUJcsoT31J0_2429e-AZfu0Y3FWTIxuMdER2JGB6J6NsUf_fhwBzDTsEZmT_qqBcHdgyvzw9EWaPTaUchZ32UVw0ls7weCX2zlghD2jWD8NKD8r0XaAh489qTe4VRI7SX35EYzzHO42=w1880-h1410-no?authuser=0">
                <p>まだ買ったばかりなので、かなり綺麗な方だと思います。</p>
                <p>運転席は結構広いのでひざを伸ばしても座ることができますよ。</p>
                <p>後部座席も乗ってみると意外と広いと思います！</p>
              </v-col>
            </v-row>

            <v-row>
              <v-col class="blog_text">
                <h2>荷物もかなり入ります！</h2>
                <img src="https://lh3.googleusercontent.com/pw/ACtC-3de3_BtG2nFngd5HA_iKz3YcOWD1DC6zi-DdKEFUUi3K-Md4wzcKjSZVR5FRKuUQpIF-CLCeOSq-co6IYg2KVz72uHdevlSNBqiKMXkXAKbE0k4-_xEP5bQeyfUGIvRhL0ViR48a52zHX9YMh3YUR6J=w1058-h1410-no?authuser=0">
                <p>こんな感じで結構広いのでゴルフバックなら3つほど入るような感じです。</p>
              </v-col>
            </v-row>

          <v-layout wrap class="profile">
            <v-flex xs12 sm6 md2>
              <div class="icon">
                <img src="https://d20r2glx6euv0l.cloudfront.net/avatar/6ebeed36dc.jpeg">
              </div>
            </v-flex>
            <v-flex xs12 sm6 md10>
              <div class="pr_profile">
                <p class="prof_name">長谷川 大輔</p>
                <p>車好きの中でも車を愛している方です！いつも車内を綺麗に掃除するのが日課になってます。笑
                ぜひ、僕の愛車で旅行などを楽しんでもらえたら嬉しいです！ご質問あれば連絡ください。</p>
              </div>
            </v-flex>
          </v-layout>

            

          </v-container>
        </v-app>
      </div>

      <AppFooter />

    </div>
  </div>
</template>


<script>
import PostDetails from '../components/PostDetails'
import AppHeader from '../components/AppHeader'
import posts from '../pages/postLists';
import AppFooter from '../components/AppFooter'


export default{
  components:{
    PostDetails,
    AppHeader,
    AppFooter,
  },
  data () {
      return {
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
    id(){
      return Number(this.$route.params.id);
    },
    post(){
      const post = posts.find(posts => posts.id === this.id);
      if (!post) {
        return {
          author: '見つかりません',
          car_type: '',
          title: '',
          text: '',
        };
      }
      return post
    },
    author(){
      return this.post.author
    },
    car_type(){
      return this.post.car_type
    },
    title(){
      return this.post.title
    },
    text(){
      return this.post.text
    },
  }

}
</script>


<style lang="scss" scoped>
#app{
  font-family: Rubik, -apple-system, "Hiragino Sans", "Hiragino Kaku Gothic ProN", BlinkMacSystemFont, YuGothic, "Yu Gothic", sans-serif;
  position: relative;
  top: -30px;
  width: 700px;
  margin: 0 auto;
}

.back_color {
  background-color: #eee;
  overflow: hidden;
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
}

.main_img{
  width: 860px;
  margin: 0 auto;
}

.post-car {
  position: relative;
  top: 0;
  right: 0;

  i{
    font-size: 3.0rem;
    margin-left: 26px;
  }
}

.post-car a.btn--circle {
  border-radius: 50%;
  line-height: 100px;
  width: 100px;
  height: 100px;
  padding: 0;
  -webkit-box-shadow: 0 5px 0 #26a69a;
  box-shadow: 0 5px 0 #26a69a;
  background: #30cfc0;
  color: #fff;
  font-size: 1.2rem;
  text-decoration: none;
}

.post-car a.btn--circle:hover {
  -webkit-transform: translate(0, 3px);
  transform: translate(0, 3px);
  -webkit-box-shadow: 0 2px 0 #26a69a;
  box-shadow: 0 2px 0 #26a69a;
}

.post-car a.user-post {
  position: fixed;
  bottom: 20px;
  right: 110px;
  z-index: 10;
}

.post-car .fa, .post-car .fas {
  font-size: 2.5rem;
  position: relative;
  top: 9px;
}

.sns_back {
  display: inline-block;
  float: left;
}

.sns_photo{
  width: 780px;
  margin: 0 auto;

  .blog_text{
    font-size: 1.2rem;
    padding: 20px;

    h2{
      font-size: 1.4rem;
      font-weight: 600;
      text-align: left;
      margin: 20px 0;
    }

    img{
      width: 100%;
      margin-bottom: 20px;
      border-radius: 10px;
    }

    ul{
      line-height: 2.5;
    }
  }
}


.sns_back .sns_icons {
  font-size: 2.5rem;
  width: 50px;
  display: inline-block;
  float: left;

  .fb_icon{
    color: #3b5998;
  }
  .tw_icon{
    color: #2196f3;
  }
  .ig_icon{
    color: #e91e63;
  }
  .li_icon{
    color: #2867B2;
  }
  .pi_icon{
    color: #f44336;
  }
}

.profile{
  border: solid 2px #dce4ec;
  padding: 40px;
  border-radius: 10px;
  background: #fff;
  margin-bottom: 100px;
  
  .icon{
    width: 80px;
    display: inline-block;
    float: left;
    height: 130px;
  }

  img{
    width: 70px;
    border-radius: 50%;
    border: 1px solid grey;
  }

  .pr_profile{
    p.prof_name {
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
}

.clearfix::after {
   content: "";
   display: block;
   clear: both;
}
</style>