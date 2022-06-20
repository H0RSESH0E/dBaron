 const navBarArr = [
    {name: "About Me", description: "My brand statement and brief bio."}, 
    {name:"Portfolio",description:"A collection of my work as a developer"},
    {name:"Contact",description:"Please share your contact details with me if you'd like to be in touch."},
    {name:"Resume",description:"Please download a pdf of my resume as a developer."}
]

const projectsArr = [
    {name: "Pet Alert", description: "A MERN stack app that allows users to find their lost pets", readmeLink: "https://github.com/KennWg/pet-finder#readme", deploymentLink: "https://aqueous-tor-23936.herokuapp.com/", screenshots: [{small:["work-example-1.png"]},{large:["mern-pet-alert.png"]}]},
    {name: "Emergent", description: "A purely CSS and HTML portfolio website", readmeLink: "https://github.com/H0RSESH0E/DavidsPortfolioRepo#readme", deploymentLink: "https://h0rsesh0e.github.io/DavidsPortfolioRepo/", screenshots: [{small:["work-example-2.png"]},{large:["CSS-portfolio-screenshot.png"]}]},
    {name: "Glide", description: "An activity board and car pooling website", readmeLink: "https://github.com/H0RSESH0E/glide-activity-carpooling#readme", deploymentLink: "https://glide-activity-carpooling.herokuapp.com/", screenshots: [{small:["work-example-3.png"]},{large:["glide-screenshot.png"]}]},
    {name: "Graphic Design", description: "Freelance and volunteer business cards, logos, posters and flyers", readmeLink: "", deploymentLink: "https://photos.google.com/share/AF1QipMRFbPWhMC5KCca-Bsav0SlNk7WL31N7h8T5Vw3rHlSUKKM6oF38GWE3RWJwszegA/photo/AF1QipNpsQ__MsA1sZEfjHlNrc0pEims3u5evWzIFHdd?key=OVVzV191c2F6NW03YnlodDM3dXFhNUZTeVVyX1dn", screenshots: [{small:["work-example-4.png"]},{large:["MOLM-cover.png"]}]},
    {name: "React", description: "A clean portfolio website built using React", readmeLink: "https://github.com/H0RSESH0E/dBaron/tree/main/d-baron#readme", deploymentLink: "", screenshots: [{small:["work-example-5.png"]},{large:["react-screenshot2.png"]}]},
    {name: "mongoDB", description: "A backend utilizing mongoDB's cloud database", readmeLink: "https://github.com/H0RSESH0E/peepsAndDeepsAPI#readme", deploymentLink: "https://github.com/H0RSESH0E/peepsAndDeepsAPI", screenshots: [{small:["work-example-6.png"]},{large:["peepsAndDeeps-screenshot.png"]}]}
]

const skillsNTech = [
    {name: "Front-End:", set: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery", "React"]},
    {name: "Back-End:", set: ["Node.js", "Express", "MySQL", "Sequelize", "MongoDB",'Jest', "Insomnia"]},
    {name: "Concepts:", set: ["APIs", "REST", "MVC", "TDD"]},
    {name: "Tools:", set: ["Git", "GitHub", "GitLab", "Heroku", "Visual Studio Code",'Corel Photo Paint', 'Starbucks']},
    {name: "Certifications:", set: ["The Art of Encouragement - Ontario Society of Adlerian Psychology"]}
]

const paintStrokes = [
    {name: "Red", fileName: "redStroke.png"},
    {name: "Orange", fileName: "orangeStroke.png"},
    {name: "Yellow", fileName: "yellowStroke.png"},
    {name: "Green", fileName: "greenStroke.png"},
    {name: "Blue", fileName: "blueStroke.png"},
    {name: "Violet", fileName: "violetStroke.png"}
]

const strokeColor = [
    {name: "paint-one", fileName: "paint-one.jpg"},
    {name: "paint-two", fileName: "paint-two.jpg"},
    {name: "paint-three", fileName: "paint-three.jpg"},
    {name: "paint-four", fileName: "paint-four.jpg"},
    {name: "paint-five", fileName: "paint-five.jpg"},
    {name: "paint-six", fileName: "paint-six.jpg"}
]

const strokeShape = [
    {name: "stroke-one", fileName: "stroke-one.jpg"},
    {name: "stroke-two", fileName: "stroke-two.jpg"},
    {name: "stroke-three", fileName: "stroke-three.jpg"},
    {name: "stroke-four", fileName: "stroke-four.jpg"},
    {name: "stroke-five", fileName: "stroke-five.jpg"},
    {name: "stroke-six", fileName: "stroke-six.jpg"}
]
module.exports = {navBarArr, projectsArr, paintStrokes, skillsNTech, strokeColor, strokeShape };
