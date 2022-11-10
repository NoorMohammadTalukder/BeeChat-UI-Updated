<template>
  <section class="row g-0 chat-body">
    <the-navigation
    @logoutClicked="logout"></the-navigation>

    <div class="col-3 h-100 all-users ">
      <div>
        <div class="logged-user d-flex">
          <div>
            <h4>Hello, <b>{{loggedMail}}</b></h4>
          </div>
          <div class="icon">
            <i class="fa-solid fa-pen-to-square"></i>
          </div>
        </div>

        <active-users
          v-for="result in results"
          :key="result.Id"
          :Id="result.Id"
          :FirstName="result.FirstName"
          :LastName="result.LastName"
          :Email="result.Email"
          @convo="convo"
        ></active-users>
      </div>
    </div>

    <div class="col-8">
      <div class="row g-0 chatter-detail">
        <div class="col-4 d-flex justify-content-start">
          <div><i class="fa-solid fa-phone"></i></div>
          <div><i class="fa-solid fa-video"></i></div>
        </div>
        <div class="col-8 d-flex justify-content-end">
          <div class="d-flex align-items-center justify-content-center me-1">
            <i class="fa-solid fa-user"></i>
            <h5 class="mt-1 me-1">{{chatterName}}</h5>
          </div>
        </div>
      </div>

      <div class="row g-0 pt-3 conversation-body parent">
        <div  v-if="chatterName" class="col-12">
          <the-chat
            v-for="x in results2"
            :key="x.Id"
            :Id="x.Id"
            :Text="x.Text"
            :UserId="x.UserId"
            :UserId2="x.UserId2"
          ></the-chat>

            <!-- <div class="send-text-body child mb-1  pt-1 ps-1">
                <form @submit.prevent="sendMsg" action="">
                <div class="d-flex g-0">
                    <div class="send-text">
                    <input v-model="Text" type="text" placeholder="Enter Your Message" />
                    </div>
                    <div class="send-btn-body">
                    <button type="submit" class="send-btn">
                        <i class="fa-solid fa-paper-plane"></i>
                    </button>
                    </div>
                </div>
                </form>
            </div> -->
         
        </div>
        
        <div class="send-text-body child mb-1  pt-1 ps-1">
            <form @submit.prevent="sendMsg" action="">
              <div class="d-flex g-0">
                <div class="send-text">
                  <input v-model="Text" type="text" placeholder="Enter Your Message" />
                </div>
                <div class="send-btn-body">
                  <button type="submit" class="send-btn">
                    <i class="fa-solid fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </form>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
import TheNavigation from "../components/TheNavigation.vue";
import ActiveUsers from "../components/ActiveUsers.vue";
import TheChat from "../components/TheChat.vue";
export default {
  components: {
    TheNavigation,
    ActiveUsers,
    TheChat,
  },
  data() {
    return {
      results: [],
      results2: [],
      // x: [],
      // xx:'',
      loggedMail: "",
      Text: "",
      Id1: "",
      Id2: "",
      chatterName: "",
      loggedUserFirstName:"",
    };
  },

  created() {
    this.loggedMail = this.$store.getters["user/loggedEmail"];
   
    this.GetLoggedUser();
  },
  methods: {
    logout(){
      this.$router.replace('/');
      
      this.$store.reset();
    },
    sendMsg() {
      // alert()
      this.Id1 = this.$store.getters["user/loggedUserId"];
      this.Id2 = this.$store.getters["user/getId2"];

      //console.log("vvv"+ this.chatterName)

      fetch("http://localhost:5074/api/create/messsage/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Text: this.Text,
          UserId: this.Id1,
          UserId2: this.Id2,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Could not save the data");
          } else {
            this.Text = "";
            this.UserId = "";
            this.UserId2 = "";
          }
        })
        .catch((error) => {
          this.error = error;
          console.log(error);
        });
    },
    async loadUsers() {
      await fetch("http://localhost:5074/api/all/user", {
        method: "GET",
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
            //console.log(response)
          }
        })
        .then((data) => {
          //   console.log(data)
          const results = [];
          for (const id in data) {
            //if(0!==data[id].Id){
            results.push({
              Id: data[id].id,
              FirstName: data[id].firstName,
              LastName: data[id].lastName,
              Email: data[id].email,
            });
          }
          //console.log(results)
          const UserIndex = results.findIndex(
            (x) => x.Id === this.$store.getters["user/loggedUserId"]
          );

          results.splice(UserIndex, 1);

          this.results = results;

          console.log(UserIndex);
        })
        .catch((error) => {
          this.isLoading = false;
          this.error = error;
        });
    },
    async GetLoggedUser() {
      await fetch(
        `http://localhost:5074/api/get/login/user/${this.loggedMail}/`,
        {
          method: "GET",
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
            //console.log(response)
          }
        })
        .then((data) => {
          this.$store.dispatch("user/addUserDetail", {
            Id: data.id,
            FirstName: data.firstName,
            LastName: data.lastName,
          });
        })
        .catch((error) => {
          this.isLoading = false;
          this.error = error;
        });
    },

    allMessages() {
      this.Id1 = this.$store.getters["user/loggedUserId"];
      this.Id2 = this.$store.getters["user/getId2"];
      fetch(
        `http://localhost:5074/api/all/coversation/${this.Id1}/${this.Id2}`,
        {
          method: "GET",
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
            //console.log(response)
          }
        })
        .then((data) => {
          const results = [];
          for (const id in data) {
            results.push({
              Id: data[id].id,
              Text: data[id].text,
              UserId: data[id].userId,
              UserId2: data[id].userId2,
            });
          }
          this.results2 = results;
          //   console.log(this.results)
        })
        .catch((error) => {
          console.log(error);
        });
      // this.$emit('convo', this.results);
    },

    convo(value) {
      this.chatterName = value;
    },
  },
  mounted() {
    this.loadUsers();
    setInterval(this.allMessages, 2000);
    this.loggedUserFirstName = this.$store.getters["user/loggedName"];
  },
};
</script>
<style scoped>
.chat-body {
  height: 100vh;
}

.logged-user {
  background: #faf7f0;
  padding-left: 5px;
  padding-top: 5px;
}
.all-users {
  /* background: #E97777; */
  overflow-y: scroll;
 
}
/* -------------------------------------- */

.chatter-detail {
  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: 3px;
  background: #a5c9ca;

}

.chatter-detail i {
  font-size: 20px;
  background-color: #d9e2e7;
  padding: 10px;
  border-radius: 50%;
  margin-right: 5px;
}

.conversation-body {
  height: 92vh;
  overflow-y: scroll;
  /* background: #cdfcf6; */

}
.send-text-body {
  border-radius: 5px;
}
.send-text {
  width: 90%;
  margin-right: 2px;
}
.send-text input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(19, 18, 18, 0.795);
  outline: none;
}
.send-text input:focus {
  border: 1px solid rgba(0, 21, 255, 0.69);
}
.parent{

}

.child {
    position: fixed;
  bottom: 0;
  width: 1000px;
 
}

.send-btn {
  background-color: rgba(8, 169, 94, 0.982);
  border: none;
  color: white;
  padding: 5px 30px;
  font-size: 25px;
  box-sizing: 5px;
  border-radius: 5px;
  width: 100%;
}
</style>
