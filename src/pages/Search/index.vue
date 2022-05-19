<template>
  <div>
      <h1>{{$route.params.keyword}}---{{keyword}}</h1>
      <h1>{{$route.query.k}}---{{k}}</h1>
  </div>
</template>

<script>
export default {
  props:['keyword','k']
}
</script>

<style>

</style>