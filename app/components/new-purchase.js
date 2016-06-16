import Ember from 'ember';

export default Ember.Component.extend({
  model(params) {
    return this.store.findRecord('product', params.product_id);
  },
  addNewPurchase: false,
  actions: {
    purchaseFormShow() {
      this.set('addNewPurchase', true);

    },
    saveProduct() {
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        price: parseFloat(this.get('price')),
        image: this.get('image')
      };
      this.sendAction('saveProduct', params);

      }
  }
});
