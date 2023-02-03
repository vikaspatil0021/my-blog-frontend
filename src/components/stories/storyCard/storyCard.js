import axios from "axios";
import React, { useEffect, useState } from "react";
import "./storyCard.css"

const StoryCard = (props) => {

    const { _id, title, imageURL, content, likes } = props.sentStory;
    if (props.user) {

        var { _id: sessionId } = props.user;
    }
    const like = (likes.includes(sessionId)) ? "bi-heart-fill" : "bi-heart";
    const [fUser, setfUser] = useState({});
    const { name, profileImgURL } = fUser

    useEffect(() => {

        axios.get(process.env.REACT_APP_SERVER_URL + "/stories/" + _id, { withCredentials: "include" })
            .then((res) => {
                setfUser(res.data.user)

            }).catch((error) => {
                console.log(error);

            });
    }, []);


    return (
        <div className="p-1 p-md-2 col-12 col-md-6 col-lg-4">

            <a href={"/stories/" + _id} class="card-link">
                <div class="card Storycard rounded-5 mb-2">
                    <div class="card-content p-3 pb-0">
                        <img class="card-img rounded-5 cropped" src={imageURL} alt="Card image cap" height="300" />
                        <div class="card-body text-dark">
                            <h4 class="card-title overflow-text">{title}</h4>
                            <div className="d-flex justify-content-between py-2">

                                <div className="d-flex border-0 rounded-4">

                                    <img src={profileImgURL} className=" rounded-5 me-2" height="30" width="30" />

                                    <span className="text-muted fs-5 fw-bold">{name}</span>
                                </div>
                                <div className="d-flex">

                                    <i class={"bi " + like + " mx-2 d-inline fs-5 text-danger"} />
                                    <h5 className="fw-lighter">{likes.length}</h5>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </a>


        </div>


    );
}

export default StoryCard;