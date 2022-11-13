<template>
  <!-- nav bar started -->

  <header id="home" class="home">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          <h4 class="text-warning">BEE CHAT</h4>
        </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" to="#aboutus">About Us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" to="#aboutus">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- banner started -->
    <section class="container mt-5 home-pt2">
      <div class="row g-0 justify-content-center align-items-center">
        <div class="col-lg-6 col-12 home-img-div">
          <img
            class="img-fluid"
            src="https://img.freepik.com/free-vector/messages-concept-illustration_114360-583.jpg?w=740&t=st=1667719883~exp=1667720483~hmac=3c245ba268f9d1b3fb082dff3af787a2e80b56275bf8b1a511e645f6c761fea7"
            alt=""
          />
        </div>
        <div class="col-lg-6 col-12 reg-sign">
          <div class="row">
            <div v-if="registerStatus == true">
              <h1>JOIN BEE CHAT</h1>
              <h3 v-if="signUp">Registration Successful</h3>
              <form @submit.prevent="register">
                <div class="col-12">
                  <input
                    type="text"
                    placeholder="First Name"
                    v-model="FirstName"
                  />
                </div>
                <div class="col-12">
                  <input
                    type="text"
                    placeholder="Last Name"
                    v-model="LastName"
                  />
                </div>
                <div class="col-12">
                  <input type="text" placeholder="Email" v-model="Email" />
                </div>
                <div class="col-12">
                  <button class="shadow-sm" type="submit">Register</button>
                </div>
              </form>
            </div>

            <div v-if="registerStatus == false">
              <h1>SignIn BEE CHAT</h1>
              <form @submit.prevent="login">
                <div class="col-12">
                  <input type="text" placeholder="Email" v-model="Email" />
                </div>
                <div class="col-12">
                  <button class="shadow-sm" type="submit">Signin</button>
                </div>
              </form>
            </div>

            <div v-on:click="setRegisterStatus">
              <p
                v-if="registerStatus == true"
                class="mt-1 text-center signin-instead"
              >
                SignIn Instead?
              </p>
              <p
                v-if="registerStatus == false"
                class="mt-1 text-center signin-instead"
              >
                SignUp Instead?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </header>

  <main>
    <section class="container mt-5 list">
      <div class="row g-5">
        <div class="col-lg-4">
          <div
            class="p-3 border d-flex align-items-center justify-content-between rounded-3 shadow-lg"
          >
            <h4 class="text-dark">Make Friends</h4>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1141/1141102.png"
              alt=""
            />
          </div>
        </div>
        <div class="col-lg-4">
          <div
            class="p-3 border d-flex align-items-center justify-content-between rounded-3 shadow-lg"
          >
            <h4 class="text-dark">Free Chat</h4>
            <img
              src="https://cdn-icons-png.flaticon.com/512/134/134914.png"
              alt=""
            />
          </div>
        </div>
        <div class="col-lg-4">
          <div
            class="p-3 border d-flex align-items-center justify-content-between rounded-3 shadow-lg"
          >
            <h4 class="text-dark">Cut Cost</h4>
            <img
              src="https://static.thenounproject.com/png/772954-200.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <section class="container mt-5" id="aboutus">
      <div class="row align-items-center">
        <div class="col-lg-6 ">
          <img
            class="img-fluid"
            src="https://img.freepik.com/free-vector/online-world-concept-illustration_114360-1007.jpg?size=626&ext=jpg&ga=GA1.2.1975301952.1667483955&semt=sph"
            alt=""
          />
        </div>
        <div class="col-lg-6">
          <h4>Traversy Thougts About <b>BEE CHAT</b></h4>
          <h6>Content Creator <b>YouTube</b></h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            alias quasi aperiam tempora quos cumque quaerat officia provident
            distinctio, eveniet cum velit dicta, aut deleniti fuga autem
            repellendus amet rerum numquam et nisi natus vitae sed. Magnam
            fugiat accusamus rerum ullam fuga est nam harum repellat? Recusandae
            ullam mollitia quidem?
          </p>
        </div>
      </div>
    </section>

    <section class="container" id="faq">
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  How to Register?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                  laudantium est placeat, tenetur possimus ad. Amet, similique
                  assumenda tempora, consequuntur dolor voluptatum pariatur
                  saepe eveniet fugiat quo officiis natus hic unde nobis
                  consectetur aliquam suscipit veniam vitae, molestiae iusto
                  rerum enim ad deserunt! Voluptatibus beatae magnam omnis atque
                  aspernatur qui!
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  What to do if my account restricted?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Commodi expedita provident enim repellat accusamus ipsa
                  perspiciatis similique asperiores nemo. Sit officiis obcaecati
                  nihil animi ratione perspiciatis aliquam adipisci non facere.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  How to login?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  modi earum nobis exercitationem possimus molestiae commodi,
                  pariatur aut cupiditate repudiandae explicabo numquam labore
                  deserunt, assumenda quis voluptates quibusdam, eaque aliquam
                  veniam odio sed amet rerum consequuntur. Ad inventore
                  temporibus delectus.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 faq">
          <img
            class="img-fluid"
            src="https://img.freepik.com/free-vector/faqs-concept-illustration_114360-5245.jpg?size=626&ext=jpg&ga=GA1.2.1975301952.1667483955&semt=sph"
            alt=""
          />
        </div>
      </div>
    </section>
  </main>

  <footer class="bg-dark p-2 overflow-hidden">
    <div class="row">
      <div class="col-6 d-flex align-items-center justify-content-center">
        <div class="row footer d-flex flex-column">
          <img
            src="https://images.news18.com/ibnlive/uploads/2020/10/1603625539_google_playstore_adwares.jpg"
            alt=""
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThEbxp_1hJyyNejduA99R7uAoHvNpIpCu2OtLrPQRB8pHTGLFZFnOZP8eo4RM7ZX5XBO8&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      <div class="col-6 d-flex justify-content-center align-items-center">
        <p class="text-white text-center">© CHAT BEE 2022 All Right Reserved</p>
      </div>
    </div>
  </footer>
