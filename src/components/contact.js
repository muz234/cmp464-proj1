import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';  

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h1>  Muzaffar Ahmed  </h1>
            <img src="/images/avatarMain.png"
            alt="avatarMain"
              style={{ height: '250px', borderradius: `10px`}}/>
            <p style={{width:'75%', margin: 'auto',paddinTop:`1em`, fontFamily:'comic-sans'}}>
              Muzaffar is a detail oriented and result driven professional with years of experience in sales. 
              He has always met the quarterly deadlines expeditiously while keeping quality intact. 
              His work ethic and diligence always brings back the best results. 
              Maintains professionalism and display of charisma has made him a very personable individual. 
              His skill set includes relationship building, sharp attention to detail, 
              and a natural problem solving ability. 
            </p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: '18px', fontFamily: 'Anton', margin: 'auto'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (646)824-6407
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '18px', fontFamily: 'Anton', margin: 'auto'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                   mahmed.res@gmail.com 
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
