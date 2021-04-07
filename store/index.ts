export interface LayoutState {
  mapEnabled: boolean
}

export const state = (): LayoutState => ({
  mapEnabled: false,
})

export const mutations = {
  toggleMap(state: LayoutState) {
    state.mapEnabled = !state.mapEnabled
  },
}
