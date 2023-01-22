import axios from "axios";
import React, { useEffect } from "react";
import "./personCard.css"
const PersonCard = (props) => {
    const { _id, name, username } = props.sentPerson;


    return (
        <div className="p-1 p-md-2 col-12 col-md-6 col-lg-4">
            
            <a href={"/people/" + username} class="card-link">
                
                <div class="card Storycard rounded-5 mb-1">
                    <div class="card-content d-flex p-3">
                        <div className="col-5">
                            <img class="card-img rounded-5 cropped" src="http://res.cloudinary.com/dt55mivpf/image/upload/v1674375759/MYBLOG/POSTS/kgylnk6gjcjs5flkgmwj.jpg" alt="Card image cap" height="150" />

                        </div>
                        <div class="card-body col-7 py-0 text-dark">
                            <h5 class="card-title fw-semibold" style={{fontSize:"22px"}}>{name}</h5>
                            <div className="d-block">

                                <p className="card-title d-inline fw-semibold text-muted under-line" style={{fontSize:"19px"}}>{username}</p>
                            </div>
                            <div className="card-content d-inline-flex flex-wrap rounded-3 my-2 p-2" style={{ backgroundColor: "#efefef" }}>
                                <div className="me-3">
                                    <p className="fw-semibold text-muted m-0">
                                        Stories
                                    </p>
                                    <p className="py-0 ps-1 fw-semibold my-0">
                                        12
                                    </p>
                                </div>
                                <div className="me-3">
                                    <p className="fw-semibold text-muted m-0">
                                        Friends
                                    </p>
                                    <p className="py-0 my-0 ps-1 fw-semibold">
                                        34
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </a>



        </div>



    )
}

export default PersonCard;