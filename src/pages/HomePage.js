
import React, { useState, useRef } from 'react'
import { LuckyWheel } from '@lucky-canvas/react'

const HomePage = () => {
        const [selected, setSelected]=useState('');
    const [blocks] = useState([
        { padding: '10px', background: '#869cfa' }
    ])
    const [prizes] = useState([
        { background: '#e9e8fe', fonts: [{ text: 'Food' }] },
        { background: '#b8c5f2', fonts: [{ text: 'Sports' }] },
        { background: '#e9e8fe', fonts: [{ text: 'Science' }] },
        { background: '#b8c5f2', fonts: [{ text: 'Places' }] },

    ])
    const [buttons] = useState([
        { radius: '40%', background: '#617df2' },
        { radius: '35%', background: '#afc8ff' },
        {
            radius: '30%', background: '#869cfa',
            pointer: true,
            fonts: [{ text: 'Start', top: '-10px' }]
        }
    ])
    const myLucky = useRef();
    return (
        <div align={"center"}>
            <h2>Random start from  a category: </h2>
            <LuckyWheel
                ref={myLucky}
                width="300px"
                height="300px"
                blocks={blocks}
                prizes={prizes}
                buttons={buttons}
                onStart={() => { // 点击抽奖按钮会触发star回调
                    myLucky.current.play()
                    setTimeout(() => {
                        const index = Math.random() * 4 >> 0
                        myLucky.current.stop(index)
                    }, 2500)
                }}

                onEnd={prize => { // 抽奖结束会触发end回调
                    setSelected(prize.fonts[0].text);
                   // alert('You chosed ' + prize.fonts[0].text + ' Category');
                }}
            />
            <div sx={{display:"flex",flexDirection:"row"}}>
               <div><b>Categories:</b> </div> <div>Food</div>
                <div>Sports</div>  <div>Science</div>  <div>Places</div>
            </div>
            {selected!==''?
            <h4>your choice is :{selected}  </h4>
           :null }
        </div>


    );
};

export default HomePage;
