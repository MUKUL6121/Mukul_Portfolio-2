import Git from '../../../assets/tools-img/GitHub.png';
import Nodemon from '../../../assets/tools-img/Nodemon.png';
import Postmon from '../../../assets/tools-img/Postman.png';
import Vite from '../../../assets/tools-img/Vite.js.png';
import Vscode from '../../../assets/tools-img/Visual Studio Code (VS Code).png'
import Redux from '../../../assets/tools-img/Redux.png'

function ToolsCards() {
    const skills = [
        {
            skill: "Git",
            img: Git
        },
        {
            skill: "Nodemon",
            img: Nodemon
        },
        {
            skill: "Postmn",
            img: Postmon
        },
        {
            skill: "Vite",
            img: Vite
        },
        {
            skill: "VS Code",
            img: Vscode
        },
        {
            skill: "Redux",
            img: Redux
        }
    ];
    let card = skills.map((a, index) => {
        return (
            <div className='skill-card' key={index}>
                <img src={a.img} alt="img_here" />
                <p>{a.skill}</p>
            </div >
        )
    })
    return (
        <div className="card-holder">{card}</div>
    )
}

export default ToolsCards;