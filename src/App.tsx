import braneLogo from '/branelogo.png'
import './App.css'
import GitPreview from './components/gitopengraph'
import Toggle from './components/toggle'

function App() {

    return (
        <>
            <div>
                <img className={"mx-auto logo"} src={braneLogo} alt="Brane Engine Logo" />
                <h1>Brane Engine</h1>
                <h3>The framework for building self-hosted multiplayer VR platforms</h3>
                <div className={"text-left w-90"}>
                    <h2 className="text-xl">Q&A</h2>
                    <Toggle>
                        <h2>What is the Brane Project?</h2>
                        <p>The brane project is a set of open source tools that when used together
                            enables the creation of interconnected immersive worlds.</p>
                        <h2>Is the Brane a platform</h2>
                        <p>Yes and no, in the same way that the web is a platform, the Brane is also a platform.</p>
                        <h2>When will Brane Engine / The Brane be ready?</h2>
                        <p>Currently we have a very small team so progress is slow. We can't promise any timelines but
                            expect it to take a couple years to be ready for production use.</p>
                        <h2>Does the Brane have anything to do with BCI stuff?</h2>
                        <p>No. Brane isn't a misspelling of Brain, it's short for Membrane. Specifically
                            the string theory concept of a "brane" which is what universes are made of.
                            Our logo does lean into the similarities between the words though :)</p>
                        <h2>How is the Brane different from other platforms?</h2>
                        <p>The brane differs in that we're building our engine and scripting runtime from scratch
                            to make it the best performing engine for VR, and allow us to do a lot of novel things
                            like heavy asset streaming.</p>
                    </Toggle>
                    <GitPreview className={"mx-auto overflow-clip rounded-xl m-2 block max-w-[50%]"} owner={"WireWhiz"} repo={"BraneEngine"} />
                    <GitPreview className={"mx-auto overflow-clip rounded-xl m-2 block max-w-[50%]"} owner={"WireWhiz"} repo={"BraneScript"} />
                    <GitPreview className={"mx-auto overflow-clip rounded-xl m-2 block max-w-[50%]"} owner={"WireWhiz"} repo={"TreeSitterBraneScript"} />
                </div>
            </div>
        </>
    )
}

export default App
