import React from "react";
import style from "./JobCard.module.css";
import { ReactComponent as LocationIcon } from "./icon/location_icon.svg";
import { ReactComponent as BookmarkIcon } from "./icon//bookmark _icon.svg";
import { Link } from "react-router-dom";

const JobCard = ({
    profession,
    town,
    firm_name,
    currency,
    type_of_work,
    payment_to,
    payment_from,
    id,
}) => {
    return (
        <li className={style.JobCard}>
            <Link className={style.JobCardProfession} to={`/${id}`}>
                {profession}
                {firm_name}
            </Link>
            <p className={style.JobCardCurrency}>
                {payment_from
                    ? `з/п от ${payment_from} до ${payment_to} - ${currency}`
                    : ""}

                <span className={style.JobCardType}>{type_of_work.title}</span>
            </p>
            <div className={style.JobCardLocation}>
                <LocationIcon />
                <span className={style.JobCardCity}>{town.title}</span>
            </div>
            <BookmarkIcon className={style.JobCardBookmark} />
        </li>
    );
};

export default JobCard;
