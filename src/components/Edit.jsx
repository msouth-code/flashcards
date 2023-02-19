// import Search from "./Search";
import { Button, Grid } from "@mantine/core";
import { IconNote } from "@tabler/icons";
import PropTypes from "prop-types";

function Header(props) {
  const { add } = props;

  const handleAdd = () => {
    add();
  };

  // const handleRemove = () => {
  //   remove(id);
  // };

  return (
    <Grid>
      <Grid.Col span={2}>
        <Button
          fullWidth
          variant="default"
          leftIcon={<IconNote />}
          onClick={handleAdd}
        >
          Add Card
        </Button>
      </Grid.Col>
      {/* <Grid.Col span={2}>
        <Button
          fullWidth
          variant="default"
          leftIcon={<IconNote />}
          onClick={handleRemove}
        >
          Remove Card
        </Button>
      </Grid.Col> */}
   </Grid>
  );
}

export default Header;

Header.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func,
  add: PropTypes.func,
};
