<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <h2 class="title">Realtime Chart with Vue and Pusher</h2>
        <h3 class="subtitle">Expense and Income Tracker</h3>
        <!--We are using the LineChart component imported below in the script and also setting the chart-data prop to the datacollection object-->
        <line-chart :chart-data="datacollection"></line-chart>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <form class="form" @submit.prevent="addExpenses">
          <h4>Add New Entry</h4>
          <div class="form-group">
            <label>Expenses</label>
            <input class="form-control" placeholder="How much did you spend?" type="number" v-model="expenseamount" required>
          </div>
          <div class="form-group">
            <label>Income</label>
            <input class="form-control" placeholder="How much did you earn?" type="number" v-model="incomeamount" required>
          </div>
          <div class="form-group">
            <label>Date</label>
            <input class="form-control" placeholder="Date" type="date" v-model="entrydate" required>
          </div>
          <div class="form-group">
            <button class="btn btn-primary">Add New Entry</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'
  import Pusher from 'pusher-js'
  import LineChart from '@/components/LineChart'
  const socket = new Pusher('APP_KEY', {
    cluster: 'eu',
    encrypted: true
  })
  const channel = socket.subscribe('finance')
  export default {
    name: 'home',
    components: {LineChart},
    data () {
      return {
        expense: null,
        income: null,
        date: null,
        expenseamount: null,
        incomeamount: null,
        datacollection: null,
        entrydate: null
      }
    },
    created () {
      this.fetchData()
      this.fillData()
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
      },
      addExpenses () {
      },
      fetchData () {
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    text-align: center;
    margin-top: 40px;
  }
  .subtitle {
    text-align: center;
  }
  .form {
    max-width: 600px;
    width: 100%;
    margin: 20px auto 0 auto;
  }
  .form h4 {
    text-align: center;
    margin-bottom: 30px;
  }
  h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
