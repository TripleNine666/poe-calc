export default {
  addDrop(context, payload) {
    // Add id and fix bug
    const drop = {
      dropName: payload.name,
      dropChance: payload.chance,
      dropCost: payload.cost,
    };
    context.commit("addDrop", drop);
  },
};
