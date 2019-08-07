import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <>
        
        <div className="row h-25 align-content-center">
            <div className="col">
                <h1 className="display-4 text-center" style={{"font-size": "calc(4vw + 14px)"}}>Contact Us</h1><hr className="w-75" /><p>Address</p>
            </div>
        </div>
        <div className="row flex-grow-1">
            <div className="col">
                    <iframe title="map" width='100%' height='90%' id='mapcanvas' src='https://maps.google.com/maps?t=&amp;z=10&amp;ie=UTF8&amp;iwloc=&amp;output=embed' frameborder='0' scrolling='no' marginheight='0' marginwidth='0'><div className="zxos8_gm"><a rel="nofollow"  href="https://themesort.com/category/agency-themes">themes here</a></div><div style={{overflow:"hidden"}}><div id='gmap_canvas' style={{height:"100%",width:"100%"}}></div></div><div><small>Powered by <a href="https://www.embedgooglemap.co.uk">Embed Google Map</a></small></div></iframe>
            </div>
        </div>
    
      </>
    )
  }
}
