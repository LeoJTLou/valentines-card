import EnvelopeOpen from '../svg/EnvelopeOpen';
import EnvelopeUnOpened from '../svg/EnvelopeUnOpened';

export default function LoveEnvelope ({isEnvelopeOpen}) {

    return (
        <div>
            {isEnvelopeOpen ? <EnvelopeOpen svgWidth={300} /> : <EnvelopeUnOpened svgWidth={300} />}
        </div>
    )
}