import Ember from 'ember';

var Sub = Ember.Object.extend({
    someProperty: function(){
        console.log('hello');
    }.property('hello')
});

export default Sub;
