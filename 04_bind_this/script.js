class App {
  constructor() {
    this.serverName = "localhost";

    document
      .getElementById("btn")
      // .addEventListener("click", this.getServerName); // will give 'undefined'
      // .addEventListener("click", this.getServerName); // will give button's innerHTML - when 'console.log(this);'
      .addEventListener("click", this.getServerName.bind(this)); // this is when  you want to use 'this'
  }
  getServerName() {
    // console.log(this);
    console.log(this.serverName);
  }
}

const app = new App();

app.getServerName();
