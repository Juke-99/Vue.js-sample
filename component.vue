<!DOCTYPE html>

<html>
	<head>
		<meta charset="utf-8">
		<title>component</title>
		<!-- development version, includes helpful console warnings -->
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	</head>

    <body>
        <div id="app7">
            <ol>
                <book-list 
                    v-for="item in bookList"
                    v-bind:books="item"
                    v-bind:key="item.id">
                </book-list>
            </ol>
        </div>

        <script>
            // Vue.component('todo-item', {
            //     template: '<li>todo1</li>'
            // })

            Vue.component('book-list', {
                props: ['books'],
                template: '<li>{{ books.name }}</li>'
            })

            var app7 = new Vue({
                el: '#app7',
                data: {
                    bookList: [
                        {id: 1, name: 'Mechanics: Volume 1 (Course of Theoretical Physics S)'},
                        {id: 2, name: 'Site Reliability Engineering'},
                        {id: 3, name: 'Functional Programming in Scala'},
                    ]
                }
            })
        </script>
    </body>
</html>