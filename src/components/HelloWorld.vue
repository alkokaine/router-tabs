<template>
  <div class="hello">
    <h1>{{ header }}</h1>
    <router-link class="nav-tab px-2" v-for="tab in tabs" :key="tab.name" :to="{ name: tab.name }">{{ tab.name }}</router-link>
    <router-view><span m-auto>Ещё ничего не выбрано</span></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    header: String,
    tabs: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
