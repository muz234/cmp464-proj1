import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
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

        /*
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Cell col={12}>
            <div style={{ display: 'flex' }}>{this.props.skill} </div>
          </Cell>
          <FormRow />
        </Grid>
      </Grid>
      */
    )
  }
}

export default Skills;
