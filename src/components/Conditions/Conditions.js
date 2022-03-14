import React from 'react';
import classes from './Conditions.module.css'
import moment from 'moment';


const Conditions = (props) => {

    return (

        <div className={classes.Wrapper}>
            {props.error && <small>Please enter a valid city.</small>}
            {props.loading && <div>Loading...</div>}
            {props.responseObj.cod === 200 ?
                <div className={classes.Wrapper}>
                    <p><strong>{props.responseObj.name}</strong></p>
                    <p>{moment().format('LL')}</p>
                    <p>{moment().format('dddd')}</p>
                    <img src={`http://openweathermap.org/img/w/${props.responseObj.weather[0].icon}.png`}
                        alt="wthr img" className={classes.Icon} />
                    <p>{Math.round(props.responseObj.main.temp_max)} &emsp;
                        <span>{Math.round(props.responseObj.main.temp_min)}</span></p>
                </div>
                : null
            }
        </div>
    )
}
export default Conditions;