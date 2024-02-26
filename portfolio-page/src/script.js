// Made by Yago Estévez (Twitter: @yagoestevez.com)


/***********************
  Menu Component
 ***********************/


  const Menu = props => {
    return (
      <div className={`menu-container ${props.showMenu}`}>
        <div className="overlay" />
        <div className="menu-items">
          <ul>
            <li>
              <a href="#welcome-section" onClick={props.toggleMenu}>
                HOME
              </a>
            </li>
            <li>
              <a href="#about" onClick={props.toggleMenu}>
                ABOUT
              </a>
            </li>
            <li>
              <a href="#projects" onClick={props.toggleMenu}>
                PORTFOLIO
              </a>
            </li>
            <li>
              <a href="#contact" onClick={props.toggleMenu}>
                CONTACT
              </a>
            </li>
          </ul>
          <SocialLinks />
        </div>
      </div>
    );
  };
  
  
  /***********************
    Nav Component
   ***********************/
  
  const Nav = props => {
    return (
      <React.Fragment>
        <nav id="navbar">
          <div className="nav-wrapper">
            <p className="brand">
              Syed
              <strong>Yousuf Ali</strong>
            </p>
            <a
              onClick={props.toggleMenu}
              className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
            >
              <span />
            </a>
          </div>
        </nav>
      </React.Fragment>
    );
  };
  
  
  
  /***********************
    Header Component
   ***********************/
  
  const Header = props => {
    return (
      <header id="welcome-section">
        <div className="forest" />
        <div className="silhouette" />
        <div className="moon" />
        <div className="container">
          <h1>
            <span className="line">I am a</span>
            <span className="line">web developer</span>
            <span className="line">
              <span className="color">&</span> engineer!.
            </span>
          </h1>
          <div className="buttons">
            <a href="#projects">my portfolio</a>
            <a href="#contact" className="cta">
              get in touch
            </a>
          </div>
        </div>
      </header>
    );
  };
  
  
  /***********************
    About Component
   ***********************/
  
  function About(props) {
    return (
        <section id="about">
            <div className="wrapper">
                <article>
                    <div className="title">
                        <h3>Who's this guy?</h3>
                        <p className="separator" />
                    </div>
                    <div className="desc full">
                        <h4 className="subtitle">My name is Ali.</h4>
                        <p>
                            I am a web developer and a engineering student
                        </p>
                        <p>
                            I really enjoy solving problems as well as making things pretty and easy to use. I
                            can't stop learning new things; the more, the better.
                        </p>
                    </div>
                    <div className="title">
                        <h3>What does he do?</h3>
                        <p className="separator" />
                    </div>
                    <div className="desc">
                        <h4 className="subtitle">NOTHING!</h4>
                        <p>
                            I have a passion for web development and love to create for web and mobile devices
                            For the front-end I usually work with Javascript, I also make the web pretty by using
                            CSS and, whenever needed, any of their friends: Bootstrap, etc.
                        </p>
                        <p>
                            For the back-end I also work with Javascript, still learning! 
                        </p>
                        <p>He is just a second year student of engineering!</p>
                    </div>
                    <div className="title">
                        <h3>What is he doing now?</h3>
                        <p className="separator" />
                        <p>He is pursuing engineering</p>
                        </div>
                        <div className="title">
                            <h3> From Where?</h3>
                             <p className="separator" />
                             <p> He is pursuing engineering from <strong> MVJ Collage of engineering </strong> loacted in silicon city of India!
                             </p>
                            </div>
                </article>
            </div>
        </section>
    );
}
  
  
  /***********************
    Project Component
   ***********************/
  
  const Project = props => {
    const tech = {
      sass: 'fab fa-sass',
      css: 'fab fa-css3-alt',
      js: 'fab fa-js-square',
      react: 'fab fa-react',
      vue: 'fab fa-vuejs',
      d3: 'far fa-chart-bar',
      node: 'fab fa-node'
    };
  
    const link = props.link || 'http://';
    const repo = props.repo || 'http://';
  
    return (
      <div className="project">
        <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
          <img className="project-image" src={props.img} alt={'Screenshot of ' + props.title} />
        </a>
        <div className="project-details">
          <div className="project-tile">
            <p className="icons">
              {props.tech.split(' ').map(t => (
                <i className={tech[t]} key={t} />
              ))}
            </p>
            {props.title}{' '}
          </div>
          {props.children}
          <div className="buttons">
            <a href={repo} target="_blank" rel="noopener noreferrer">
              View source <i className="fas fa-external-link-alt" />
            </a>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Try it Live <i className="fas fa-external-link-alt" />
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  
  
  /***********************
    Projects Component
   ***********************/
  
    const Projects = props => {
        return (
          <section id="projects">
            <div className="projects-container">
              <div className="heading">
                <h3 className="title">My Works</h3>
                <p className="separator" />
                <p className="centered">Still developing</p>
                <i>Great things take time!</i>
            </div>
           </div>
          </section>
        );
      };
      
  
  
  
  /***********************
    Contact Component
   ***********************/
  
    const Contact = props => {
        return (
          <section id="contact">
            <div className="container">
              <div className="heading-wrapper">
                <div className="heading">
                  <p className="title">
                    Want to <br />
                    contact me?
                  </p>
                  <p className="separator" />
                  <p className="subtitle">
                    Please, use the form below or send an email to {''}
                    <span className="mail">
                      admin
                      <i className="fas fa-at at" />
                      sydali
                      <i className="fas fa-circle dot" />
                      tech
                    </span>
                    :
                  </p>
                </div>
                <SocialLinks />
              </div>
              <form id="contact-form" action="#">
                <input placeholder="Name" name="name" type="text" required />
                <input placeholder="Email" name="email" type="email" required />
                <textarea placeholder="Message" type="text" name="message" />
                <input className="button" id="submit" value="Submit" type="submit" />
              </form>
            </div>
          </section>
        );
      };
      
      
      
      /***********************
        Footer Component
       ***********************/
      
      const Footer = props => {
        return (
          <footer>
            <div className="wrapper">
              <h3>THANKS FOR VISITING</h3>
              <p>© {new Date().getFullYear()} Syed Yousuf Ali.</p>
              <SocialLinks />
            </div>
          </footer>
        );
      };
      
      
      
      
      /***********************
        Social Links Component
       ***********************/
      
      const SocialLinks = props => {
        return (
          <div className="social">
            <a
              href="https://twitter.com/Syedd07"
              target="_blank"
              rel="noopener noreferrer"
              title="Link to author's Twitter profile"
            >
              {' '}
              <i className="fab fa-twitter" />
            </a>
            <a
              id="profile-link"
              href="https://github.com/syedd07"
              target="_blank"
              rel="noopener noreferrer"
              title="Link to author's GitHub Profile"
            >
              {' '}
              <i className="fab fa-github" />
            </a>
            
          </div>
        );
      };
  
  
  
  /***********************
    Main Component
   ***********************/
  
  class App extends React.Component {
    state = {
      menuState: false
    };
  
    toggleMenu = () => {
      this.setState(state => ({
        menuState: !state.menuState
          ? 'active'
          : state.menuState === 'deactive'
            ? 'active'
            : 'deactive'
      }));
    };
  
    render() {
      return (
        <React.Fragment>
          <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
          <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
          <Header />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </React.Fragment>
      );
    }
  
    componentDidMount() {
      const navbar = document.querySelector('#navbar');
      const header = document.querySelector('#welcome-section');
      const forest = document.querySelector('.forest');
      const silhouette = document.querySelector('.silhouette');
      let forestInitPos = -300;
  
      window.onscroll = () => {
        let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  
        if (scrollPos <= window.innerHeight) {
          silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
          forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
        }
  
        if (scrollPos - 100 <= window.innerHeight)
          header.style.visibility = header.style.visibility === 'hidden' && 'visible';
        else header.style.visibility = 'hidden';
  
        if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');
        else navbar.classList.remove('bg-active');
      };
  
      (function navSmoothScrolling() {
        const internalLinks = document.querySelectorAll('a[href^="#"]');
        for (let i in internalLinks) {
          if (internalLinks.hasOwnProperty(i)) {
            internalLinks[i].addEventListener('click', e => {
              e.preventDefault();
              document.querySelector(internalLinks[i].hash).scrollIntoView({
                block: 'start',
                behavior: 'smooth'
              });
            });
          }
        }
      })();
    }
  }
  
  
  ReactDOM.render(<App />, document.getElementById('app'));