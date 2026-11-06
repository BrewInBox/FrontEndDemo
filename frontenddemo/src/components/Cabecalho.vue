<script setup>import { useSelecaoQuadraStore } from '../stores/selecaoQuadra.js'

const selecao = useSelecaoQuadraStore()</script>

<template>
  <header>
    <h1>Beach Tennis</h1>

    <p v-if="selecao.quadraSelecionadaId === null">
      Nenhuma quadra selecionada.
    </p>

    <div v-else>
      <p>Quadra selecionada · ID {{ selecao.quadraSelecionadaId }}</p>

      <button type="button" @click="selecao.limparSelecao()">
        Limpar seleção
      </button>
    </div>
  </header>
</template>
