<template>
  <div id="edit-blog">
    <div class="container">
      <h2>编辑博客</h2>
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


        <button v-on:click.prevent="post" class="btn btn-default">确认编辑博客</button>
      </form>

      <div v-if="submitted">
        <h3>博客编辑成功！</h3>
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
        id:this.$route.params.id,
      blog:{},
      authors:["Alice","Jack","Lucy"],
      submitted:false
    }
  },
  methods:{
    fetchData(){
        axios.get("https://myblog-bafc5.firebaseio.com/posts/"+this.id+".json")
            .then(response=>{
                this.blog=response.data;
            })
    },
    post:function () {
      axios.put("https://myblog-bafc5.firebaseio.com/posts/"+this.id+".json",this.blog)
      .then((data)=>{
        this.submitted=true;
      })
    }
  },
  created(){
      this.fetchData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


#edit-blog{
  margin: 50px auto;
  box-sizing: border-box;
}

</style>
