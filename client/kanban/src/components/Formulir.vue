<template>
  <div class="container">
    <div class="col-sm-1">

    </div>
    <div class="col-sm-10">
      <form class="form-horizontal">
        <fieldset>
          <legend class="legend">Hello Fox add Your Kanban</legend>
          <div class="form-group">
            <div>
              <input type="text" class="form-control" id="Judul" v-model="judul" placeholder="Judul">
            </div>
          </div>

          <div class="form-group">
            <div>
              <input type="text" class="form-control" id="Deskripsi" v-model="deskripsi" placeholder="Deskripsi">
            </div>
          </div>

          <div class="form-group">
            <div>
              <input type="text" class="form-control" id="Poin" placeholder="Poin" v-model="poin">
            </div>
          </div>
        </fieldset>
        <button type="submit" class="btn btn-primary" v-on:click="addTask()">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Formulir',
  data () {
    return {
      status:0,
      judul: null,
      deskripsi: null,
      poin: null
    }
  },
  methods: {
    addTask () {
      this.$db.ref('kanban/backlog/').push({
        status: 0,
        judul: this.judul,
        deskripsi: this.deskripsi,
        poin: this.poin
      })
      this.judul = ''
      this.deskripsi = ''
      this.poin = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  padding-top: 50px;
  margin-left: auto;
  margin-right: auto;
  font-family: Nosifer;
}
.legend {
  font-family: 'Nosifer', cursive;
}
</style>
