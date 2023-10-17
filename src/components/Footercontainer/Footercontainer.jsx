import React from 'react'
import accesorios from '../../assets/accesorioslogoavent.jpg'
import accesorioslogobabyinnovation from '../../assets/accesorioslogobabyinnovation.jpg'
import accesorioslogoestrella from '../../assets/accesorioslogoestrella.jpg'
import accesorioslogohuggies from '../../assets/accesorioslogohuggies.jpg'
import accesorioslogolaserenisima from '../../assets/accesorioslogolaserenisima.jpg'
import accesorioslogolove from '../../assets/accesorioslogolove.jpg'
import accesorioslogonuby from '../../assets/accesorioslogonuby.jpg'
import accesorioslogonuk from '../../assets/accesorioslogonuk.jpg'
import accesorioslogopampers from '../../assets/accesorioslogopampers.jpg'
import accesorioslogoqsoft from '../../assets/accesorioslogoqsoft.jpg'
import accesorioslogosancor from '../../assets/accesorioslogosancor.jpg'
import accesorioslogoskiphop from '../../assets/accesorioslogoskiphop.jpg'
import accesorioslogovital from '../../assets/accesorioslogovital.jpg'
import phone from '../../assets/phone-handset_icon-icons.com_48252.png'
import './_Containerproduct.scss'

const Footercontainer = () => {
    return (
        <div className='containe'>
            <div className='contai'>
                <div className='contai_produ'>
                    <div >
                        <a href="">
                            <img className='contai_produ_img' src={accesorios} alt="" />

                        </a>

                    </div>
                    <div >
                        <a href="">
                            <img className='contai_produ_img' src={accesorioslogobabyinnovation} alt="" />

                        </a>

                    </div>
                    <div>
                        <a href="">
                            <img className='contai_produ_img' src={accesorioslogoestrella} alt="" />

                        </a>

                    </div>
                    <div>
                        <a href="">
                            <img className='contai_produ_img' src={accesorioslogohuggies} alt="" />

                        </a>

                    </div>
                    <div>
                        <a href="">
                            <img className='contai_produ_img' src={accesorioslogolaserenisima} alt="" />

                        </a>

                    </div>
                    <div>
                        <a href="">
                            <img className='contai_produ_img' src={accesorioslogolove} alt="" />

                        </a>

                    </div>
                    <div>
                        <a href="">
                            <img className='contai_produ_img' src={accesorioslogonuby} alt="" />

                        </a>

                    </div>
                    <div>
                        <a href="">
                            <img className='contai_produ_img' src={accesorioslogonuk} alt="" />

                        </a>

                    </div>
                    <div>
                        <a href="">
                            <img className='contai_produ_img' src={accesorioslogopampers} alt="" />

                        </a>

                    </div>
                    <div>
                        <a href="">
                            <img className='contai_produ_img' src={accesorioslogoqsoft} alt="" />

                        </a>

                    </div>

                    <div>
                        <a href="">
                            <img className='contai_produ_img' src={accesorioslogosancor} alt="" />

                        </a>

                    </div>
                    <div>
                        <a href="">
                            <img className='contai_produ_img' src={accesorioslogoskiphop} alt="" />

                        </a>

                    </div>
                    <div>
                        <a href="">
                            <img className='contai_produ_img' src={accesorioslogovital} alt="" />

                        </a>

                    </div>

                </div>
            </div>

            <div className='buttonulfrom'>

                <h4>Sucursales</h4>

                <ul >
                    <li>
                        <strong>Recoleta</strong>
                        <br /> gallo 1024,
                        <br />capital federal
                        <br />
                        <i><img src={phone} alt="" /> <span> 011-1531125678</span>   </i>

                    </li>
                    <li>
                        <strong>berazategui</strong>
                        <br /> 124 numero:2450,
                        <br />berazategui
                        <br />
                        <i><img src={phone} alt="" /><span> 011-15312323</span>  </i>
                    </li>
                    <li>
                        <strong>bernal</strong>
                        <br />calvo 1244,
                        <br />quilmes
                        <br />
                        <i><img src={phone} alt="" /><span> 011-1232323</span> </i>
                    </li>
                </ul>





            </div>


        </div>
    )
}

export default Footercontainer
