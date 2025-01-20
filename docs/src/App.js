import {useState} from "react";

//最終形態はここへ
export default function TODO(){

  const [todo,setTodo]=useState[""];
  return (
    <>
    <Title/>
    <Textbox/>
    <Todobox/>
    </>
  )
}

function Title(){
  return(
    <h1 className="title">Todo リスト</h1>
  )
}

function Textbox(){
  return(
    <div className="form-container"> 
    <laber>todoの内容</laber>
    <input className="input-box1"  id="todo-box" type="text" placeholder="ここに入力してください"/>
    <label>期限日</label>
    <input className="input-box2" type="date" id="deadline"/>
    <button className="add-button">add</button>
    </div>
  )
}

function Todobox(){
  return(
    <ls>
      
      <li><input type="checkbox"/>内容</li>
      <li>こんにちは</li>
    </ls>
  )
}
