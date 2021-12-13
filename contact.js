const onSubmit = () => {
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    message = document.getElementById("message").value;
    reg = /^\d{10}$/;
    if (name.length === 0) {
      alert("Name cannot be empty");
      return false;
    }
    if (email.length === 0) {
      alert("Email cannot be empty");
      return false;
    }
    if (!phone.match(reg)) {
      alert("Wrong number");
      return false;
    }
    if (message.length === 0) {
      alert("Message cannot be empty");
      return false;
    }
    console.log("name : " + name);
    console.log("email : " + email);
    console.log("phone : " + phone);
    console.log("message : " + message);
    alert("Message sent");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
    return true;
  }