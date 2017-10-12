<template lang="html">
  <div class="panel panel-primary">
    <div class="panel-heading">
      <h3 class="panel-title">{{propsKanban.judul}}</h3>
    </div>
    <div class="panel-body">
      {{propsKanban.deskripsi}}
    </div>
    <div class="modal-footer">
      <button type="button" @click="hapus(propsKanban['.key'])">delete</button>
      <button v-if="propsKanban.status < 3" type="button" @click="pindah(propsKanban['.key'],propsKanban.status++,propsKanban.judul,propsKanban.deskripsi,propsKanban.poin)">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['propsKanban'],
  methods: {
    hapus (id) {
      this.$db.ref(`kanban/backlog/`+id).remove()
    },
    pindah (id, status, judul, deskripsi, poin) {
      this.$db.ref().child('kanban/backlog/'+id)
        .set(
          { status: status,
             judul: judul,
             deskripsi:deskripsi,
             poin: poin }
           );

    }
  }
}
</script>
