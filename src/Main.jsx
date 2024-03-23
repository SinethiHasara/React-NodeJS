import React from "react"

function Main() {
    return(
        <div className="main-cls">
            <ul>
                <li>react is composible</li>
                <li>react and jsx give the best experience</li>
            </ul>

            <p>React is a popular JavaScript library for
                building user interfaces, developed and maintained
                by Facebook. It provides a declarative, component-based
                approach to building interactive UIs. With React,
                developers can efficiently create complex UIs by 
                breaking them down into reusable components. 
                React utilizes a virtual DOM to efficiently 
                update the actual DOM, resulting in better 
                performance. It also encourages a unidirectional 
                data flow and supports server-side rendering for
                improved SEO and initial load times. React has
                a vibrant ecosystem with tools like Redux for 
                state management and React Router for routing,
                making it a powerful choice for building modern 
                web applications.</p>
        </div>
    )
}

export default Main