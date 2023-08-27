import Breadcrumb from 'react-bootstrap/Breadcrumb';
import '../index.css';

const About = () => {
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href="/">All places I love</Breadcrumb.Item>
                <Breadcrumb.Item active>About</Breadcrumb.Item>
            </Breadcrumb>
            <div className='body-margin'>
                <h1>About </h1>

                <p>
                    The website "All places I love" is a collection of places I visited and I loved during my journeys.
                    <br/>
                    The project made by <a href='https://github.com/imriccardop'>Riccardo P.</a> with React.js .
                </p>
                <h3>Link list:</h3>
                <div><a href='https://github.com/imriccardop/all-the-places-i-love'  target="_blank" rel="noreferrer">GitHub repository</a></div>
                <div><a href='https://github.com/imriccardop'  target="_blank" rel="noreferrer">GitHub Profile</a></div>
                <div><a href='https://render.com/'  target="_blank" rel="noreferrer">Render (website hosting)</a></div>
                <div><a href='https://www.jawg.io/en/maps'  target="_blank" rel="noreferrer">Jawg (custom map)</a></div>
            </div>

        </>
    );
   };
   
   export default About;