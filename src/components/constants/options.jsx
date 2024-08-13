export const selectTravelesList = [
    {
        id : 1,
        title : "Just me",
        desc : "Traveling solo",
        icon : "🕺",
        people : '1'
    },
    {
        id : 2,
        title : "Me and my partner",
        desc : "Traveling with a partner",
        icon : "👫",
        people : '2'
    },
    {
        id : 3,
        title : "Family",
        desc : "Traveling with family",
        icon : "👨‍👩‍👧‍👦",
        people : '4'
    },
    {
        id : 4,
        title : "Group",
        desc : "Traveling with a group",
        icon : "👨‍👩‍👧‍👦",
        people : '5'
    },
]

export const SelectBudgetOptions = [
    {
        id : 1,
        title : "Cheap",
        desc : "Stay within budget",
        icon : "💰",
    },
    {
        id : 2,
        title : "Mid-Range",
        desc : "Keeping it comfortable",
        icon : "💲",
    },
    {
        id : 3,
        title : "Moderate",
        desc : "Luxury travel",
        icon : "💸",
    },
    {
        id : 4,
        title : "Other",
        desc : "Traveling for business",
        icon : "🧳",
    },
]

export const AI_PROMPT = 'Generate Travel Plan for Location : {location}, for {totalDays} Days for {traveler} people with a {budget} budget, Ginve me a Hotels options list with HotelName, Hotel Adress, Price, hotel image url, geo coordinates, rating, description and suggest itenary with placeName, Place details, Place Image Url, Geo Coordinates, ticket Pricing, ricing , Time travel each of the Location for {totalDays} days with each day plan with best time to visit in JSON FORMAT.'