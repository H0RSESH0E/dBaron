// arrays of data for language types and markdown links to badges for each
const languages = ['Apache Groovy', 'C', 'C#', 'C++', 'Crystal', 'CSS3', 'Clojure', 'Dart', 'Elixir', 'Elm', 'Erlang', 'Fortran', 'Go/Golang', 'GraphQL', 'Haskell', 'HTML5', 'Java', 'JavaScript', 'Julia', 'Kotlin', 'LaTeX', 'Lua', 'Markdown', 'Nim', 'Octave', 'PHP', 'Perl', 'Python', 'R', 'Ruby', 'Rust', 'Scala', 'Shell Script', 'Solidity', 'Swift', 'TypeScript', 'Zig', 'MongoDB', 'React', 'Express', 'JSON', 'JSON Web Tokens', 'Node.js', 'Nodemon', 'Apollo GraphQL', 'Visual Studio Code', 'Heroku', 'npm', 'Trello', 'Slack', 'Zoom', 'Google Meet', 'Bootstrap', 'Starbucks']

const markdown = [
    'https://img.shields.io/badge/Apache%20Groovy-4298B8.svg?style=for-the-badge&logo=Apache+Groovy&logoColor=white',
    'https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white',
    'https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white',
    'https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white',
    'https://img.shields.io/badge/crystal-%23000000.svg?style=for-the-badge&logo=crystal&logoColor=white',
    'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white',
    'https://img.shields.io/badge/Clojure-%23Clojure.svg?style=for-the-badge&logo=Clojure&logoColor=Clojure',
    'https://img.shields.io/badge/dart-%230175C2.svg?style=for-the-badge&logo=dart&logoColor=white',
    'https://img.shields.io/badge/elixir-%234B275F.svg?style=for-the-badge&logo=elixir&logoColor=white',
    'https://img.shields.io/badge/Elm-60B5CC?style=for-the-badge&logo=elm&logoColor=white',
    'https://img.shields.io/badge/Erlang-white.svg?style=for-the-badge&logo=erlang&logoColor=a90533',
    'https://img.shields.io/badge/Fortran-%23734F96.svg?style=for-the-badge&logo=fortran&logoColor=white',
    'https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white',
    'https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white',
    'https://img.shields.io/badge/Haskell-5e5086?style=for-the-badge&logo=haskell&logoColor=white',
    'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white',
    'https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white',
    'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
    'https://img.shields.io/badge/-Julia-9558B2?style=for-the-badge&logo=julia&logoColor=white',
    'https://img.shields.io/badge/kotlin-%230095D5.svg?style=for-the-badge&logo=kotlin&logoColor=white',
    'https://img.shields.io/badge/latex-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white',
    'https://img.shields.io/badge/lua-%232C2D72.svg?style=for-the-badge&logo=lua&logoColor=white',
    'https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white',
    'https://img.shields.io/badge/nim-%23FFE953.svg?style=for-the-badge&logo=nim&logoColor=white',
    'https://img.shields.io/badge/OCTAVE-darkblue?style=for-the-badge&logo=octave&logoColor=fcd683',
    'https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white',
    'https://img.shields.io/badge/perl-%2339457E.svg?style=for-the-badge&logo=perl&logoColor=white',
    'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54',
    'https://img.shields.io/badge/r-%23276DC3.svg?style=for-the-badge&logo=r&logoColor=white',
    'https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white',
    'https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white',
    'https://img.shields.io/badge/scala-%23DC322F.svg?style=for-the-badge&logo=scala&logoColor=white',
    'https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white',
    'https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white',
    'https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white',
    'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
    'https://img.shields.io/badge/Zig-%23F7A41D.svg?style=for-the-badge&logo=zig&logoColor=white',
    'https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=mongodb&logoColor=white',
    'https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=react&logoColor=white',
    'https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=express&logoColor=white',
    'https://img.shields.io/badge/JSON-000000.svg?style=for-the-badge&logo=json&logoColor=white',
    'https://img.shields.io/badge/JSON%20Web%20Tokens-000000.svg?style=for-the-badge&logo=jsonwebtokens&logoColor=white',
    'https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=node.js&logoColor=white',
    'https://img.shields.io/badge/Nodemon-76D04B.svg?style=for-the-badge&logo=nodemon&logoColor=white',
    'https://img.shields.io/badge/Apollo%20GraphQL-311C87.svg?style=for-the-badge&logo=apollographql&logoColor=white',
    'https://img.shields.io/badge/Visual%20Studio%20Code-007ACC.svg?style=for-the-badge&logo=visualstudiocode&logoColor=white',
    'https://img.shields.io/badge/Heroku-430098.svg?style=for-the-badge&logo=heroku&logoColor=white',
    'https://img.shields.io/badge/npm-CB3837.svg?style=for-the-badge&logo=npm&logoColor=white',
    'https://img.shields.io/badge/Trello-0052CC.svg?style=for-the-badge&logo=visualstudiocode&logoColor=white',
    'https://img.shields.io/badge/Slack-4A154B.svg?style=for-the-badge&logo=slack&logoColor=white',
    'https://img.shields.io/badge/Zoom-2D8CFF.svg?style=for-the-badge&logo=zoom&logoColor=white',
    'https://img.shields.io/badge/Google%20Meet-00897B.svg?style=for-the-badge&logo=googlemeet&logoColor=white',
    'https://img.shields.io/badge/Bootstrap-7952B3.svg?style=for-the-badge&logo=bootstrap&logoColor=white',
    'https://img.shields.io/badge/Starbucks-006241.svg?style=for-the-badge&logo=starbucks&logoColor=white'
]

// compiles the arrays as ordered pairs and creates an object for the genReadMe file
function langShieldsObj () {
    var arrOfArr = [];
    for (var i = 0; i < languages.length; i++) {
        const tempArr = [];
        tempArr.push(languages[i]);
        tempArr.push(markdown[i]);
        arrOfArr.push(tempArr);
    };
    return Object.fromEntries(arrOfArr);
}

module.exports = {
    langShieldsObj,
    languages
}