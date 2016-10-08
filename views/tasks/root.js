var bar;
Vue.component('questionview', {
    template: "#questionView",
    ready: function() {
    },
    data: function() {
        return {
            currentQuestion: { exists: true, heading:"Welcome to Crackbowl!" },
            input: "",
            textBuffer: "Hit the next button (or n) to start a question, hit buzz (or space) to buzz, and hit pause / play(p) to toggle the question being read. Questions are read here ",
            pause: false,
            n: 0,
            focused: false,
            canBuzz: false,
            timerBuffer: -1,
            timesBuzzed: 1,
            selected: { level: "HS", subject: "All" },
            score: 0,
        }
    },
    methods: {
    },
    events: {
        'correct': function(msg) {
            if (user)
                db.ref("users/" + user.uid + "/questions").push(this.currentQuestion)
            this.$events.emit('alert', { text: "Correct! The answer was " + this.currentQuestion.answerText, style: { 'bg-green': true } });
        },
        'incorrect': function(msg) {
            if (user)
                db.ref("users/" + user.uid + "/questions").push(this.currentQuestion)
            this.$events.emit('alert', { text: "Incorrect! The answer was " + this.currentQuestion.answerText, style: { 'bg-red': true } });
        },
    },
});
