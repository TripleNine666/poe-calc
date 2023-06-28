export default {
  addDrop(state, payload) {
    state.drops.push(payload);
  },
  changeDrop(state, payload) {
    // Я сделал изменение, нужно проверить и добавить удаление
    const index = payload.index;
    state.drops[index].dropName = payload.name;
    state.drops[index].dropChance = payload.chance;
    state.drops[index].dropCost = payload.cost;
  },
  deleteDrop(state, payload) {
    const drops = state.drops;
    const index = drops.map((el) => el.dropId).indexOf(payload.id);
    state.drops.splice(index, 1);
  },
  changeRunInfo(state, payload){
    state.runInfo = payload;
  }
};
