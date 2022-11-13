<template>
  <div class="all-user-list mt-1">
    <div class="user p-2">
      <div class="d-flex align-items-center justify-content-between m-3">
        <div class="d-flex align-items-center active-user-detail">
          <div class="icon">
            <i class="fa-solid fa-user"></i>
          </div>
          <div class="name">
            <h5>{{FirstName}} {{LastName}}</h5>
          </div>
        </div>
      
        <div v-on:click="conversation">
          <i class="fa-solid fa-comments"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: ["Id", "FirstName", "LastName", "Email"],

  data() {
    return {
      results: [],
      userID: null,
      //    x:[],
    };
  },

  emits: ["convo"],
  created() {
    this.userID = this.$store.getters["user/loggedUserId"];
    
  },
  methods: {
    async conversation() {
        // alert()
      this.$store.dispatch("user/addId2", {
        Id2: this.Id,
      });

      this.$store.dispatch("user/addChatterName", {
        x: this.FirstName,
      });

      this.$emit("convo", this.FirstName);
    },
  },
};
</script>
<style scoped>
.all-users {
  background: #a5c9ca;
  height: 100vh;

  overflow-y: scroll;
}

.user {
  background: #a5c9cab2;
}

.user i {
  color: #fff;
  background: #000;
  padding: 10px;
  border-radius: 50%;
}

.user .name {
  padding-top: 1px;
  padding-left: 5px;
}

.user button {
  /* background: rgba(131, 129, 129, 0.874); */
  border: 0;
  /* border-radius: 10px; */
  /* margin: 2px; */
}

@media only screen and (max-width:688px) {
  .name h5{
    font-size: 6px;
    margin-top:5px;
  
   
  }
  .user{
    padding: 0 !important;
 
   
  }
  .user i {
 margin-bottom: 5px;
  padding: 5px;
  border-radius: 50%;
  font-size: 4px;
}
}

@media only screen and (min-width:688px) and (max-width:992px) {
  .name h5{
    font-size: 15px;
  }

}

</style>
