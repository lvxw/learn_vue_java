<template>
  <div>
    <h1>lvxw first test</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data: function () {
    return {
      msg: 'this is content'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
p{
  background-color: green;
}
</style>
