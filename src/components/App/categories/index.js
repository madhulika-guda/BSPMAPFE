import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import SelectInput from '@material-ui/core/Select/SelectInput';
import {withRouter} from 'react-router-dom';
import View from '../view/index';
//import CardView from '../cardview/index';
import fantacy from '../images/fantacy.jpeg';
import art from '../images/art.jpeg';

import history from '../images/history.jpeg';
import technical from '../images/technical.jpg';
import others from '../images/others.jpeg';



var key;

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

const images = [
  {
    url: fantacy,
    value: 'Fantacy',
    width: '20%',
    height:'50%',
  },
  {
    url: art,
    value: 'Art',
    width: '20%',
    height:'50%',
  },
  
  {
    url: history,
    value: 'History',
    width: '20%',
    height:'50%',
  },
  {
    url: technical,
    value: 'Technical',
    width: '20%',
    height:'50%',
  },
  {
    url: others,
    value: 'Others',
    width: '20%',
    height:'50%',
  },
  
];
var body;

class Category extends React.Component {

  constructor(props) {
    super(props);

    this.state = 
    {
      category : "",
    }

    this.handleCategory = this.handleCategory.bind(this);
  }


  handleCategory(event) {

    this.setState({category:event.currentTarget.value}, () => {
    console.log(this.state.category)

    let category=this.state.category
    console.log(category);

  

    console.log("sending category"+category)
    let path= `/view/`;
    this.props.history.push({
      pathname: path,
      state: {
        category: category
      }
   }) 

   console.log("sent category"+this.state.category)
      });
    
  }


  render() {
    const { classes } = this.props;

    return (
      <div>
         <br></br>
          <center>
            <div style = {{width : "1750px", height:"500px"}}> 
                {images.map(image => (
                    <ButtonBase 
                        onClick={this.handleCategory} 
                        focusRipple
                        key={image.value}
                        value={image.value}
                        className={classes.image}
                        
                        focusVisibleClassName={classes.focusVisible}
                        style={{width: image.width}}
                    >
                        <span
                            className={classes.imageSrc}
                            
                            style={{backgroundImage: `url(${image.url})`}}
                        />
                        <span className={classes.imageBackdrop} />
                        <span className={classes.imageButton}>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                className={classes.imageTitle}
                            >
                                {image.value}
                                <span className={classes.imageMarked} />
                            </Typography>
                        </span>
                    </ButtonBase>
                ))}
            </div>
            
</center>
         
      </div>

    )
  }
}

Category.propTypes = {
         classes: PropTypes.object.isRequired,
         };
      

export default withRouter(withStyles(styles)(Category));