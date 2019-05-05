<template>
  <div id="add-blog">
    <div class="container">
      <h2>写博客</h2>
      <form v-if="!submitted"> 
        <div class="form-group">
          <label>博客主题：</label>
          <input type="text" v-model="blog.title" required class="form-control"/>
        </div>
        <div class="form-group">
          <label>博客内容：</label>
          <textarea v-model="blog.content" class="form-control"></textarea>
        </div>
        <div class="form-group">
          <label>分类：</label>
          <div id="checkboxes">
            <label>Vue.js</label>
            <input type="checkbox" value="Vue.js" v-model="blog.categories">
            <label>React.js</label>
            <input type="checkbox" value="React.js" v-model="blog.categories">
            <label>Angular.js</label>
            <input type="checkbox" value="Angular.js" v-model="blog.categories">
            <label>Node.js</label>
            <input type="checkbox" value="Node.js" v-model="blog.categories">
          </div>
        </div>
        <div class="form-group">
          <label>作者:</label>
          <select v-model="blog.author" class="form-control">
            <option v-for="author in authors">{{author}}</option>
          </select>
        </div>
          <button v-on:click.prevent="post" class="btn btn-default">发布博客</button>
        <!-- </div> -->
      </form>

      <div v-if="submitted">
        <h3>博客发布成功！</h3>
      </div>
  
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'add-blog',
  data () {
    return {
      blog:{
        title:"",
        content:"",
        categories:[],
        author:""
      },
      authors:["Alice","Jack","Lucy"],
      submitted:false
    }
  },
  methods:{
    post:function () {
      axios.post("https://myblog-bafc5.firebaseio.com/posts.json",this.blog)
      .then((data)=>{
        this.submitted=true;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#add-blog{
  margin: 50px auto;
  box-sizing: border-box;
}
</style>
