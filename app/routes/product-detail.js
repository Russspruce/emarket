import Ember from 'ember';

export default Ember.Route.extend({
  // dropdownOpen: false,
  actions:  {
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
  }
});
