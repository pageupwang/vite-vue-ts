<template>

</template>

<script lang="ts">
import {defineComponent, onMounted,computed,} from "vue";
import {useStore} from "vuex";

export default defineComponent({
  name: "Home",
  setup() {
    const $store=useStore()

    function add() {
      $store.commit('user/increment')
    }
    onMounted(() => {

    })
    const count  = computed( () => $store.state.user.count)
    return {
      count,
      add,
    }
  },
})

</script>

<style scoped lang='scss'>

</style>
