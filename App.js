import axios from "axios";

export default function App(){
  return(
    <div>
      <MyChartApp />
    </div>
  );
}

function MyChartApp(){
  const [message, setMessage] = useState("");
  const [list, setlist] = useState("");
  
}

const addUser = async() =>{
  if( Applicationnumber =="" || Studentname == "" || StudentId == ""){
    alert("please enter valid username and id");
    return;
  }
}

const controlMessage = (e) =>{
  setMessage(e.target.value);
}

const sendMessage = async () =>{
  if(message == ""){
    alert("please enter require input");
    return;
  }
}

const url = "https//localhost:4000/add-user";
const data = {
  message : message;
};

<div>
    <h1 className="bg-black text-light p-3 text-center">Enter message here
  </h1>
  <div>
    <input
    type = "text"
    Applicationnumber = ""
    Studentname = ""
    StudentId = ""
    value = {message}
    onchange = {controlMessage}
    placeholder = "Enter you message here"
    />

  </div>

  <div className = col-4 ></div>
  <input
  className = "btn btn-primary btn-lg-"
  type = "button"
  value = "send"
  onClick = {sendMessage}
  />

  <div>
    {list.map(value,index) =>
{
  <div key = "index">
    {textfloat(index,value)}
    <textfloat />
    </div>
    }    }
  </div>
  
</div>
