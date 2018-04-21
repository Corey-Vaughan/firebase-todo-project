import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authActions } from 'src/auth';
import Button from 'src/views/components/button';
import Banner from 'src/views/components/banner';

import './sign-in-page.css';


const SignInPage = ({signInWithGithub, signInWithGoogle, signInWithTwitter}) => {
  return (
    <div>
    <Banner />
    
    <div className="g-row sign-in">
      <div className="g-col">
        <h1 className="sign-in__heading">SIGN IN</h1>
        <Button className="sign-in__button git-btn" onClick={signInWithGithub}>GitHub</Button>
        <Button className="sign-in__button goo-btn" onClick={signInWithGoogle}>Google</Button>
        <Button className="sign-in__button twi-btn" onClick={signInWithTwitter}>Twitter</Button>
      </div>
    </div>
    </div>
  );
};

SignInPage.propTypes = {
  signInWithGithub: PropTypes.func.isRequired,
  signInWithGoogle: PropTypes.func.isRequired,
  signInWithTwitter: PropTypes.func.isRequired
};


//=====================================
//  CONNECT
//-------------------------------------

const mapDispatchToProps = {
  signInWithGithub: authActions.signInWithGithub,
  signInWithGoogle: authActions.signInWithGoogle,
  signInWithTwitter: authActions.signInWithTwitter
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(SignInPage)
);