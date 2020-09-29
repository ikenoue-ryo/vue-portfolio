<template>
  <v-container fluid class="header_class">
    <v-layout wrap class="header_inner">
      <a href="/">CarShare</a>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <div class="back-color">
          <v-row>
            <div class="search_form">
              <div class="search_icon">
                <v-fa :icon="['fas', 'search']" class="search_icon" />
              </div>
              <v-text-field
                label="検索..."
              >
              </v-text-field>
            </div>
          <v-btn href="signup" class="start">はじめる</v-btn>
          </v-row>
        </div>
      </v-toolbar-items>
    </v-layout>
  </v-container>
</template>



<script>
export default{

}
</script>



<style lang="scss">
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

    a.start{
      background-color: #329eff!important;
      font-size: 0.9rem;
      color: #fff;
      font-weight: bold;
      margin-top: 8px;
    }
  }
}

.back-color{
  .search_form{
    position: relative;
    bottom: 5px;

    .v-input{
      display: inline-block;
      float: left;
      margin-right: 10px;
      padding-top: 10px;
      height: 43px;
    }

    .search_icon{
      font-size: 27px !important;
      width: 33px;
      display: inline-block;
      float: left;
      padding: 12px 6px 0 5px;
    }
  }
}

#app{
  .container {
    max-width: 100%;
  }
}


</style>