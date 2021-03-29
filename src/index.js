import React from "react"
import ReactDOM from "react-dom"
import "./style.css"

// const name = "Daniiar"
// const age = "32"



// const app = (
//     <h1 className="title">My name is {name}, I am {age} years old
//     </h1>
// )

const Text = () => {

    const text = "lorem"
    return (<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ut, culpa quae quidem expedita hic totam. Inventore cupiditate
    eum est! Aliquam beatae minus maxime expedita corrupti libero modi
         rerum natus possimus?</p>)
}

const Header = () => {
    
    return (
    <div id="myDIV" className="header">
        <h2>My To Do List</h2>
        <input type="text" id="myInput" placeholder="Title..." />
        <span className="addBtn">Add</span>
    </div>)
}

const Body = () => {
    
    return ( <ul id="myUL">
        <li>Hit the gym</li>
        <li className="checked">Pay bills</li>
        <li>Meet George</li>
        <li>Buy eggs</li>
        <li>Read a book</li>
        <li>Organize office</li>
    </ul>
    )
}


const App = () => {

    // const name = "Daniiar"
    // const age = "32"

    return (
        <div>
            <Header/>
            <Body/>
        </div>
    )
}
// бул функция бирок реакт жс те компонент деп аталат


ReactDOM.render(<App />, document.querySelector("#root"))




