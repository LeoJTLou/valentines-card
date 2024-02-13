import { useState } from 'react';
import LoveEnvelope from "../components/LoveEnvelope";

export default function SceneOne({currentScene, setDisplay}) {
    const [envelopeSealed, setEnvelopeOpen] = useState(false);
    
    function handleOpenEnvelope() {
        // Your logic when the button is clicked in the parent
        setEnvelopeOpen(true);

        if (!envelopeSealed) {
            setTimeout(() => {
                setDisplay(currentScene => currentScene + 1);
            }, 3000)
        }
    }
    return (
        <div id="Scene1" style={{textAlign:'center'}}>
            <div style={{marginTop: 50, marginBottom: 50}}>
                <h1 style={{fontSize: 50, color: '#ed4e73'}}>Hello Babe</h1>
                <h2 style={{fontSize: 30, color: '#ed4e73'}}>I sent you a letter!</h2>
                {!envelopeSealed ? <button className='btn' onClick={handleOpenEnvelope}>Open</button> : ''}
            </div>
            <div className='svgContainer'>
                <LoveEnvelope isEnvelopeOpen={envelopeSealed} />
            </div>
        </div>
    )
}