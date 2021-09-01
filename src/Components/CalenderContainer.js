import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import bootstrapPlugin, { BootstrapTheme } from "@fullcalendar/bootstrap";

function CalenderContainer() {
  const handleDateClick = (arg) => {
    arg.dayEl.style.backgroundColor = "yellow";
  };

  const renderEventContent = (eventInfo) => {
    return (
      <div>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </div>
    );
  };

  return (
    <div>
      <FullCalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          listPlugin,
          bootstrapPlugin,
        ]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        eventContent={renderEventContent}
        weekends={true}
        initialDate="2021-08-12"
        navLinks={true}
        selectable={true}
        editable={true}
        eventStartEditable={true}
        BootstrapTheme
        themeSystem="bootstrap"
        stickyHeaderDates={true}
        fixedWeekCount={false}
        weekNumbers={true}
        weekNumberFormat={{ week: "short" }}
        selectMirror={true}
        eventShortHeight={50}
        nowIndicator={true}
        dayMaxEventRows = {true}
        eventTextColor="white"
        eventBackgroundColor="green"
        eventBorderColor="white"
        dayMaxEvents = {true}
        eventMaxStack = {4}
        dayPopoverFormat = {{ month: 'long', day: 'numeric', year: 'numeric' }}
        
       
        timeZone = "local"
        businessHours={{
          daysOfWeek: [0, 6], // Thursday, Friday
          startTime: "10:00", // 10am
          endTime: "16:00", // 4pm
        }}
        customButtons={{
          myCustomButton: {
            text: "Sample Button!",
            click: function () {
              alert("You Cilcked the Sample Btn");
            },
          },
        }}
        headerToolbar ={{
          start: "prev,next today myCustomButton",
          center: "title",
          end: "timeGridDay,timeGridWeek dayGridWeek,dayGridDay listWeek dayGridMonth",
        }}
        footerToolbar={{
          left: "prevYear,nextYear",
          center: "",
          end: "",
        }}
        buttonText={{
          today: "Today",
          month: "Month",
          week: "Week",
          day: "Day",
          list: "List Week",
        }}
        events={[
          { title: "React Formik", date: "2021-08-03" },
          { title: "React redux", date: "2021-08-02" },
          { title: " Creating  Mern app ", date: "2021-08-25" },
          { title: "party", date: "2021-08-08" },
          { title: "party", date: "2021-08-08" },
          { title: "party", date: "2021-08-08" },
          { title: "party", date: "2021-08-08" },
          { title: "Project", date: "2021-08-17" },
          {
            title: "Shopping",
            start: "2021-08-10T10:30:00",
            end: "2021-08-10T02:30:00",
          },
          { title: "starting Node ", start: "2021-08-09", end: "2021-08-12" },
          { title: " Full Calendar", date: "2021-08-06" },
          { title: "starting Express ", date: "2021-08-12" },
          { title: "started basic mongoDB  ", date: "2021-08-12" },
          { title: "starting ", date: "2021-08-12" },
          { title: "Meeting ", date: "2021-08-12" },
          { title: "Week Day", date: "2021-08-12" },
          { title: "starting MongoDB ", date: "2021-08-20" },
          {
            title: "Click for Google",
            url: "http://google.com/",
            start: "2021-08-01",
          },
          {
            start: "2021-08-08T10:00:00",
            end: "2021-08-08T16:00:00",
            display: "background",
          },
          {
            title: "Meeting",
            start: "2021-08-08T14:30:00",

            extendedProps: {
              status: "done",
            },
          },
          {
            title: "Birthday Party",
            start: "2021-08-22T07:00:00",
          },
        ]}
        eventTimeFormat={{
          hour: "numeric",
          minute: "2-digit",
          omitZeroMinute: true,
          meridiem: "narrow",
        }}
        dayHeaderFormat={{
          weekday: "short",
          month: "numeric",
          day: "numeric",
          omitCommas: true,
        }}
        titleFormat={{ year: "numeric", month: "long", day: "numeric" }}

        
      />
    </div>
  );
}

export default CalenderContainer;
