<template>
  <div>
    <PostLists />


    <ul>
      <template v-for="post in posts">
        <li :key="post.id">
          <router-link :to="`/post/${post.id}`">{{ post.id }} {{ post.car_type }}</router-link>
        </li>

      </template>
    </ul>
  </div>
</template>


<script>
import posts from '../pages/postLists';
import PostLists from '../components/PostLists';

export default{
  components:{
    PostLists,
  },
  computed:{
    id(){
      return this.$route.params.id
    },
    posts(){
      return posts;
    }
  }

}
</script>


<style lang="scss" scoped>

</style>