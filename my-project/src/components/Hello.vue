<template>
  <div class="footer">
   <!-- <div class="footer index_text">
    <div class="footer_top">
      <div class="footer_top_center">
        <div class="box_img margin-right">
          <img src="images/index_102.jpg" class="pre">
          <span>关注官方微信</span>
        </div>
        <div class="box_img">
          <img src="images/index_104.jpg" class="pre">
          <span>关注官方微博</span>
        </div>
      </div>
    </div>
  </div> -->
  </div>
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {
      msg: '网页脚部'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.footer{
      height: 9rem;
    }
    .footer_top{
      height: 7rem;
      padding-top: 1.5rem;
    }
    .footer_top_center{
      width: 18rem;
      text-align: center;
    }
    .box_img{
      width: 4.5rem;
      height: 5.5rem;
      display: inline-block;
      position: relative;     
    }
    .box_img span{
      font-size: 0.7rem;
      display: inline-block;
      position:absolute;
      width: 4.5rem;
      height: 1rem;
      left: 0rem;
      bottom: -0.4rem;
    }
</style>
