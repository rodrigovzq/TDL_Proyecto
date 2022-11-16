import react from 'react'
import {useState} from 'react'
import './Door.css'

const handle = require('./handle.png')

function Door () {
    const [isChecked, setChecked] = useState<boolean>(false);

    const onClick = () => {
        setChecked(!isChecked)
        console.log(isChecked)
    }

    return (
        <button className={`door${isChecked === true ? ' open' : ''}`} onClick={() => onClick()}>
            <img src={handle} className="handle"/>
        </button>
    )
}

export default Door