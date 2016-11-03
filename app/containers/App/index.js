/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import Button from 'react-mdl/lib/Button';
import IconButton from 'react-mdl/lib/IconButton';
import Menu, { MenuItem } from 'react-mdl/lib/Menu';
import Textfield from 'react-mdl/lib/Textfield';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl/lib/Layout';
import { Footer, FooterSection, FooterLinkList, FooterDropDownSection } from 'react-mdl/lib/Footer';

import styles from './styles.css';

export default class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div className={styles.container}>
        <Layout fixedHeader>
          <Header title="Chesapeake Men's Senior Baseball League">
            <Navigation>
              <Textfield
                onChange={(evt) => { console.log(evt.target.value); }}
                label="Search"
                expandable
                expandableIcon="search"
              />
              <IconButton name="more_vert" id="demo-menu-lower-left" />
            </Navigation>
            <span style={{ paddingLeft: '24px' }}>
              <Button raised accent ripple>Login</Button>
            </span>
            <Menu target="demo-menu-lower-left" align="left">
              <MenuItem>Some Action</MenuItem>
              <MenuItem>Another Action</MenuItem>
              <MenuItem disabled>Disabled Action</MenuItem>
              <MenuItem>Yet Another Action</MenuItem>
            </Menu>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <a href="">Link</a>
              <a href="">Link</a>
              <a href="">Link</a>
              <a href="">Link</a>
            </Navigation>
          </Drawer>
          <Content>
            {React.Children.toArray(this.props.children)}
            <Footer size="mega">
              <FooterSection type="middle">
                <FooterDropDownSection title="Features">
                  <FooterLinkList>
                    <a href="">About</a>
                    <a href="">Terms</a>
                    <a href="">Partners</a>
                    <a href="">Updates</a>
                  </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="Details">
                  <FooterLinkList>
                    <a href="">Specs</a>
                    <a href="">Tools</a>
                    <a href="">Resources</a>
                  </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="Technology">
                  <FooterLinkList>
                    <a href="">How it works</a>
                    <a href="">Patterns</a>
                    <a href="">Usage</a>
                    <a href="">Products</a>
                    <a href="">Contracts</a>
                  </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="FAQ">
                  <FooterLinkList>
                    <a href="">Questions</a>
                    <a href="">Answers</a>
                    <a href="">Contact Us</a>
                  </FooterLinkList>
                </FooterDropDownSection>
              </FooterSection>
              <FooterSection type="bottom" logo="Title">
                <FooterLinkList>
                  <a href="">Help</a>
                  <a href="">Privacy & Terms</a>
                </FooterLinkList>
              </FooterSection>
            </Footer>
          </Content>
        </Layout>
      </div>
    );
  }
}
