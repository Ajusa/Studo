Vue.component('statview', {
    template: "#statView",
    ready: function() {

    },
    data: function() {
        return {
            number: 50,
            topic: "All",
            show: false,
            questions: [],
            mostMissed: [],
            charts: {
                correct: null,
                subjects: null,
                eachSubject: null,
            },
            mode: "graphs",
            correct: "false",
        }
    },
    methods: {
        runStats: function(sub) {
            var self = this;
        },
        getQuestions: function() {

        },
        filterQuestions: function() {

        },
        submit: function() {
            var self = this;
            var type = 'topic';
        }
    },
});
