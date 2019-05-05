<template>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">My Simple Blog</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><router-link to="/" exact>博客</router-link></li>
            <li><router-link to="/add" exact>写博客</router-link></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    </div>
        
        
      </div>
</template>

<script>
export default {
  name: 'blog-header',
  data () {
    return{
    }
  },
  methods:{
  },
  created(){
      
  },
  computed:{
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
  margin-left: 50px;
}
</style>
