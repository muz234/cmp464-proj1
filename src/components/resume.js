import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    const textExpOne = 'Work in collaboration with the Case Investigator from the local health department (LHD). \n Authenticate RedCap data with Salesforce to verify the accuracy of the case records(ex.DOB, Address, Contact Info).\n Communicate with contacts of newly diagnosed cases by providing CDC guidelines and city resources.\n Collect and record information on symptoms and needs into the CRM with accuracy.\n Collaborate with the media team to educate communities with CDC guidelines.'
    const textExpTwo = 'Conducted market research to advise sellers on maximizing profits from the sale of homes. \n Advised prospective buyers on the suitability and value of the home to solidify the customer relationship. \n Evaluated mortgage options to assist customers in securing the best roles. '
    const textExpThr = 'Customized REACT based web app compatible with Right-To-Left languages like Arabic. \n Identified string required for translation through the simulator. \n Resolved the bugs on the code which has issues translating strings. \n Implemented new libraries to make the application more dynamic by using features like interpolator. \n Authenticated the GitHub Pull Request from other engineers.'
    const textExpFor = 'Worked as Banker and Teller for maximum efficiency. \n Developed workflow procedures to maximize productivity and reduce errors in a fast pace work environment.  \n Referred high valued potential customer to Financial Advisor for better utilization of funds. \n Selected as Digital captain for digital curiosity, to navigate customers towards digital banking and help associates in the district with behavior to achieve the organizational mission of digital banking. \n Selected as top three best associates in the market for performance, simplicity, digital curiosity, integrity, net promoter score, and changing banking for good.'
    return(
      <div className="display-linebreak">
        <Grid>
          <Cell col={4}>
            

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
              startYear={2020}
              endYear={2021}
              jobName="New York City Health & Hospitals "
              jobTitle="Community Engagement Specialist"
              jobDescription={textExpOne}
              
              />

              <Experience
                startYear={2017}
                endYear={2020}
                jobName="Besmatch Real Estate"
                jobTitle="Licensed Real-estate Agent"
                jobDescription= {textExpTwo}
                />
            <Experience
              startYear={2018}
              endYear={2018}
              jobName="Artemis"
              jobTitle="Front-End Developer Intern"
              jobDescription={textExpThr}
            />
            <Experience
              startYear={2015}
              endYear={2017}
              jobName="CapitalOne Bank"
              jobTitle="Universal Banker"
              jobDescription={textExpFor}
            />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Java"
                progress="45"
              />
              <Skills
                skill="SQL"
                progress="35"
              />
              <Skills
                skill="Python"
                progress="35"
              />
              <Skills
                skill="Javascript"
                progress="45"
              />
              <Skills
                skill="React"
                progress="45"
              />
              <Skills
                skill="HTML/CSS"
                progress="45"
              />              
              <Skills
                skill="AWS"
                progress="25"
                />  
              <Skills
                skill="Github"
                progress="40" 
              />                
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;
