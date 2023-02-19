import PropTypes from "prop-types";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import CardControl from "./CardControl";
import { Button, Grid } from "@mantine/core";
import { IconNote } from "@tabler/icons";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { ActionIcon } from "@mantine/core";
import { Text } from "@mantine/core";
import { TextInput } from "@mantine/core";

var cardStyle = {
  display: "flex",
  width: "30vw",
  transitionDuration: "0.3s",
  height: "15vw",
  margin: "auto",
  flexDirection: "column",
};

function BasicCard(props) {
  const { card, remove } = props;

  const [front, setFront] = useState(false);
  const [frontText, setFrontText] = useState(card.front);
  const [backText, setBackText] = useState(card.back);

  const handleOnClick = (event) => {
    event.preventDefault();
    setFront(!front);
  };

  const frontChange = (event) => {
    setFrontText(event.target.value.trim());
  };

  const backChange = (event) => {
    setBackText(event.target.value.trim());
  };

  return (
    <ReactCardFlip isFlipped={front} flipDirection="vertical">
      <Card style={cardStyle}>
        <Text>Question</Text>
        <CardContent>
          <textarea
            value={frontText}
            onChange={frontChange}
            align="center"
            ta="center"
            variant="h5"
            component="div"
            fontSize={13}
          />
        </CardContent>
        <CardActions>
          <CardControl remove={remove} card={card} />
          <ActionIcon onClick={handleOnClick}>
            <SwapVertIcon size={16} />
          </ActionIcon>
        </CardActions>
      </Card>
      <Card style={cardStyle}>
        <Text>Answer</Text>
        <CardContent>
          <textarea
            value={backText}
            onChange={backChange}
            align="center"
            ta="center"
            variant="h5"
            component="div"
            fontSize={13}
          />
        </CardContent>

        <CardActions>
          <CardControl remove={remove} card={card} />
          <ActionIcon onClick={handleOnClick}>
            <SwapVertIcon size={16} />
          </ActionIcon>
        </CardActions>
      </Card>
    </ReactCardFlip>
  );
}

export default BasicCard;

BasicCard.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};
