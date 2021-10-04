import React from "react";
import ReactDOM from 'react-dom';

import './ContactUs.css';

import { FaDirections } from 'react-icons/fa';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';



const ContactUs = () => {
    return (
        <div className='contact-us-main'>
            <div className='dc-homepage-main-heading'>
                <h1>Contact Us</h1>
            </div>
            <div className='phontek-map'>
            <MapContainer center={[28.65783785893507, 77.19196282628083]} zoom={14} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[28.65783785893507, 77.19196282628083]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
            </div>
            <div className='contact-us-add-data'>
                <div className='contact-us-address'>
                    <h2>Khush Mobile Accessories</h2>
                    <p>Shop No-125, First Floor,<br />
                        13/12, W.E.A, Karol Bagh, New Delhi 110005<br />
                        Phone : <a href='tel:+91-11-25805175'>+91-11-25805175</a></p>
                </div>
                <div className='contact-us-directions'>
                    <button type="button"><a target='_blank' href='https://www.google.com/maps/place/13%2F12,+WEA,+Karol+Bagh,+New+Delhi,+Delhi+110005,+India/@28.657659,77.1897634,17z/data=!3m1!4b1!4m9!1m2!2m1!1s13%2F12+WEA,+Karol+Bagh+New+Delhi,+Delhi+110005!3m5!1s0x390d0282fc89adaf:0xd93dde7a4d3cece!8m2!3d28.657659!4d77.1919521!15sCi0xMy8xMiBXRUEsIEthcm9sIEJhZ2ggTmV3IERlbGhpLCBEZWxoaSAxMTAwMDWSARBnZW9jb2RlZF9hZGRyZXNz?hl=en-US'> <FaDirections  size={20}/> Directions</a></button>
                </div>
            </div>

        </div>
    )
}

export default ContactUs