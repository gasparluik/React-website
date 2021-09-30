import React from 'react';
import '../../App.css';
import './css/Music.css';


export default function Music () {

    return (
        <div className="music">
            <h1>Musicum</h1>
                <div className="music-player-wrapper">
                    <div className="music-player-items">
                        <div className="music-player-item">
                        <iframe 
                        width="100%"
                        height="120"
                        src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fgaspar-luik%2Fso-alive%2F" 
                        frameborder="0" />
                        </div>
                        <div className="music-player-item">
                        <iframe
                        width="100%"
                        height="120"
                        src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fgaspar-luik%2Fand-then-it-came-to-him%2F"
                        frameborder="0"/>
                        </div>
                    </div>
                    <div className="music-player-items">
                        <div className="music-player-item">
                        <iframe 
                        width="100%"
                        height="120"
                        src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=0&feed=%2Fgaspar-luik%2Fthe-shape-of-sound%2F"
                        frameborder="0"
                        />
                        </div>
                        <div className="music-player-item">
                        <iframe 
                        width="100%" 
                        height="120" 
                        src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fgaspar-luik%2Flike-water%2F" 
                        frameborder="0"/>
                        </div>
                        <div className="music-player-item">
                        <iframe 
                        width="100%" 
                        height="120" 
                        src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fgaspar-luik%2Fsoveldaja-funkaloo-28082021%2F" 
                        frameborder="0" 
                        />
                        </div>                      
                    </div>
                </div>
        </div>

    )
}
