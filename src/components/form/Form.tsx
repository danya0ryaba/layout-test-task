import React from 'react'
import user from '../../assets/user.png'
import { CustomInput } from './CustomInput'

export const Form: React.FC = () => {
    return (
        <div className="wrapper_form">

            <div className="form">

                <ul className="form_choice">
                    <li>Edit Profile</li>
                    <li>Preferences</li>
                    <li>Security</li>
                </ul>

                <form action="">

                    <div className="profile_image">
                        <div className="image">
                            <img src={user} alt="user" />
                            <svg className='image_edit' viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_20_740)">
                                    <path d="M14.587 4.16318L13.2365 5.51376C13.0988 5.65146 12.8761 5.65146 12.7384 5.51376L9.48646 2.26181C9.34876 2.12412 9.34876 1.90146 9.48646 1.76376L10.837 0.413178C11.3849 -0.134674 12.2755 -0.134674 12.8263 0.413178L14.587 2.17392C15.1378 2.72177 15.1378 3.6124 14.587 4.16318ZM8.3263 2.92392L0.632942 10.6173L0.0118485 14.1768C-0.0731124 14.6573 0.345833 15.0733 0.826302 14.9913L4.38587 14.3673L12.0792 6.67392C12.2169 6.53622 12.2169 6.31357 12.0792 6.17587L8.82728 2.92392C8.68665 2.78622 8.464 2.78622 8.3263 2.92392ZM3.63587 9.9581C3.47474 9.79697 3.47474 9.53915 3.63587 9.37802L8.14759 4.8663C8.30872 4.70517 8.56654 4.70517 8.72767 4.8663C8.8888 5.02744 8.8888 5.28525 8.72767 5.44638L4.21595 9.9581C4.05482 10.1192 3.797 10.1192 3.63587 9.9581ZM2.57825 12.422H3.9845V13.4854L2.09486 13.8165L1.18372 12.9054L1.51478 11.0157H2.57825V12.422Z" />
                                </g>
                            </svg>
                        </div>
                    </div>

                    <div className="data">
                        <CustomInput id='1' label='Your Name' />
                        <CustomInput id='2' label='User Name' />
                        <CustomInput id='3' label='Email' type='email' />
                        <CustomInput id='4' label='Password' type='password' />
                        <CustomInput id='5' label='Date of Birth' type='date' />
                        <CustomInput id='6' label='Present Address' />
                        <CustomInput id='7' label='Permanent Address' />
                        <CustomInput id='8' label='City' />
                        <CustomInput id='9' label='Postal Code' type='number' />
                        <CustomInput id='10' label='Country' />
                        <button className="btn">Save</button>
                    </div>

                </form>

            </div>
        </div>
    )
}
