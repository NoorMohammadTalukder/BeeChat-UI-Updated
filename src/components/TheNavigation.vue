<template>
  <div class="col-1 navigation-body">
    <div class="navigation">
      <div class="d-flex flex-column align-items-center p-3 navigation-btn">
        <div v-on:click="logoutClicked" class="icon"><i class="fa-solid fa-right-from-bracket"></i></div>
        <div class="icon"><i class="fa-solid fa-gears"></i></div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&w=1000&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    emits: ["logoutClicked"],
    methods:{
        logoutClicked(){
            this.$emit('logoutClicked', true);
        }
    }
}
</script>
<style scoped>
.navigation-body {
  /* background: #cdfcf6; */
}
.navigation {
  height: 20%;
  width: 70%;
  padding-top: 200px;
  padding-left: 25px;

  /* background: #98A8F8; */
}

.navigation .icon {
  background: #000;
  padding: 10px;
  background: #faf7f0;
  /* margin-left: 1px; */
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navigation-btn {
  background: #bccef8;
  border-radius: 10px;
}

.navigation i {
  font-size: 20px;
}
.navigation img {
  width: 40px;
  height: 40px;
  margin-top: 8px;
  border-radius: 50%;
}

@media only screen and (max-width:688px) {
  .navigation{
    height: 20%;
  width: 0%;
  padding-top: 200px;
  padding-left: 0px !important;
  }
 
.navigation i {
  font-size: 10px;
}
.navigation .icon{
  height: 10px;
  width: 10px;
}
.navigation img {
  width: 20px;
  height: 20px;

}
}

@media only screen and (min-width:688px) and (max-width:992px) {
  .navigation{
    height: 20%;
  width: 0%;
  padding-top: 200px;
  padding-left: 12px !important;
  }
 
.navigation i {
  font-size: 15px;
}
.navigation .icon{
  height: 30px;
  width: 30px;
}
.navigation img {
  width: 30px;
  height: 30px;

}
}

</style>
