import braneLogo from '/branelogo.png'
import './App.css'
import GitPreview from './components/gitopengraph'
import Button from './components/button'

function App() {

    return (
        <>
            <div>
                <img className={"mx-auto logo"} src={braneLogo} alt="Brane Engine Logo" />
                <h1>Brane Engine</h1>
                <h2>The framework for building self-hosted multiplayer VR platforms</h2>
                <br />
                <Button
                    label="BraneScript Docs"
                    href="https://scripting.thebrane.org"
                />
                <p>I'm still working on these sites, so in the meantime check out the projects open source repos!</p>
                <br />
                <GitPreview className={"mx-auto overflow-clip rounded-xl m-2 block max-w-[50%]"} owner={"WireWhiz"} repo={"BraneEngine"} />
                <GitPreview className={"mx-auto overflow-clip rounded-xl m-2 block max-w-[50%]"} owner={"WireWhiz"} repo={"BraneScript"} />
                <GitPreview className={"mx-auto overflow-clip rounded-xl m-2 block max-w-[50%]"} owner={"WireWhiz"} repo={"TreeSitterBraneScript"} />
                <br />
            </div>
        </>
    )
}

export default App
