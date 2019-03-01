var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
});

var vm1 = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    reversedMessage: function(){
      return this.message.split('').reverse().join('')
    }
  }
});

var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    question: function(newQuestion) {
      this.answer = 'Waiting for you to stop typing...';
      this.getAnswer();
    }
  },
  methods: {
    getAnswer: _.debounce(
      function() {
        if(this.question.indexOf('?') === -1) {
          this.answer = 'Question usually contain a question mark. ;-)';
          return;
        }

        this.answer = 'Thinking...';

        var vm2 = this;
        axios.get('https://yesno.wtf/api').then(function(response) {
          vm2.answer = _.capitalize(response.data.answer);
        })
        .catch(function(error) {
          vm2.answer = 'Error! Could not reach the API. ' + error;
        });
      },
      500
    )
  }
});

var stylevm = new Vue({
  el: '#styleVue',
  data: {
    activeColor: 'red',
    fontSize: 30
  }
});

var styleObject = new Vue({
  el: '#styleObject',
  data: {
    styleObject: {
      color: 'red',
      fontSize: '13px'
    }
  }
});

var modelvm = new Vue({
  el: '#model-example',
  data: {
    message: ''
  }
});

var multiModel = new Vue({
  el: '#multi-example',
  data: {
    message: ''
  }
});
