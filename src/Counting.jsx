import React,{useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import ThemedDigitalClock from 'themed-digital-clock';
import Countdown from './Countdown'


const Counting=()=>{
    const [num, setNum] = useState(0);

    const incNum = ()=>{
        setNum(num+1);
    }
    const decNum = ()=>{
        if(num>0){
            setNum(num-1);
        }else{
            alert('Sorry ');
            setNum(0);
        }
    }

    return(
        <>
        <ThemedDigitalClock 
          description="Welcome to the Roboland" useDarkTheme={true} size={50} 
        />
            <div className="main_div">
                <div className="center_div">
                    <h1>{num}</h1>
                    <div className="btn_div">
                        <Tooltip title="Add">
                            <Button onClick={incNum} className="btn_green"><AddIcon /></Button>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <Button onClick={decNum} className="btn_red"><DeleteIcon /></Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <Countdown />
        </>
    )
}

export default Counting;