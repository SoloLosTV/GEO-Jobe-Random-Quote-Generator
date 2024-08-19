const quotes = [
    "Admin Tools - Save time and energy by streamlining everyday administrative tasks.",
    "Backup My Org - Save items, groups and users to your local drive and easily restore to your destinations.",
    "Clean My Org - Clean up your ArcGIS® Organization without the stress.",
    "Custom Solutions - GEO Jobe is a complete GIS service provider. From data creation to application development, GEO Jobe GIS is committed to doing whatever it takes to move our clients into a position where GIS technology can be used in the decision making process.",
    "UAV Services - Unmanned Aerial Vehicle (UAV / Drone) Mapping Services. GEO Jobe is prepared to support your mapping projects with a fleet of drones using the latest UAV technologies – Accurate, High Resolution, Digital Mapping Products.",
    "Enterprise Services - GEO Jobe offers a variety of solutions to help you achieve your GIS goals, including GEOPowered Cloud deployments, managed services, platform migrations, web application development, data model configuration, and custom training.",

]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generatequote() {
    
    if(usedIndexes.size >= quotes.length) {
        usedIndexes.clear()

    }
    
    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes [randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }

}