import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { CardPosting } from "../../../types/responseData";

interface CardListProps {
  list: CardPosting[],
}

const CardPostings = (props: CardListProps) => {
  return (
    <div></div>
  );
};

export default memo(CardPostings);
