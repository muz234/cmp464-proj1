import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src=""
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>MUZAFFAR AHMED</h2>
            <h4 style={{color: 'grey'}}>DEVELOPER</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Muzaffar is a detail oriented and result driven professional with years of experience in sales. 
              He has always met the quarterly deadlines expeditiously while keeping quality intact. 
              His work ethic and diligence always brings back the best results. Maintains professionalism and display of charisma has made him a very personable individual. 
              His skill set includes relationship building, sharp attention to detail, and a natural problem solving ability. </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Phone</h5>
            <p>(646) 824-6407</p>
            <h5>Email</h5>
            <p>mahmed.res@gmail.com</p>
            <h5>Web</h5>
            <p></p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2018}
              endYear={2021}
              schoolName="Lehman College"
              schoolDescription="Studying Undergradute majoring in Computer Science."
               />

               <Education
                 startYear={2015}
                 endYear={2018}
                 schoolName="Bronx Community College"
                 schoolDescription="Completed Associates Degree in Business administration and computer programing."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={0}
              endYear={0}
              jobName=""
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName=""
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={50}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="React"
                    progress={50}
                    />
                    <Skills
                      skill="Java"
                      progress={45}
                      />
                      <Skills
                        skill="SQL"
                        progress={25}
                        />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
