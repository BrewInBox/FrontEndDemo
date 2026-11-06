<script setup>
import ListaQuadras from './components/ListaQuadras.vue'
import Cabecalho from './components/Cabecalho.vue'
import { computed } from 'vue'
import PainelDetalhes from './components/PainelDetalhes.vue'
import { useSelecaoQuadraStore } from './stores/selecaoQuadra.js'

const quadras = [
  { id: 1, nome: 'Quadra 1', tipo: 'Coberta', valorHora: 80 },
  { id: 2, nome: 'Quadra 2', tipo: 'Aberta', valorHora: 60 }
]

const selecao = useSelecaoQuadraStore()

const quadraSelecionada = computed(() => {
  const id = selecao.quadraSelecionadaId
  return quadras.find(quadra => quadra.id === id) ?? null
})


</script>

<template>
  <Cabecalho />

  <main>
    <h2>Quadras disponíveis</h2>
    <ListaQuadras :quadras="quadras" />
    <PainelDetalhes :quadra="quadraSelecionada" />
  </main>
</template>
