<template>
<div class="container">
  <div v-theme="'wide'" id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索博客" class="form-control">

    <div class="panel panel-default" v-for="blog in filteredBlogs">
        <div class="panel-heading">
            <router-link v-bind:to="'/blog/'+blog.id">
                <h2 class="panel-title">{{blog.title | to-uppercase}}</h2>
            </router-link>
            <!-- <h3 class="panel-title">Panel title</h3> -->
        </div>
        <div class="panel-body">{{blog.content}}</div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios"
export default {
  name: 'show-blogs',
  data () {
    return{
        blogs:[],
        search:''
    }
  },
  methods:{
    
  },
  created(){
      axios.get("https://myblog-bafc5.firebaseio.com/posts.json")
      .then(function(data){
          return data.data;
      })
      .then((data)=>{
          var blogsArray=[];
          for(let key in data){
              data[key].id=key;
              blogsArray.push(data[key]);
          }
          this.blogs=blogsArray;
      })
  },
  computed:{
      filteredBlogs:function(){
          return this.blogs.filter((blog)=>{
              return blog.title.match(this.search);
          })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#show-blogs{
    margin-top:80px;
}

.form-control:focus{
    border-color:#222;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(34,34,34,.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(34,34,34,.6);
}

.panel{
    margin-top:8px;
    border-top:1px solid #ddd;
}

.panel-heading a{
    text-decoration: none;
}

.panel-heading a:hover{
    color:#222;
}
</style>
