

// function MainContent(){
//     return <h1>I'm learning React!</h1>

// }


// ReactDOM.render(
//     <div>
//         <ul>
//             <li>Ranjan</li>
//             <li>Alok</li>
//             <li>Sajeet</li>
//             <li>Ratan</li>
//         </ul>
       
//     </div>

// , document.getElementById("root"))

// ReactDOM.render(
//     <MainContent/>

// , document.getElementById("root"))

//without using React
// let h1=document.createElement("h1");
// h1.textContent="hey guys"
// h1.className="header"
// console.log(h1)
// document.getElementById("root").append(h1)


const nav = 
    <nav>
        <h1>Website</h1>
        <ul>
            <li>Pricing</li>
            <li>Contant</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>

// ReactDOM.append(nav)  
document.getElementById("root").append(nav)