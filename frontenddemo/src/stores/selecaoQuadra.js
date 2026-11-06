import { defineStore } from 'pinia'

export const useSelecaoQuadraStore = defineStore('selecaoQuadra', {
  state: () => ({
    quadraSelecionadaId: null
  }),

  actions: {
    selecionarQuadra(id) {
      this.quadraSelecionadaId = id
    },

    limparSelecao() {
      this.quadraSelecionadaId = null
    }
  }
})
