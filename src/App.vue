<script setup>
import Sidebar from '../src/components/Sidebar.vue'
</script>

<template>
  <div class="app">
    <!-- sidebar -->
    <!-- <main> -->
      <Sidebar class="sidebar" />
    <!-- </main> -->
    <!-- <main> -->
      <router-view v-slot="{ Component }" >
        <transition name="route" mode="out-in">
            <component :is="Component"></component>
        </transition>
      </router-view>
    <!-- </main> -->
  </div>
</template>

<style lang="scss">
:root {
  --primary: #4ade80;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira Sans', sans-serif;
}

body {
  // background-color: var(--light);
}

button{
  cursor: pointer;
  appearance: none;
}
.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (min-width: 768px){
      
    }
  }
}

// transitions
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: ass 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.4s ease-in;
}
</style>
