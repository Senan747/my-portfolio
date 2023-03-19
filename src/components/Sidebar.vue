<template>
  <aside>
    <div class="logo">
        <img src="./assets/logo.svg" alt="vue">
    </div>

    <div class="menu-toggle-wrap">
        <div class="menu-toggle">
            <span class="material-icons">
                
            </span>
        </div>
    </div>
  </aside>
</template>

<script setup>

    
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
    @media (max-width: 768) {
        position: fixed;
        z-index: 99;
    }
  }
</style>