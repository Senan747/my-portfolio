<template>
  <aside :class="`${is_expanded && 'is-expanded' }`">
    <div class="logo">
        <img src="../assets/logo.svg" alt="vue">
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
      <router-link class="button" to="/">
        <span class="material-symbols-outlined">home</span>
        <span class="text">Home</span>
      </router-link>
      <!-- <router-link class="button"></router-link>
      <router-link class="button"></router-link>
      <router-link class="button"></router-link> -->
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'

const is_expanded = ref(false)

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value
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

    .logo {
        margin-bottom: 1rem;

        img {
            width: 2rem;
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

    .menu {
      margin: 0 -1rem;

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

      .menu {
        margin: 0 -1rem;

        .button {
          display: flex;
          align-items: center;
          text-decoration: none;

          padding: 0.5rem 1rem;
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

          &:hover {
            background-color: var(--dark-alt);

            .material-symbols-outlined, .text {
              color: var(--primary);
            }
          }
        }
      }

      
    }

    @media (max-width: 768) {
        position: fixed;
        z-index: 99;
    }
  }
</style>