import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <footer className="text-center">
            <div className="footer-above">
                <div className="container">
                    <div className="row">
                        <div className="footer-col col-md-4">
                            <h3>Dil Shaan </h3>
                            <p><span>Ph.# +91-647-xxx-xxx<br/>
                                <a href={`mailto:info@dilshaan.com?Subject=Dil%20Shaan`} target="_top">info@dilshaan.com</a></span>
                                <span className='hidden-xs'>
                                <br/>Punjabi Bagh
                                <br/>Kapurthala<br/>
                            </span></p>
                        </div>
                        <div className="footer-col col-md-4">
                          <div className="hidden-xs">
                            <h3>Around the Web</h3>
                            <ul className="list-inline">
                                <li>
                                    <a href="https://www.facebook.com/sham.samjotra" target="_blank" rel="noopener noreferrer" className="btn-social btn-outline"><span className="sr-only">Facebook</span><i className="fa fa-fw fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="" target="_blank" rel="noopener noreferrer" className="btn-social btn-outline"><span className="sr-only">Google Plus</span><i className="fa fa-fw fa-google-plus"></i></a>
                                </li>
                                <li>
                                    <a href="" target="_blank" rel="noopener noreferrer" className="btn-social btn-outline"><span className="sr-only">Twitter</span><i className="fa fa-fw fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="" target="_blank" rel="noopener noreferrer" className="btn-social btn-outline"><span className="sr-only">Linked In</span><i className="fa fa-fw fa-linkedin"></i></a>
                                </li>
                            </ul>
                            </div>
                            <div className="fb-like" data-href="https://www.facebook.com/TeamAndyNagpal/" data-layout="button_count" data-action="like" data-size="large" data-show-faces="true" data-share="true"></div>
                        </div>
                        <div className="footer-col col-md-4">
                            <h3>Ramesh K. Sippy</h3>
                            <p><span>Ph.# +91-98145-81786<br/>
                                <a href={`mailto:sippy@dilshaan.com?Subject=Varun%20Paaji`} target="_top"> sippy@dilshaan.com</a></span>
                                <span className='hidden-xs'>
                                <br/>Punjabi Bagh
                                <br/>Kapurthala<br/>
                            </span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-below">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                          Copyright &copy; Andy Insurance Canada {new Date().getFullYear()}<br/>
                          Built with 💖 by the <u><a style={{'color':'white'}} href={`mailto:kashyap@radhasoami.ca`}>Kashyap</a></u> team
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
