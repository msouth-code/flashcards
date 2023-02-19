import Card from "./BasicCard.jsx";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";

function Cards(props) {
  const { cards, remove } = props;

  return (
    <>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {cards
        .map((card, index) => (
          <Grid item xs={6}>
            <Card card={card} key={index} remove={remove}/>
          </Grid>
        ))}
        </Grid>
    </>
  );
}

export default Cards;

Cards.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};
