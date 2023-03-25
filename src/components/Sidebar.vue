<template>
  <aside :class="`${is_expanded && 'is-expanded' }`">
    <div class="logo">
        <img src="../img/photo2.png" alt="vue">
    </div>

    <div class="menu-toggle-wrap">
        <div class="menu-toggle" @click="ToggleMenu">
          <span class="material-symbols-outlined">
            keyboard_double_arrow_right
          </span>
        </div>
    </div>

    <h3>Menu</h3>
    <div class="menu">
      <router-link class="button" to="/">
        <span class="material-symbols-outlined">home</span>
        <span class="text">Home</span>
      </router-link>
      <router-link class="button" to="/about">
        <span class="material-symbols-outlined">history_edu</span>
        <span class="text">About</span>
      </router-link>
      <router-link class="button" to="/projects">
        <span class="material-symbols-outlined">work</span>
        <span class="text">Projects</span>
      </router-link>
      <router-link class="button" to="/contact">
        <span class="material-symbols-outlined">share</span>
        <span class="text">Contact</span>
      </router-link>
    </div>

    <div class="flex"></div>

    <div class="menu">
      <router-link class="button" to="/">
        <span class="material-symbols-outlined">settings</span>
        <span class="text">Settings</span>
      </router-link>
    </div>

  </aside>
</template>

<script setup>
import { ref } from 'vue'


const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value

  localStorage.setItem("is_expanded", is_expanded.value)
}
    
</script>

<style lang="scss" scoped>
  aside {
    display: flex;
    flex-direction: column;
    
    width: calc(2rem  + 32px);
    overflow: hidden;
    min-height: 100vh; 
    padding: 1rem;

    background-color: var(--dark);
    color: var(--light);

    transition: 0.2s ease-out;

    .flex {
      flex: 1 1 0;
    }
    .logo {
        margin-bottom: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 4rem;
            height: 4rem;
            border-radius: 100%;
        }
    }

    .menu-toggle-wrap{
      display: flex;
      justify-content: flex-end;
      margin-bottom: 1rem;

      position: relative;
      top: 0;
      transition: 0.2s ease-out;

      .menu-toggle {
        transition: 0.2s ease-out;

        .material-symbols-outlined {
          cursor: pointer;
          font-size: 2rem;
          color: var(--light);
        }
        .router-link-exact-active{
        background-color: var(--dark-alt);
        border-right: 5px solid var(--primary);
      }

        &:hover {
          .material-symbols-outlined {
            color: var(--primary);
            transform: translateX(0.5rem);
          }
        }
      }
    }

    h3, .button .text {
      opacity: 0;
      transition: 0.3s ease-out;
    }
    &.router-link-exact-active{
        background-color: var(--dark-alt);
        border-right: 5px solid var(--primary);
    }

    .menu {
      margin: 0 -1rem;

      .material-symbols-outlined{
        color: var(--light);
        margin-left: 1rem;
        font-size: 1.5rem;
      }
    }

    &.is-expanded {
      width: var(--sidebar-width);

      .menu-toggle-wrap {
        top: -3rem;
        .menu-toggle {
          transform: rotate(-180deg);
        }
      }
      h3, .button .text {
        opacity: 1;
      } 

      h3 {
        color: var(--grey);
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
      }
 }
      .menu {
        margin: 0 -1rem;

        .button {
          display: flex;
          align-items: center;
          text-decoration: none;

          padding: 0.5rem 0rem;
          transition: 0.2s ease-out;

          .material-symbols-outlined{
            font-size: 2rem;
            color: var(--light);
            transition: 0.2s ease-out;
          }

          .text {
            color: var(--light);
            transition: 0.2s ease-out;
          }

          &:hover, &.router-link-exact-active {
            background-color: var(--dark-alt);

            .material-symbols-outlined, .text {
              color: var(--primary);
            }
          }
          &.router-link-exact-active{
            border-right: 5px solid var(--primary);
          }
          
        }
      }

      
   

    @media (max-width: 768) {
        position: fixed;
        z-index: 99;

        
    }
  }

  @media (max-width: 768px){
    .menu-toggle-wrap {
          display: none;
        }
  }
</style>