</template>


<script>
export default {
  data() {
    return {
      FirstName: "",
      LastName: "",
      Email: "",
      registerStatus: true,
      signUp:false,
      loggedPersonMail:"",
    };
  },
  methods: {
    setRegisterStatus() {
      // alert()
      if (this.registerStatus === true) {
        this.registerStatus = false;
      } else {
        this.registerStatus = true;
      }
    },
    register() {
      fetch("http://localhost:5074/api/create/user", {
        method: "POST",
       
        headers: {
         "Content-Type": "application/json",
      },
        body: JSON.stringify({
          FirstName: this.FirstName,
          LastName: this.LastName,
          Email: this.Email,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Could not save the data");
          } else {
            this.FirstName = "";
            this.LastName = "";
            this.Email = "";
            this.signUp=true;
          }
        })
        .catch((error) => {
          this.error = error;
          console.log(error);
        });
    },

    login() {
    //this.clicked=true;
    fetch(`http://localhost:5074/api/login/user/${this.Email}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       
       Email: this.Email,
      }),
    })
      .then((response) => {
       // console.log(response.status)
        if (response.status===200) {
         // console.log("responses are:"+ response)
         // console.log(this.Email)
          this.loggedPersonMail = this.Email;

          this.$store.dispatch("user/addLoggedUser", {
            Email: this.loggedPersonMail,
          });

          this.$router.replace("/user");
        }
      })

      .catch((error) => {
        this.error = error;
        console.log(error);
      });

    // console.log(this.loggedPersonMail)
  },
  },

 
};
</script>

<style scoped>
.home {
  /* background: linear-gradient(#232224, #87509c41), url(./images/header-bg.jpg); */
}
h3{
    color: rgba(24, 120, 30, 0.681);
}
.home-pt2 {
  padding-top: 50px;
}
/* .home-img-div{
       
    } */
.home-pt2 img {
  height: 400px;
  width: 400px;
  border-radius: 50%;
  padding-left: 50px;
}

.list img {
  height: 60px;
  width: 60px;
  border-radius: 50%;
}

.footer img {
  height: 50px;
  width: 100px;
  border-radius: 5px;
  margin: 10px;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  margin: 3px;
  border: 2px solid #385b64;
  outline: none;
}
input:focus {
  border: 2px solid #ff4e5a;
  /* outline: blueviolet; */
}
button {
  width: 100%;
  margin: 3px;
  padding: 10px;
  border-radius: 5px;
  background: #ff4e5a;
  transition: 0.2s ease-in;
  border: 2px solid #ff4e5a;
}
button:hover {
  background-color: #f02835;
  border: 2px solid #f02835;
}
.signin-instead {
  color: #592427;
  cursor: pointer;
  transition: 0.2s ease-in;
}
.signin-instead:hover {
  color: #e1121d;
}

@media only screen and (max-width:688px) {
  .home-pt2 img {
    width: 300px;
    height: 300px;
  }
  .faq img{
    width: 500px !important;
    height: 200px;
    margin-left: 100px;
    padding: 0;
    background: red;
  }
}

@media only screen and (min-width:688px) and (max-width:992px) {
  .home-pt2 img {
  
    margin-left: 100px;
}
.reg-sign{
  margin-right: 10px !important;
 
}
}
</style>
