import slides from '../../images/mock.json'
import Slider from '../../Slider';

const About = props => {
    return (
        <section className='about' id="about">
        <div className="container">
        <Slider slides={slides}/>
        </div>
      </section>
    )
}

export default About