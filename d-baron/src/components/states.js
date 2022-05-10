 const navBarArr = [
    {name: "About Me", description: "My brand statement and brief bio."}, 
    {name:"Portfolio",description:"A collection of my work as a developer"},
    {name:"Contact",description:"Please share your contact details with me if you'd like to be in touch."},
    {name:"Resume",description:"Please download a pdf of my resume as a developer."}
]

const projectsArr = [
    {name: "Run Buddy", description: "My First HTML project in the Boot Camp", readmeLink: "https://github.com/H0RSESH0E/run-buddy#readme", deploymentLink: "https://h0rsesh0e.github.io/run-buddy/", screenshots: [{small:["work-example-1.png"]},{large:["runbuddy-screenshot.png"]}]},
    {name: "Emergent", description: "A purely CSS and HTML protfolio website", readmeLink: "https://github.com/H0RSESH0E/DavidsPortfolioRepo#readme", deploymentLink: "https://h0rsesh0e.github.io/DavidsPortfolioRepo/", screenshots: [{small:["work-example-2.png"]},{large:["CSS-portfolio-screenshot.png"]}]},
    {name: "Glide", description: "An activity board and car pooling website", readmeLink: "https://github.com/H0RSESH0E/glide-activity-carpooling#readme", deploymentLink: "https://glide-activity-carpooling.herokuapp.com/", screenshots: [{small:["work-example-3.png"]},{large:["glide-screenshot.png"]}]},
    {name: "Graphic Design", description: "Freelance and volunteer graphic design including: business cards, logos, posters and flyers", readmeLink: "", deploymentLink: "https://photos.google.com/share/AF1QipMRFbPWhMC5KCca-Bsav0SlNk7WL31N7h8T5Vw3rHlSUKKM6oF38GWE3RWJwszegA/photo/AF1QipNpsQ__MsA1sZEfjHlNrc0pEims3u5evWzIFHdd?key=OVVzV191c2F6NW03YnlodDM3dXFhNUZTeVVyX1dn", screenshots: [{small:["work-example-4.png"]},{large:[]}]},
    {name: "React", description: "A plain snd simple portfolio website built using React", readmeLink: "https://github.com/H0RSESH0E/dBaron/tree/main/d-baron#readme", deploymentLink: "", screenshots: [{small:["work-example-5.png"]},{large:[]}]},
    {name: "mongoDB", description: "A backend utilizing mongoDB's cloud database", readmeLink: "https://github.com/H0RSESH0E/peepsAndDeepsAPI#readme", deploymentLink: "https://github.com/H0RSESH0E/peepsAndDeepsAPI", screenshots: [{small:["work-example-6.png"]},{large:[]}]}
]
module.exports = {navBarArr, projectsArr};