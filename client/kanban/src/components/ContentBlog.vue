<template lang="html">
  <div>
    <div class="container-fluid text-center">
      <div class="row content">
              <div class="col-md-3">
                <div class="panel panel-primary">Backlog </div>
                <Kanban v-for="kanban in getKanban0" v-bind:propsKanban="kanban" v-bind:key="kanban.key"/>
              </div>
              <div class="col-md-3">
              <div class="panel panel-primary">To do</div>
                <Kanban v-for="kanban in getKanban1" v-bind:propsKanban="kanban" v-bind:key="kanban.key"/>
              </div>
              <div class="col-md-3">
              <div class="panel panel-primary">Doing</div>
                <Kanban v-for="kanban in getKanban2" v-bind:propsKanban="kanban" v-bind:key="kanban.key"/>
              </div>
              <div class="col-md-3">
              <div class="panel panel-primary"> Done</div>
                <Kanban v-for="kanban in getKanban3" v-bind:propsKanban="kanban" v-bind:key="kanban.key"/>
              </div>
          </div>
    </div>
  </div>
</template>

<script>
import Kanban from '@/components/Kanban'
export default {
  components: {
    Kanban
  },
  firebase () {
    return {
      kanbans: this.$db.ref('kanban/backlog')
    }
  },
  computed: {
    // a computed getter
    getKanban0 () {
      const filter0 = this.kanbans.filter((kamban) => kamban.status === 0)
      return filter0
    },
    getKanban1 () {
      const filter1 = this.kanbans.filter((kamban) => kamban.status === 1)
      return filter1
    },
    getKanban2 () {
      const filter2 = this.kanbans.filter((kamban) => kamban.status === 2)
      return filter2
    },
    getKanban3 () {
      const filter3 = this.kanbans.filter((kamban) => kamban.status === 3)
      return filter3
    }
  },
  created () {
    console.log('nilai dari firebase : ',this.kanbans.length)
  }
}
</script>
