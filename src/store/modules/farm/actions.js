export default {
  changeDrop(context, payload) {
    // Add id and fix bug
    const drops = context.getters.getDrops;
    const index = drops.findIndex((el) => el.dropId === payload.id);
    const drop = {
      ...payload,
      index,
    };
    context.commit("changeDrop", drop);
  },
  addEmptyDrop(context, payload) {
    const drop = {
      dropId: payload.id,
      dropName: "",
      dropChance: null,
      dropCost: null,
    };
    context.commit("addDrop", drop);
  },
};
