var user;
Vue.transition('slide', {
    enterClass: 'slideInLeft',
    leaveClass: 'fadeOut'
})
var vm = new Vue({
    el: 'body',
    data: {
        tasks: [{ title: "Hello", done: true, }],
        currentView: "questionview",
        subjects: subjects,
    },
    ready: function() {},
    methods: {
        newTask: function() {
            var self = this;
            phonon.prompt("Enter in the task name", "New Task", true).on('confirm', function(inputValue) {
                var results = chrono.parse(inputValue)
                if (results[0] == null)
                    self.tasks.unshift({ title: inputValue, done: false, start: "No Start Date", end: "No End Date", })
                else
                    self.tasks.unshift({ title: inputValue, done: false, start: results[0].start.date(), end: results[0].end.date(), })
            });
        },
        popover: function() {
            
        },
        google: function() {


        },
        facebook: function() {},
        info: function() {

        },

    },
    events: {
        'panel': function(msg) {
            
            phonon.panel('#taskInfo').open();
        },
        'removeAlert': function(msg) {
            this.alerts.$remove(msg)
        },
    },
});
