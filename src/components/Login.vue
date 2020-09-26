<template>
  <div class="back_body">
    <AppHeader />

    <h2>Let's Login</h2>
    <v-card
      class="card_style"
      max-width="800"
    >
      <v-form v-model="valid">
        <v-layout wrap>
          <v-flex xs12 sm6 md3><img src="@/assets/img/superman.png" width="115"></v-flex>
          <v-flex xs12 sm6 md9>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  md="12"
                >
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  md="12"
                >
                  <v-text-field
                    v-model="password"
                    :rules="emailRules"
                    label="Password"
                    required
                  ></v-text-field>
                </v-col>

              </v-row>
              <div class="back-color">
                  <v-btn href="signup" class="start">ログイン</v-btn>
              </div>
            </v-container>
          </v-flex>

        </v-layout>
      </v-form>
    </v-card>
  </div>

</template>



<script>
import AppHeader from '../components/AppHeader'

export default{
  components: {
    AppHeader,
  },
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
}
</script>


<style lang="scss" scoped>
.back_body{
  background-color: #eee;
  overflow: hidden;
  height: 100vh;
  

  h2{
    text-align: center;
    font-size: 45px;
    font-weight: 600;
    text-align: center;
    margin: 30px;
  }

  .card_style{
    margin: 30px auto;
    padding: 50px;
    border-top: 5px solid #33b5e5;

    .back-color{
      a.start{
        background-color: #329eff!important;
        font-size: 0.9rem;
        color: #fff;
        font-weight: bold;
        margin-top: 20px;
        padding: 20px;
      }
    }
  }
}
</style>