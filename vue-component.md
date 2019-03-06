# Vue.jsのコンポーネント
Vue.jsでコンポーネントを作成するのは簡単で、

```js
Vue.component('book-list', {
    template: '<li>Book Name</li>'
})
```

でかける。`props`を追加することで後で出てくる`v-bind`で値を受け取れるようにすることができる。

```js
Vue.component('book-list', {
    props: ['books']
    template: '<li>{{ books.name }}</li>'
})
```

コンポーネントは

```html
<book-list></book-list>
```

で使うことができる。componentメソッド内で名前を付けるだけで定義できるのはかなり楽。しかもそのメソッドの値の受け渡しなどの処理を
コールバック内で書けるのもかなりの魅力。

`v-bind`を使っておなじみのリストを実装してみる。

```html
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
```

コンポーネントをうまく使うことで親要素から切り離された子要素を作り出すことができて管理がしやすくなる。
大きいプロジェクトとなると、この効果はもっと発揮される。