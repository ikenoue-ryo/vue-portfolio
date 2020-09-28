<template>
  <div class="back_body">
    <AppHeader />

    <h2>Let's Post</h2>
    <v-card
      class="card_style"
      max-width="800"
    >

    <div class="file_input">
      <input type="file" ref="preview" @change="uploadFile" v-show="show">
    </div>

    <div class="image_area" v-if="url" style="position:relative">
      <div style="position:absolute" @click="deletePreview"><v-icon color="white">mdi-close</v-icon></div>
      <img :src="url">
    </div>


    <p v-for="todo in todos" :key="todo">{{todo.text}}</p>


<div class="group input_area">
   <input id="text3" type="text" placeholder="入力する" ref="text1" v-model="todoText" @keydown.enter="addTodo">
   <div class="text_underline"></div>
</div>

    </v-card>
  </div>

</template>




<script>
import AppHeader from '../components/AppHeader'

export default{
  components:{
    AppHeader
  },
  mounted(){
    this.$refs.text1.focus();
  },
  data(){
    return{
      todoText: '',
      todos: [
        {text: ''},
      ],
      url: '',
      // 画像のアップ時にfileinputを消す
      show: true,
    }
  },
  methods: {
    addTodo(){
      if (event.keyCode !== 13) return
      const todoText = this.todoText;
      this.todos.push({ text: todoText}
      );
      this.todoText= ''
    },
    uploadFile(){
      const file = this.$refs.preview.files[0];
      this.url = URL.createObjectURL(file);
      this.$refs.preview.value = '';
      // 画像のアップ時にfileinputを消す
      this.show = !this.show
    },
    deletePreview(){
      this.url = '';
      // ファイルアップロードの復活
      this.show = !this.show
    },
  }
};
</script>



<style lang="scss" scoped>
input{
  border: none;
  outline: none;
}

p{
  font-size: 1.2rem;
  font-family: Rubik, -apple-system, "Hiragino Sans", "Hiragino Kaku Gothic ProN", BlinkMacSystemFont, YuGothic, "Yu Gothic", sans-serif;
}

.file_input{
  input{
    margin-bottom: 20px;
  }
}

.back_body{
  background-color: #eee;
  overflow: hidden;
  

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

  .image_area{
    margin-bottom: 20px;

    img{
      width: 700px;
      height: 400px;
      object-fit: contain;
    }
  }
}

#text3{
    font-size: 16px;
    width: 100%;
    border: none;
    outline: none;
    padding-bottom: 8px;
    box-sizing: border-box; /*横幅の解釈をpadding, borderまでとする*/
}

.text_underline{
    position: relative; /*.text_underline::beforeの親要素*/
    border-top: 1px solid #c2c2c2; /*text3の下線*/
}

/*共通のstyle*/
.text_underline::before,
.text_underline::after{
    position: absolute; 
    bottom: 0px; /*中央配置*/
    width: 0px; /*アニメーションで0pxから50%に*/
    height: 1px; /*高さ*/
    content: '';
    background-color: #33b5e5; /*アニメーションの色*/
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
}

/*中央から右へのアニメーション*/
.text_underline::before{
    left: 50%; /*中央配置*/
}

/*中央から左へのアニメーション*/
.text_underline::after{ 
    right: 50%; /*中央配置*/
}

#text3:focus + .text_underline::before,
#text3:focus + .text_underline::after{
    width: 50%;
}

.input_area{
  margin-top: 20px;
}

.v-input{
  // position: relative;
  // left: 330px;
  font-size: 3rem;
}

</style>