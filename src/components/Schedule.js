import React, {Component} from 'react';
import {Calendar, momentLocalizer, Views} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import events from "../data/events";

const ColoredDateCellWrapper = ({children}) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: '#FF6565',
    },
  });

class Schedule extends Component {
  constructor(...args) {
    super(...args);
    this.state = {events}
  }

  handleSelect = ({start, end}) => {
    const title = window.prompt('Nombre completo de quien recibira el paquete');
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title,
          },
        ],
      })
  };

  render() {
    const localizer = momentLocalizer(moment);
    return (
      <>
        <div className="schedule">
          <Calendar
            selectable
            onSelectEvent={event => alert(event.title)}
            onSelectSlot={this.handleSelect}
            localizer={localizer}
            events={this.state.events}
            startAccessor="start"
            endAccessor="end"
            defaultView={Views.WEEK}
            views={["week", "day", "agenda"]}
            components={{
              // timeSlotWrapper: ColoredDateCellWrapper,
              // dateCellWrapper: ColoredDateCellWrapper
            }}
          />
        </div>
      </>
    );
  }
}

export default Schedule;