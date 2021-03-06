import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    margin: 30,
    padding: 10
  },
  media: {
    height: 140
  },
  ingredients: {
    listStyleType: 'none',
    padding: 0
  }
};

class CocktailDetail extends React.PureComponent {
  render() {
    const { classes, cocktail } = this.props;
    const {
      name, thumbUrl, ingredients, instructions
    } = cocktail;
    return (
      <Card className={classes.card}>
        <Typography gutterBottom variant="headline" component="h2" align="center">
          {name}
        </Typography>
        {thumbUrl &&
        <CardMedia
          className={classes.media}
          image={thumbUrl}
          title={name}
        />}
        <CardContent>
          <ul className={classes.ingredients}>
            {ingredients.map(i =>
              <li key={i.id}>{i.measure} - {i.ingredient}</li>)}
          </ul>
          <Typography variant="caption">
            &bull; How to prepare
          </Typography>
          <Typography component="p">
            {instructions}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

CocktailDetail.propTypes = {
  cocktail: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles, { withTheme: true }))(CocktailDetail);
