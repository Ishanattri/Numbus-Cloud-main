import React from "react";

import { members } from "./people/members";

const Team = () =>{
    return(
        <section className="flex justify-center bg-blue1 py-20 text-white">
            <div className="team_container flex  flex-col w-10/12 px-10 items-center sm:w-full sm:px-5">
                <div className="team_text pb-20">
                    <span className="text-3xl font-bold uppercase">Meet the Team</span>
                </div>

                <div className="team_members grid grid-cols-2 gap-4 items-center justify-center gap-x-20 gap-y-10 sm:grid-cols-1">
                    {
                        members.map((data)=>{
                            return(
                                <div className="member_profile flex ">
                                    <div className="member_Img">
                                        <img className="rounded-full" src={data.profilePhoto} width={500} alt="" />
                                    </div>

                                    <div className="member_info pl-5">
                                        <div className="member_name">
                                            <span className="text-2xl font-semibold">{data.name}</span>
                                        </div>
                                        <div className="member_postition pb-2">
                                            <span>{data.designation}</span>
                                        </div>

                                        <div className="member_social_links">

                                        </div>
                                        <div className="bg-blue-gray-400 w-full h-[0.0625rem]" ></div>
                                        <div className="member_information pt-2">
                                            <p className="text-white-700">{data.info}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Team;