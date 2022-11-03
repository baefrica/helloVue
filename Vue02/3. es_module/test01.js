import {title, add, sub} from './module1.js';

console.log(title)

const app = new Vue({
  el: '#app',
  data() {
    return {
      num1: 0,
      num2: 0,
      op: '-',
      result: 0
    }
  },

  methods: {
    doCal() {
      if (this.op === '+') {
        this.result = add(this.num1, this.num2)
      }
      else {
        this.result = sub(this.num1, this.num2)
      }
    }
  },

  // 감시한다
  // + / - 왔다갔다 가능
  watch: {
    op(val) {
        if (this.op === '+') {
            this.result = add(this.num1, this.num2)
        }
        else {
            this.result = sub(this.num1, this.num2)
        }
    }
  }
})
