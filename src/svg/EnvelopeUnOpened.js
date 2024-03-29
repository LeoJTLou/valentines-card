export default function EnvelopeUnOpened(props) {
    const svgStyle = {
        st0: {fill:'#EDD1E0'},
        st1: {fill:'#EAACC3'},
        st2: {fill:'#C12127'},
        st3: {fill:'#E27FA8'},
        st4: {fill:'#F2E2E9'},
    }
    return (
        <svg 
        version="1.1" 
        id="Envelope_Unopened" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        width={props.svgWidth}
        x="0px" 
        y="0px"
	    viewBox="0 0 300 220" 
        style={{ enableBackground: 'new 0 0 300 360.54' }} 
        xmlSpace="preserve">
        <style type="text/css">
            {Object.keys(svgStyle).map((key) => `.${key}{fill:${svgStyle[key].fill};}`).join('')}
        </style>
        <g id="Envelope">
            <path class="st0" d="M7.17,7.42L150,110L7.17,212.59C2.73,208.1,0,201.93,0,195.12V24.88C0,18.07,2.73,11.91,7.17,7.42z"/>
            <path class="st0" d="M300,24.88v170.24c0,6.81-2.73,12.98-7.17,17.47L150,110L292.83,7.42C297.27,11.91,300,18.07,300,24.88z"/>
            <path class="st1" d="M292.83,7.42L150,110L7.17,7.42c0.27-0.29,0.56-0.56,0.85-0.83C12.45,2.49,18.37,0,24.88,0h250.24
                c6.51,0,12.43,2.49,16.86,6.59C292.27,6.86,292.56,7.13,292.83,7.42z"/>
            <path class="st1" d="M292.83,212.59c-0.28,0.29-0.57,0.56-0.86,0.83c-4.43,4.09-10.35,6.58-16.85,6.58H24.88
                c-6.5,0-12.42-2.49-16.85-6.58c-0.29-0.27-0.58-0.54-0.86-0.83L150,110L292.83,212.59z"/>
        </g>
        <g id="Heart">
            <path class="st2" d="M203.85,87.04c0,1.4-0.12,2.84-0.34,4.29c-4.59,29.59-53.51,68.58-53.51,68.58s-48.92-38.99-53.51-68.58
                c-0.22-1.45-0.34-2.89-0.34-4.29c0-14.87,12.06-26.93,26.93-26.93c14.2,0,25.83,11,26.84,24.94c0.06,0.66,0.08,1.32,0.08,1.99
                c0-0.67,0.02-1.33,0.08-1.99c1.01-13.94,12.64-24.94,26.84-24.94C191.79,60.11,203.85,72.17,203.85,87.04z"/>
            <path class="st2" d="M150,85.05v1.99c0-0.67-0.02-1.33-0.08-1.99H150z"/>
        </g>
        </svg>

    )
}