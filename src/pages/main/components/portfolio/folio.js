import React from 'react'
// import Img from "../../assets/"
import "../portfolio/folio.css"
const Portfolio = () =>{
    return(<>
        <section id="folio" class="s-folio target-section">

        <div class="row section-header light-on-dark" data-num="03">
            <h3 class="column lg-12 section-header__pretitle text-pretitle">Recent Works</h3>
            <div class="column lg-6 stack-on-1100 section-header__primary">
                <h2 class="title text-display-1">
                    Here are some of our favorite projects we have done lately. Feel free to check them out.
                </h2>
            </div>
            <div class="column lg-6 stack-on-1100 section-header__secondary">
                <p class="desc">
                Quia iusto totam facilis ut atque quidem quis maiores iure. 
                Facilis mollitia enim illo sed et totam commodi. Velit a 
                recusandae sequi consequatur est dolorum eaque.
                </p>
            </div>
        </div>

        <div id="bricks" class="row bricks">
            <div class="column lg-12 masonry">
                <div class="bricks-wrapper">

                    <div class="grid-sizer"></div>

                    <article class="brick brick--double entry">
                        <a href="#modal-01" class="entry__link">
                            <div class="entry__thumb">
                                <img src="../../assets/folio/white_turban@2x.jpg" alt="" />
                            </div>
                            <div class="entry__info">
                                <div class="entry__cat">Frontend Design</div>
                                <h4 class="entry__title">White Turban</h4>
                            </div>
                        </a>
                    </article> 

                    <article class="brick brick--double entry">
                        <a href="#modal-02" class="entry__link">
                            <div class="entry__thumb">
                                <img src="../../assets/folio/caffeine_and_tulips@2x.jpg" alt="" />
                            </div>
                            <div class="entry__info">
                                <div class="entry__cat">Brand Identity</div>
                                <h4 class="entry__title">Caffeine & Tulips</h4>
                            </div>
                        </a>
                    </article> 

                    <article class="brick entry">
                        <a href="#modal-03" class="entry__link">
                            <div class="entry__thumb">
                                <img src="../../assets/folio/grayscale@2x.jpg" alt="" />
                            </div>
                            <div class="entry__info">
                                <div class="entry__cat">Product Design</div>
                                <h4 class="entry__title">Grayscale</h4>
                            </div>
                        </a>
                    </article> 

                    <article class="brick entry">
                        <a href="#modal-04" class="entry__link">
                            <div class="entry__thumb">
                                <img src="../../assets/folio/lamp@2x.jpg" alt="" />
                            </div>
                            <div class="entry__info">
                                <div class="entry__cat">E-Commerce</div>
                                <h4 class="entry__title">Lamp</h4>
                            </div>
                        </a>
                    </article> 

                    <article class="brick entry">
                        <a href="#modal-05" class="entry__link">
                            <div class="entry__thumb">
                                <img src="../../assets/folio/tropical@2x.jpg" alt="" />
                            </div>
                            <div class="entry__info">
                                <div class="entry__cat">Frontend Design</div>
                                <h4 class="entry__title">Tropical</h4>
                            </div>
                        </a>
                    </article>

                    <article class="brick entry">
                        <a href="#modal-06" class="entry__link">
                            <div class="entry__thumb">
                                <img src="../../assets/folio/woodcraft@2x.jpg" alt="" />
                            </div>
                            <div class="entry__info">
                                <div class="entry__cat">E-Commerce</div>
                                <h4 class="entry__title">Woodcraft</h4>
                            </div>
                        </a>
                    </article>

                </div> 
            </div>
        </div> 


     
        <div id="modal-01" hidden>
            <div class="modal-popup">
                <img src="../../assets/folio/gallery/g-turban.jpg" alt="" />
    
                <div class="modal-popup__desc">
                    <h5>White Turban</h5>
                    <p>Odio soluta enim quos sit asperiores rerum rerum repudiandae cum. Vel voluptatem alias qui assumenda iure et expedita voluptatem. Ratione officiis quae.</p>
                    <ul class="modal-popup__cat">
                        <li>UX Research</li>
                        <li>Frontend Design</li>
                    </ul>
                </div>
    
                <a href="https://www.behance.net/" class="modal-popup__details">Project link</a>
            </div>
        </div> 

        <div id="modal-02" hidden>
            <div class="modal-popup">
                <img src="../../assets/folio/gallery/g-tulips.jpg" alt="" />
    
                <div class="modal-popup__desc">
                    <h5>Caffeine & Tulips</h5>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                    <ul class="modal-popup__cat">
                        <li>Brand Identity</li>
                    </ul>
                </div>
    
                <a href="https://www.behance.net/" class="modal-popup__details">Project link</a>
            </div>
        </div> 

        <div id="modal-03" hidden>
            <div class="modal-popup">
                <img src="../../assets/folio/gallery/g-grayscale.jpg" alt="" />
    
                <div class="modal-popup__desc">
                    <h5>Grayscale</h5>
                    <p>Exercitationem reprehenderit quod explicabo consequatur aliquid ut magni ut. Deleniti quo corrupti illum velit eveniet ratione necessitatibus ipsam mollitia.</p>
                    <ul class="modal-popup__cat">
                        <li>Product Design</li>
                    </ul>
                </div>
    
                <a href="https://www.behance.net/" class="modal-popup__details">Project link</a>
            </div>
        </div> 

        <div id="modal-04" hidden>
            <div class="modal-popup">
                <img src="../../assets/folio/gallery/g-lamp.jpg" alt="" />
    
                <div class="modal-popup__desc">
                    <h5>The Lamp</h5>
                    <p>Dolores velit qui quos nobis. Aliquam delectus voluptas quos possimus non voluptatem voluptas voluptas. Est doloribus eligendi porro doloribus voluptatum.</p>
                    <ul class="modal-popup__cat">
                        <li>E-Commerce</li>
                    </ul>
                </div>
    
                <a href="https://www.behance.net/" class="modal-popup__details">Project link</a>
            </div>
        </div> 

        <div id="modal-05" hidden>
            <div class="modal-popup">

                <img src="../../assets/folio/gallery/g-tropical.jpg" alt="" />
    
                <div class="modal-popup__desc">
                    <h5>Tropical</h5>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                    <ul class="modal-popup__cat">
                        <li>Frontend Design</li>
                    </ul>
                </div>
    
                <a href="https://www.behance.net/" class="modal-popup__details">Project link</a>
            </div>
        </div> 

        <div id="modal-06" hidden>
            <div class="modal-popup">
                <img src="../../assets/folio/gallery/g-woodcraft.jpg" alt="" />
    
                <div class="modal-popup__desc">
                    <h5>Woodcraft</h5>
                    <p>Quisquam vel libero consequuntur autem voluptas. Qui aut vero. Omnis fugit mollitia cupiditate voluptas. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                    <ul class="modal-popup__cat">
                        <li>E-Commerce</li>
                        <li>Product Design</li>
                    </ul>
                </div>
    
                <a href="https://www.behance.net/" class="modal-popup__details">Project link</a>
            </div>
        </div> 


        <div class="s-clients row">
            <div class="column lg-12">

                <div class="row section-header">
                    <div class="column lg-12">
                        <h3 class="title text-display-1">Brands we have had priveledge to work with</h3>
                    </div>
                </div> 

                <div class="row clients-list block-lg-one-fourth block-md-one-third block-tab-one-half block-stack">

                    <div class="column clients-list__item">
                        <a href="#0">
                            <img src="../../assets/clients/snowflake.svg" alt="" />
                        </a>
                    </div>
                    <div class="column clients-list__item">
                        <a href="#0">
                            <img src="../../assets/clients/flash.svg" alt="" />
                        </a>
                    </div>
                    <div class="column clients-list__item">
                        <a href="#0">
                            <img src="../../assets/clients/rise.svg" alt="" />
                        </a>
                    </div>
                    <div class="column clients-list__item">
                        <a href="#0">
                            <img src="../../assets/clients/pinpoint.svg" alt="" /> 
                        </a>
                    </div>
                    <div class="column clients-list__item">
                        <a href="#0">
                            <img src="../../assets/clients/proline.svg" alt="" />
                        </a>
                    </div>
                    <div class="column clients-list__item">
                        <a href="#0">
                            <img src="../../assets/clients/vision.svg" alt="" />
                        </a>
                    </div>
                    <div class="column clients-list__item">
                        <a href="#0">
                            <img src="../../assets/clients/volume.svg" alt="" />
                        </a>
                    </div>
                    <div class="column clients-list__item">
                        <a href="#0">
                            <img src="../../assets/clients/hitech.svg" alt="" />
                        </a>
                    </div>

                </div> 
            </div> 
        </div> 

    </section> 
    </>
    )
}

export default Portfolio