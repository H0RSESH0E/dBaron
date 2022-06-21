import React from 'react'
import { strokeShape, strokeColor } from './states.js';
import { langShieldsObj } from '../utils/languages.js';

function RandomHighlight({ item }) {
    // console.log('--> ',langShieldsObj());
    let y = langShieldsObj();
    const { name, set } = item;
    // console.log(name);
    if (set) {
        console.log('SET: ', set);
        console.log('yDOTset: ', set[0]);
        console.log('y -----> ', y[set[0]])

    }

    function randColor() {
        let i = Math.floor(Math.random() * 6)
        return require(`../../public/images/${strokeColor[i].fileName}`);
    }

    function randStroke() {
        let i = Math.floor(Math.random() * 6)
        return require(`../../public/images/${strokeShape[i].fileName}`);
    }

    return (
        <section className="highlight-section">
            <div className="highlight-div">
                <div className="paint-stroke-shadow">{name}</div>
                <img className="lower highlight-stroke-div "
                    key={"bg-color" + name}
                    src={`${randStroke()}`} />
                <img className="upper highlight-stroke-div "
                    key={"bg-stroke" + name}
                    src={`${randColor()}`} />
            </div>
                {set &&             <div className="badge-collection">

                    {
                        set.map((set_item, index) => (
                            <div key={set_item} className="set-set_item-div">
                                {!y[set_item] ? <div key={set_item + index} className="custom-badge">{set_item}</div> : <img src={`${y[set_item]}`} />}
                            </div>
                        ))
                    }
                </div>
                }
           
        </section>
    )
}

export default RandomHighlight;

{/* <div className="set-div">{set}</div> */ }

