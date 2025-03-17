"use client";

import React from "react";
import Image from "next/image";
import Star from "../../public/icon/star.svg";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface TabContent {
    id: number;
    title: string;
    subtitle: string;
}

const TeamMembers = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div className="service-container">
            <div className="service-header">
                <h2>Proud Clients</h2>
                <h3>Our Team Members</h3>
            </div>
            <div className="service-slider-container">
                <Slider {...settings}>

                    <div>
                        <div>
                            <Image src={Star} alt="Logo" width={40} />
                            <p>
                                “Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare”
                            </p>
                            <div>
                                <Image src={Star} alt="Logo" width={40} />
                                <div>
                                    <h3>Stephanie Powell</h3>
                                    <div>
                                        <Image src={Star} alt="Logo" width={40} />
                                        <span>From fiverr</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src={Star} alt="Logo" width={40} />
                            <p>
                                “Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare”
                            </p>
                            <div>
                                <Image src={Star} alt="Logo" width={40} />
                                <div>
                                    <h3>Stephanie Powell</h3>
                                    <div>
                                        <Image src={Star} alt="Logo" width={40} />
                                        <span>From fiverr</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src={Star} alt="Logo" width={40} />
                            <p>
                                “Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare”
                            </p>
                            <div>
                                <Image src={Star} alt="Logo" width={40} />
                                <div>
                                    <h3>Stephanie Powell</h3>
                                    <div>
                                        <Image src={Star} alt="Logo" width={40} />
                                        <span>From fiverr</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src={Star} alt="Logo" width={40} />
                            <p>
                                “Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare”
                            </p>
                            <div>
                                <Image src={Star} alt="Logo" width={40} />
                                <div>
                                    <h3>Stephanie Powell</h3>
                                    <div>
                                        <Image src={Star} alt="Logo" width={40} />
                                        <span>From fiverr</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src={Star} alt="Logo" width={40} />
                            <p>
                                “Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare”
                            </p>
                            <div>
                                <Image src={Star} alt="Logo" width={40} />
                                <div>
                                    <h3>Stephanie Powell</h3>
                                    <div>
                                        <Image src={Star} alt="Logo" width={40} />
                                        <span>From fiverr</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src={Star} alt="Logo" width={40} />
                            <p>
                                “Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare”
                            </p>
                            <div>
                                <Image src={Star} alt="Logo" width={40} />
                                <div>
                                    <h3>Stephanie Powell</h3>
                                    <div>
                                        <Image src={Star} alt="Logo" width={40} />
                                        <span>From fiverr</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src={Star} alt="Logo" width={40} />
                            <p>
                                “Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare”
                            </p>
                            <div>
                                <Image src={Star} alt="Logo" width={40} />
                                <div>
                                    <h3>Stephanie Powell</h3>
                                    <div>
                                        <Image src={Star} alt="Logo" width={40} />
                                        <span>From fiverr</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src={Star} alt="Logo" width={40} />
                            <p>
                                “Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare”
                            </p>
                            <div>
                                <Image src={Star} alt="Logo" width={40} />
                                <div>
                                    <h3>Stephanie Powell</h3>
                                    <div>
                                        <Image src={Star} alt="Logo" width={40} />
                                        <span>From fiverr</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src={Star} alt="Logo" width={40} />
                            <p>
                                “Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare”
                            </p>
                            <div>
                                <Image src={Star} alt="Logo" width={40} />
                                <div>
                                    <h3>Stephanie Powell</h3>
                                    <div>
                                        <Image src={Star} alt="Logo" width={40} />
                                        <span>From fiverr</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default TeamMembers;
