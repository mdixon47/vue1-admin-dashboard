<template>
    <div class="container">
      <h2>Team</h2>
      <div class="cards">
          <a href="" class="card"></a>
          <a href="" class="card"></a>
          <a href="" class="card"></a>
          <a href="" class="card"></a>
          <a href="" class="card"></a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Team"
    }
</script>

<style lang="scss" scoped>
.container {
    margin-left: 25px;
}

.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: space-evenly;
}

.card {
    height: 50px;
    width: 50px;
    background: red;
    margin: 20px
}
</style>