<template>
  <div>
    <HeaderBlog></HeaderBlog>
    <Formulir></Formulir>
    <ContentBlog></ContentBlog>
    <FooterBlog></FooterBlog>
  </div>
</template>

<script>
import HeaderBlog from '@/components/HeaderBlog'
import Formulir from '@/components/Formulir'
import ContentBlog from '@/components/ContentBlog'
import FooterBlog from '@/components/FooterBlog'
export default {
  name: 'hello',
  components: {
    HeaderBlog,
    Formulir,
    ContentBlog,
    FooterBlog
  },
  data () {
    return {
      msg: 'Selamat datang di....'
    }
  }
}
</script>
