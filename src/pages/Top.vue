<template>
  <v-app>
    <AppHeader />
    <AppMain />
    <carType />
    <carRecommend />
    <userNearby />
    <AppFooter />
  </v-app>
</template>


<script>
import AppHeader from '../components/AppHeader'
import AppMain from '../components/AppMain'
import carType from '../components/carType'
import carRecommend from '../components/carRecommend'
import userNearby from '../components/userNearby'
import AppFooter from '../components/AppFooter'

export default{
  components: {
    AppHeader,
    AppMain,
    carType,
    carRecommend,
    userNearby,
    AppFooter,
  }
}
</script>


<style lang="scss" scoped>
#app{
    font-family: Rubik, "Noto Sans JP", sans-serif; 
    // Arial, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Osaka, メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
    background-color: #eee;
}

.container {
  max-width: 900px;
}

.fullheight {
    height: 100%;
}
</style>