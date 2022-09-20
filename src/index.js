import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"

const section = document.querySelectorAll('section');
const windowHeight = window.innerHeight;
const navigation = document.querySelector('nav a');

console.log(windowHeight);

window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    section.forEach(function(section, i) {
        if(section.offsetTop < scrollTop + windowHeight/2 && scrollTop < section.offsetTop + windowHeight/2) {
            navigation.children[i].classList.add('active')
        }
    });
});

ReactDOM.render(<App />, document.querySelector("#root"));
