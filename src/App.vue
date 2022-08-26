<template>
  <div id="app" class="container d-flex">
    <nav class="col col-2">
      <div v-if="selected.children">
        <p>{{ selected.text }}</p>
        <router-link class="nav-link px-2" v-for="item in selected.children" :key="item.path" :to="{ name: item.path }">{{ item.text }}</router-link>
      </div>
      <router-link class="nav-link px-2" v-for="item in menulist" :key="item.path" :to="item.path" @click.capture.native="setselected($event, item)">{{ item.text }}</router-link>
    </nav>
    <router-view class="container col col-6"/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selected: Object,
        menulist: [
          { 
            path: '/event', 
            text: 'Событие', 
            children: [
              { path: 'sub-event-1', text: 'Подменю события №1' },
              { path: 'sub-event-2', text: 'Подменю события №2' },
              { path: 'sub-event-3', text: 'Подменю события №3' }
            ] 
          },
          { 
            path: '/meeting', 
            text: 'Заседание',
            children: [
              { path: 'sub-meeting-1', text: 'Подменю Заседание №1' },
              { path: 'sub-meeting-2', text: 'Подменю Заседание №2' },
              { path: 'sub-meeting-3', text: 'Подменю Заседание №3' }
            ] },
          { 
            path: '/b-trip', 
            text: 'Командировка',
            children: [
              { path: 'sub-b-trip-1', text: 'Подменю Командировка №1' },
              { path: 'sub-b-trip-2', text: 'Подменю Командировка №2' },
              { path: 'sub-b-trip-3', text: 'Подменю Командировка №3' }
            ]
          }
        ]
      }
    },
    methods: {
      setselected (event, item) {
        this.selected = item
      }
    }
  }
</script>

<style>
 @import '~bootstrap/dist/css/bootstrap.min.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
