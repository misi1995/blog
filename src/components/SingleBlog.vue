<template>
    <div id="single-blog">
        <div class="container">
            <h1>{{blog.title}}</h1>
            <ul class="list-group"></ul>
                <li class="list-group-item">
                    <article>内容：{{blog.content}}</article>
                </li>
                <li class="list-group-item">
                    <span v-for="category in blog.categories">分类：{{category}}&nbsp;&nbsp;&nbsp;</span>
                </li>
                <li class="list-group-item">
                    <p>作者:{{blog.author}}</p>
                </li>
            <ul></ul>
            <button @click="deleteBlog" class="btn btn-danger">删除博客</button>
            <router-link :to="'/blog/dist/edit/'+id" class="btn btn-default">编辑博客</router-link>
        </div>
    </div>
</template>

<script>
import axios from "axios"
    export default {
        name:"single-blog",
        data(){
            return{
                id:this.$route.params.id,
                blog:{}
            }
        },
        created(){
            axios.get("https://myblog-bafc5.firebaseio.com/posts/"+this.id+".json")
                .then((data)=>{
                    this.blog=data.data; 
                })
        },
        methods:{
            deleteBlog:function(){
                axios.delete("https://myblog-bafc5.firebaseio.com/posts/"+this.id+".json")
                .then(Response=>{
                    this.$router.push({path:"/"})
                })
            }
        }
    }
</script>

<style scoped>
#single-blog{
    margin-top:50px;
}
</style>


