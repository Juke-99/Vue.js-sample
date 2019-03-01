<!DOCTYPE html>

<html>
	<head>
		<meta charset="utf-8">
		<title>introduction</title>
		<!-- development version, includes helpful console warnings -->
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	</head>

	<body>
		<div id="app">
			{{ message }}
		</div>

		<div id="app2">
			<span v-bind:title="titleMessage">
				Vue is Component oriented.
			</span>

			<span v-bind:color="red">red</span>
		</div>

		<div id="app3">
			<span v-if="seen">Now you see me</span>
			<span v-if="unseen">fu*k</span>
		</div>

		<div id="app4">
			<ol>
				<li v-for="todo in todos">{{ todo.text }}</li>
			</ol>
		</div>

		<div id="app5">
			<p>{{ message }}</p>
			<button v-on:click="reverseMessage">Reverse</button>
		</div>

		<div id="app6">
			<p>{{ message }}</p>
			<input v-model="message">
		</div>

		<script>
			var app = new Vue({
				el: '#app',
				data: {
					message: 'Hello Vue World.'
				}
			})

			var app2 = new Vue({
				el: '#app2',
				data: {
					titleMessage: 'v-bind ' + new Date().toLocaleString(),
					red: '#ff6677'
				}
			})

			var app3 = new Vue({
				el: '#app3',
				data: {
					seen: true,
					unseen: false
				}
			})

			var app4 = new Vue({
				el: '#app4',
				data: {
					todos: [
						{ text: 'JavaScript' },
						{ text: 'Vue.js' },
						{ text: 'React.js' }
					]
				}
			})

			var app5 = new Vue({
				el: '#app5',
				data: {
					message: 'Reverse Message'
				},
				methods: {
					reverseMessage() {
						this.message = this.message.split('').reverse().join('')
					}
				}
			})

			var app6 = new Vue({
				el: '#app6',
				data: {
					message: 'Vue.js'
				}
			})
		</script>
	</body>
</html>
