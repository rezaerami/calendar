import React from "react";
import PropTypes from "prop-types";
import {
  EventCardContainerTag,
  EventCardTitleTag,
  EventCardButtonTag,
  ButtonsContainerTag,
  EventCardImgTag,
} from "./eventCardStyles";
/**
 * Event Card
 * Dumb component
 * This will use to render cards in event lists.
 *
 * @component
 * @example
 *
 * return (
 *   <EventCard 
 *      Title="Example Title" 
 *      OnEdit={()=> handler of edit in card }
 *      OnDelete{()=> handler of delete in card } />
 * )
 */
const EventCard = (props) => {
  const { Title, OnEdit, OnDelete } = props;
  return (
    <EventCardContainerTag>
      <EventCardTitleTag>{Title}</EventCardTitleTag>
      <ButtonsContainerTag>
        <EventCardButtonTag onClick={OnEdit}>
          <EventCardImgTag src="/icons/edit.png" alt="edit event" />
        </EventCardButtonTag>
        <EventCardButtonTag onClick={OnDelete}>
          <EventCardImgTag src="/icons/delete.png" alt="delete event" />
        </EventCardButtonTag>
      </ButtonsContainerTag>
    </EventCardContainerTag>
  );
};
export default EventCard;
EventCard.propTypes = {
  /**
   *  title of event card
   */
  Title: PropTypes.string.isRequired,
  /**
   *  on edit button clicked handler function
   */
  OnEdit: PropTypes.func.isRequired,
  /**
   *  on delete button clicked handler function
   */
  OnDelete: PropTypes.func.isRequired,
};
