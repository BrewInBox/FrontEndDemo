<script setup>import { useSelecaoQuadraStore } from '../stores/selecaoQuadra.js'

defineProps({
  quadras: { type: Array, required: true }
})

const selecao = useSelecaoQuadraStore()</script>

<template>
  <ul>
    <li v-for="quadra in quadras" :key="quadra.id">
      <button type="button"
              :class="{ selecionada: selecao.quadraSelecionadaId === quadra.id }"
              :aria-pressed="selecao.quadraSelecionadaId === quadra.id"
              @click="selecao.selecionarQuadra(quadra.id)">
        {{ quadra.nome }}
      </button>
    </li>
  </ul>
</template>

<style scoped>
  .selecionada {
    background-color: #164e63;
    color: white;
    font-weight: bold;
  }
</style>
