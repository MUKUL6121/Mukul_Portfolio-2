import Node from '../../../assets/backend-img/Node.png'
import Express from '../../../assets/backend-img/Express.png';
import MongoDB from '../../../assets/backend-img/MongoDB.png';

function BackendCards() {
    const backend = [
        { skill: 'Node.js', img: Node },
        { skill: 'Express.js', img: Express },
        { skill: 'MongoDB', img: MongoDB }
    ];

    let cards = backend.map((a, index) => {
        return (
            <div className='skill-card' key={index}>
                <img src={a.img} alt="img_here" />
                <p>{a.skill}</p>
            </div >
        )
    })
    return (
        <div className='card-holder'>{cards}</div>
    )
}
export default BackendCards;