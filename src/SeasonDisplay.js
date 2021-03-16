import React from 'react'
import './SeasonDisplay.css'

const seasonConfig = {
    winter: {
        text: "Brrr, its chilly",
        iconName: 'snowflake'
    },
    summer: {
        text: "Let's hit the beach",
        iconName: 'sun'
    }
}
const getSeason = (lat, month) => {
    //if month is greater than 2(march) or less than 9
    if (2 < month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth())
    // const text = season === 'winter' ? `Brrr, its chilly` :  `Let's hit the beach`
    // const icon = season === 'winter' ? 'snowflake' : 'sun'
    // seasonConfig[season] returns {text, iconName} for that season
    // using seasonConfig makes it easier to change the text later

    const { text, iconName } = seasonConfig[season]

    return (
        <div className={`season-display ${season}`}>
            <i className={` icon-left massive ${iconName} icon `}></i>
            <h1>{text}</h1>
            <i className={` icon-right massive ${iconName} icon `}></i>

        </div>
    );
}

export default SeasonDisplay;

