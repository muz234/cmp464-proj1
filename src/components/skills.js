import React, { Component } from 'react';
import { Grid, Cell, ProgressBar,FormRow } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      /*
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Cell col={12}>
          <div style={{display: 'flex'}}>{this.props.skill} </div>
        </Cell>
      </Grid>
      */
     
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          {/* <Cell col={12}> */}
            <div className='grid-flow-horizontal' style={{display: 'flex', height:'5rem', width: '5rem', border:'1px solid white', alignItems: 'center', justifyContent:'center', flexDirection:'row', fontSize:'12px'}}>{this.props.skill} </div>
          {/* </Cell> */}
        </Grid>
      </Grid>
    
    )
  }
}

export default Skills;
