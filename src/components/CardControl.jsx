import PropTypes from "prop-types";
import { ActionIcon, Box } from '@mantine/core';
import { IconTrashX } from '@tabler/icons';

function CardControl(props) {
  const { card, remove } = props;
  const { id } = card;

  const handleOnClick = () => {
    remove(id);
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <ActionIcon size="lg" onClick={handleOnClick}>
        <IconTrashX size={16} />
      </ActionIcon>
    </Box>
  );
}

export default CardControl;

CardControl.propTypes = {
  remove: PropTypes.func,
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    front: PropTypes.string.isRequired,
    back: PropTypes.string.isRequired,
  }),
};