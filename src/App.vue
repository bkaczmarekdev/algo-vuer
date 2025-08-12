<template>
  <div class="min-h-screen w-full flex flex-col">
    <nav class="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow">
      <router-link to="/CountingSortView" class="shad-button" active-class="shad-button-active">
        Counting Sort
      </router-link>
      <router-link to="/about" class="shad-button" active-class="shad-button-active">
        About
      </router-link>
    </nav>
    <main class="flex-1 p-4 overflow-auto">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts"></script>
