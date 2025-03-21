"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import Image from "next/image";
import Peaople1 from "../../public/team/08.png";
import Peaople2 from "../../public/team/07.png";
import Peaople3 from "../../public/team/06.png";
import Peaople4 from "../../public/team/05.png";
import Peaople5 from "../../public/team/04.png";
import Peaople6 from "../../public/team/03.png";
import Peaople7 from "../../public/team/02.png";
import Peaople8 from "../../public/team/01.png";
import Upwork from "../../public/team/upwork_icon.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
    { name: "Stephanie Powell", image: Peaople1, platform: "From Fiverr" },
    { name: "John Doe", image: Peaople2, platform: "From Upwork" },
    { name: "Alice Johnson", image: Peaople3, platform: "From Freelancer" },
    { name: "Michael Smith", image: Peaople4, platform: "From Upwork" },
    { name: "Sarah Lee", image: Peaople5, platform: "From Fiverr" },
    { name: "David Clark", image: Peaople6, platform: "From Freelancer" },
    { name: "Laura Davis", image: Peaople7, platform: "From Upwork" },
    { name: "James Wilson", image: Peaople8, platform: "From Fiverr" },
];

const TeamMembers = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,  // 3 items per row
        rows: 2,          // 2 rows of items
        slidesPerRow: 1,  // Only 1 item per column (the default behavior)
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className="bg-[#FFF] pb-[172px] pt-[202px]  mob:pb-[100px] mob:pt-[50px] mob:mb-[]">
            <div className="proudeCLient-container">
                <div className="proudeCLient-header text-center mb-[38px]">
                    <h2 className="title text-[#0C89FF] text-[16px] mb-[16px] tracking-[3.84px]">CLIENT REVIEWS</h2>
                    <h3 className="text-[#001246] text-[48px] mob:text-[35px] mb-0">Our Proud Clients</h3>
                </div>
                <div className="service-slider-container">
                    <Slider className="teamContentSlider" {...settings}>
                        {teamMembers.map((member, index) => (
                            <div className="testmoial-content" key={index}>
                                <div>
                                    <div className="flex mb-[20px]">
                                        <FaStar size={20} color="#4580FF" />
                                        <FaStar size={20} color="#4580FF" />
                                        <FaStar size={20} color="#4580FF" />
                                        <FaStar size={20} color="#4580FF" />
                                        <FaStar size={20} color="#4580FF" />
                                    </div>

                                    <p className="text-[14px] text-[#424242] leading-[22px] mb-[24px]">
                                        “Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare”
                                    </p>
                                    <div>
                                        <div className="flex items-center justify-start">
                                            <div className="mr-[8px] w-[48px] h-[48px] rounded-full">
                                                <Image className="w-[48px] h-[48px] rounded-full" src={member.image} alt="Logo" width={240} />
                                            </div>
                                            <div>
                                                <h3 className="text-[#0A2C8C] text-[18px]">{member.name}</h3>
                                                <div className="flex items-center justify-start">
                                                    <Image className="w-[16px] h-[16px] mr-[8px] rounded-full" src={Upwork} alt="Logo" width={240} />
                                                    <span className="text-[14px] text-[#B3B8C8]">{member.platform}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>

    );
};

export default TeamMembers;
