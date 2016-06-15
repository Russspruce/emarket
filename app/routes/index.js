import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('product');
  },
  dropdownOpen: false,
  actions:  {
    toggleDropdown() {
      this.toggleProperty('dropdownOpen');
    }
  }
});
