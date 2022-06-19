import React from 'react'
import { paintStrokes } from './states.js';
import { langShieldsObj } from '../utils/languages.js';

function highlightText({ item }) {
    // console.log('--> ',langShieldsObj());
    let y = langShieldsObj();
    const { name, set } = item;
    // console.log(name);
    if (set) {
        console.log('SET: ', set);
        console.log('yDOTset: ', set[0]);
        console.log('y -----> ', y[set[0]])

    }

    function randPaint() {
        let i = Math.floor(Math.random() * 6)
        return require(`../../public/images/${paintStrokes[i].fileName}`);
    }

    return (
        <section className="highlight-section">
            <div className="highlight-div">
                <div className="paint-stroke-shadow">{name}</div>
                <img className="highlight-stroke-div "
                    key={"bg-stroke"}
                    src={`${randPaint()}`} />
            </div>
            {set && <>
                {
                    set.map((set_item, index) => (
                        <div key={set_item} className="set-set_item-div">
                            {!y[set_item] ? <div key={set_item + index} className="custom-badge">{set_item}</div> : <img src={`${y[set_item]}`} />}
                         </div>
                    ))
                }
            </>
            }



        </section>
    )
}

export default highlightText;

{/* <div className="set-div">{set}</div> */ }

