<template>
  <v-container fluid class="header_class">
    <v-layout wrap class="header_inner">
      <a href="/">CarShare</a>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <div class="my-2 back-color">
          <v-btn href="profile" class="start">はじめる</v-btn>
        </div>
      </v-toolbar-items>
    </v-layout>
  </v-container>
</template>



<script>
export default{

}
</script>



<style lang="scss" scoped>
.header_class{
  background-color: #fff;

  .header_inner{
    width: 900px;
    margin: 0 auto;
    padding: 0 20px;

    a{
      font-size: 1.2rem;
      font-weight: 600;
      padding: 10px;
      margin:0;
      color: #000;
      text-decoration: none;
    }
  }
}

#app{
  .back-color{
    padding: 0 30px; 
  }

  a.start{
    background-color: #329eff;
    font-size: 0.9rem;
    color: #fff;
    font-weight: bold;
  }

  .container {
    max-width: 100%;
  }
}


</style>