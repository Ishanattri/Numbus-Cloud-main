import React from "react";
import "./client.css"

import Insta from "../../assets/clients_logo/instagram.svg"
import Gumroad from "../../assets/clients_logo/gumroad.svg"
import Stripe from "../../assets/clients_logo/stripe.svg"
import Microsoft from "../../assets/clients_logo/microsoft.svg"
import grammly from "../../assets/clients_logo/grammarly.svg"


const Client = () =>{
    return(
        <section className="flex justify-center py-20">
            <div className="client_container flex flex-col items-center w-10/12 px-10 sm:w-full sm:px-5">
                <div className="client_text py-10 pb-20">
                    <span className="text-3xl uppercase font-bold">Some Of Our Clients</span>
                </div>
                <div className="client_companies flex justify-around w-full sm:inline-grid sm:grid-cols-2 sm:items-center sm:justify-items-center sm:gap-y-14 ">
                    <img className="" src={Insta} width={150} alt="" />
                    <img src={Gumroad} width={150} alt="" />
                    <img src={Stripe} width={150} alt="" />
                    <img src={Microsoft} width={150} alt="" />
                    <img className="pt-4" src={grammly} width={150} alt="" />
                </div>
            </div>

            <hr />
        </section>
    )
}


export default Client;