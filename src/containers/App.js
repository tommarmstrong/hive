import React from 'react'
import PhoneApp from "../components/PhoneApp"
import Info from "../components/Info"
import views from "../components/Views/views"


const App = () => (
    <div>
        <PhoneApp view={views.PROFILE}/>
        <Info title="Title" text="text" />
    </div>
)

export default App