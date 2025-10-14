import html_img from '../../../assets/frontend-img/html.png';
import css_img from '../../../assets/frontend-img/CSS3.png';
import js_img from '../../../assets/frontend-img/js.png';
import jquery_img from '../../../assets/frontend-img/jquery.png';
import react_img from '../../../assets/frontend-img/react.png';
import bootstrap_img from '../../../assets/frontend-img/bootstrap.png';

function FrontendCards() {
    const front = [
        { skill: 'HTML', img: html_img },
        { skill: 'CSS', img: css_img },
        { skill: 'JavaScript', img: js_img },
        { skill: 'JQUERY', img: jquery_img },
        { skill: 'React', img: react_img },
        { skill: 'Bootstrap', img: bootstrap_img }
    ];
    let card = front.map((a, index) => {
        return (
            <div className='skill-card' key={index}>
                <img src={a.img} alt="img_here" />
                <p>{a.skill}</p>
            </div>
        )
    })
    return (
        <div className='card-holder'>{card}</div>
    )
};
export default FrontendCards;