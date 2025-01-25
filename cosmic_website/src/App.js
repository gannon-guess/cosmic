import React, { useState } from "react";
import View from "./Views.js"
import Main from "./Main.js"
import FAQ from "./FAQ.js"
import Signup from "./Signup.js"

function App()
{
    // we need a viewer to pick which  page to display at any given time
    const [viewer, setViewer] = useState(View.MAIN); // 

    // we display the page based on viewer for module, single page development
    return(
        <div>
            {viewer === View.MAIN ? (
                <Main 
                    viewer={viewer}
                    setViewer = {setViewer}
                />
            ) : viewer === View.FAQ ? (
                <FAQ 
                    viewer={viewer}
                    setViewer = {setViewer}
                />
            ) : viewer === View.SIGNUP ?  
            ( 
                <Signup
                    viewer={viewer}
                    setViewer = {setViewer}    
                />
            ) :
            (
                <Main 
                    viewer={viewer}
                    setViewer = {setViewer}
                />
            )}
        </div>
    );
}

export default App;