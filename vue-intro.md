# Vue.js
Vue.jsはReactやAngularのようなテンプレート型（Apache WicketやReactではコンポーネント指向と呼ばれていたはず）のJavaScriptフレームワークで特にUI作成で効果が発揮される。実際に、一つのボタンを作成する際に動的にclass属性で遷移先を決めたいときや、何かの機能を一つにまとめといて繰り返し使うことがとても簡単にできるようになる。Vueではよくテンプレートという言葉で使われるけど、一つのページのテンプレートを作成することにも役立つ（というかむしろこっちが主な気がする...）。

Vueにはいくつか他とは違う機能もあったりするので、ここではそれらを書いていくことにする。

Vueはすべてリアクティブな処理をする。

## ディレクティブ
例：
```html
<div id="app2">
  <span v-bind:title="titleMessage">
    Vue is Component oriented.
  </span>

  <span v-bind:color="red">red</span>
</div>

<script>
var app2 = new Vue({
  el: '#app2',
  data: {
    titleMessage: 'v-bind ' + new Date().toLocaleString(),
    red: '#ff6677'
  }
})
</script>
```

Vueではよく属性に`v-`の接頭辞がよく使われ、これは**ディレクティブ**と呼ばれている。実際に実行すると、赤色の文字列が表示される。

[画像]

## 条件やループ

さっきのディレクティブの部分でやった`v-`を使って、

```html
<div id="app3">
  <span v-if="seen">Now you see me</span>
  <span v-if="unseen">fu*k</span>
</div>

<div id="app4">
  <ol>
    <li v-for="todo in todos">{{ todo.text }}</li>
  </ol>
</div>

<script>
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
</script>
```

みたいに`v-if`、`v-for`を使って条件式や繰り返し処理を表現できる。

## イベントハンドリング
`v-on`ディレクティブを使うことで可能。

```html
<div id="app5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Reverse</button>
</div>

<script>
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
</script>
```

ドキュメントによるとDOMには触れていないらしい。

`v-model`はフォーム入力と状態を保持し双方間でのバインディングが楽にする。

```html
<div id="app6">
  <p>{{ message }}</p>
  <input v-model="message">
</div>

<script>
var app6 = new Vue({
  el: '#app6',
  data: {
    message: 'Vue.js'
  }
})
</script>
```