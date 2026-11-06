<script setup>defineProps({
  quadra: { type: Object, default: null }
})

const moeda = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})</script>

<template>
  <section>
    <h2>Detalhes da quadra</h2>

    <div v-if="quadra">
      <p>Nome: {{ quadra.nome }}</p>
      <p>Tipo: {{ quadra.tipo }}</p>
      <p>Valor da hora: {{ moeda.format(quadra.valorHora) }}</p>
    </div>

    <p v-else>Selecione uma quadra.</p>
  </section>
</template>
