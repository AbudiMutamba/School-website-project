let onSubmit = () => {
  const NAME = document.getElementById("exampleInputName").value
  const EMAIL = document.getElementById("exampleInputEmail1").value
  const MESSAGE = document.getElementById("exampleInputMessage").value
  const FORM = document.getElementById("form1")

  if(NAME == "" || EMAIL == "" || MESSAGE == ""){
      alert("All fields are required")
      return false
  }
  
  console.log(EMAIL,MESSAGE)
  let info = {
      "name" : NAME,
      "email" : EMAIL,
      "message": MESSAGE
  }

  let infoJSON = JSON.stringify(info)
  localStorage.setItem( 'user',infoJSON)

  alert("Messege sent")
  document.getElementById("form1").reset();

  return true;
  
}