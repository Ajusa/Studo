Vue.component('task', {
    props: ['data'],

    template: '#task',
    ready: function() {
    },
    data: function() {
        return {  }
    },
    methods: {
        startTimer: function() {
            var self = this;
            this.timeout = setTimeout(function() {
                if (!self.hasBeenRemoved)
                    self.remove();
            }, self.data.time || 7000)
        },
        popover: function() {
            this.$dispatch('panel',this.data)
        },
    },
});
