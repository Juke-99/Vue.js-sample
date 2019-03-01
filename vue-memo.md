# Vue.js
Vue.jsはReactやAngularのようなテンプレート型（Apache WicketやReactではコンポーネント指向と呼ばれていたはず）のJavaScriptフレームワークで特にUI作成で効果が発揮される。実際に、一つのボタンを作成する際に動的にclass属性で遷移先を決めたいときや、何かの機能を一つにまとめといて繰り返し使うことがとても簡単にできるようになる。Vueではよくテンプレートという言葉で使われるけど、一つのページのテンプレートを作成することにも役立つ（というかむしろこっちが主な気がする...）。

Vueにはいくつか他とは違う機能もあったりするので、ここではそれらを書いていくことにする。


## ディレクティブ
例：
```html
<div id="app">
  <p v-bind:color="aka">
    赤red
  </p>
</div>

<script>
  var app = new Vue({
    el: '#app',
    data: { 'red' }
  });
</script>
```

Vueではよく属性に`v-`の接頭辞がよく使われ、これは**ディレクティブ**と呼ばれている。実際に実行すると、赤色の文字列が表示される。

[画像]