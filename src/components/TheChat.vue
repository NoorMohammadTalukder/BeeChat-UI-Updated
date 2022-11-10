<template>
  <!-- Button trigger modal -->



  <div v-if="otherMsg!=true" class="d-flex justify-content-start " >
    <img
      src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&w=1000&q=80"
      alt=""
    />

   <div class="text-other active2 w-50 mt-3 ms-1">
    <p   >
      {{Text}}
    </p>
    <span class="delete-chat" v-on:click="deleteChat(Id)">Delete Chat</span>
   </div>
    
  </div>

  <div v-if="otherMsg==true" class="d-flex justify-content-end " >
   

   <div class="text-me active1  w-50 mt-3 me-1" >
    <p  >
      {{Text}}
    </p>
    <span class="delete-chat" v-on:click="deleteChat(Id)">Delete Chat</span>
   </div>
   <img
      src="https://img.freepik.com/premium-vector/initial-me-letter-logo-design-vector-template-abstract-letter-me-logo-design_616200-1122.jpg?w=2000"
      alt=""
    />
  </div>

 
</template>


<script>
export default {
    props: ["Id", "Text", "UserId", "UserId2"],
  
    data() {
      return {
        otherMsg: false,
        isHovering: false,
        loggedId:""
      };
    },
  
    methods: {
        setHover(){
          this.isHovering= !this.isHovering;
        },
      setOtherMsg() {
        this.loggedId = this.$store.getters["user/loggedUserId"];
        if (this.UserId2 !== this.$store.getters["user/loggedUserId"]) {
            console.log()
          this.otherMsg = true;
        }
      },
  
      deleteChat(id) {
        //  console.log(id)
      //  alert(id)
  
        fetch(`http://localhost:5074/api/delete/chat/${id}`, {
          method: "GET",
        }).then((response) => {
          if (response.ok) {
            return response.json();
            //console.log(response)
          }
        });
  
     
      },
    },
    created(){
       // console.log("props"+this.Id)
    },
    mounted() {
      this.setOtherMsg();
    },
  };
  </script>



<style scoped>
.delete-chat{
  display: none;
  cursor: pointer;
  color: #c93434;
  transition: 0.1s ease-in;
}
.delete-chat:hover{
  color: rgb(142, 9, 9);
}
.text-other:hover  .delete-chat{
  display: block;
}
.text-me:hover  .delete-chat{
  display: block;
}
.active1 {
 background: #9ADCFF;
}
.active2 {
 background: #FF8AAE;
}

.chatter-detail {
  /* border-bottom: 2px solid rgba(83, 81, 81, 0.789); */
  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: 3px;
  background: #a5c9ca;
  /* background: rgba(0, 213, 255, 0.734); */
}

.chatter-detail i {
  font-size: 20px;
  background-color: #d9e2e7;
  padding: 10px;
  border-radius: 50%;
  margin-right: 5px;
}

img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

.text-other {
  padding-left: 10px;
  background: #ff8aada0;
  border-top-right-radius: 10px;
  /* border-start-end-radius: 10px; */
  border-end-start-radius: 20px;
  border-end-end-radius: 20px;
  text-align: left;
  border: 1px solid rgba(80, 78, 78, 0.718);
  
}

.text-me {
  padding-left: 10px;
 background: #9adcffd1;
  border-end-end-radius: 20px;
  border-end-start-radius: 20px;
  border-start-start-radius: 10px;
  border: 1px solid rgba(80, 78, 78, 0.718);
}

.conversation-body {
  height: 92vh;
  overflow-y: scroll;
  background: #e7f6f2;
}
</style>
