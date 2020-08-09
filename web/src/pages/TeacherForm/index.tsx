import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Main, ScheduleItem, FormFooter } from './styles';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import warningIcon from '../../assets/images/icons/warning.svg';
import api from '../../services/api';
import SubmitButton from '../../components/SubmitButton';

const TeacherForm: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [biography, setBiography] = useState('');
  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, to: '', from: '' },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, to: '', from: '' }]);
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function handleCreateClass(event: FormEvent) {
    event.preventDefault();
    api
      .post('classes', {
        name,
        avatar,
        whatsapp,
        bio: biography,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        alert('Successful registration!');
        history.push('/');
      })
      .catch(() => {
        alert('An unexpected error has occurred.');
      });
  }

  return (
    <Container>
      <PageHeader
        title="It's really cool that you want to teach!"
        description="The first step is to fill out this application form."
        teacherForm
      />
      <Main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Personal Data</legend>
            <Input
              label="Full name"
              name="name"
              value={name}
              onChange={event => setName(event.target.value)}
            />
            <Input
              label="Link to your photo"
              name="avatar"
              value={avatar}
              onChange={event => setAvatar(event.target.value)}
            />
            <Input
              label="Whatsapp"
              name="whatsapp"
              value={whatsapp}
              onChange={event => setWhatsapp(event.target.value)}
            />
            <Textarea
              label="Biography"
              name="bio"
              value={biography}
              onChange={event => setBiography(event.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>About the class</legend>
            <Select
              label="Subject"
              name="subject"
              value={subject}
              onChange={event => setSubject(event.target.value)}
              placeholder="Select one subject"
              options={[
                { value: 'Physics', label: 'Physics' },
                { value: 'Mathematics', label: 'Mathematics' },
                { value: 'Chemistry', label: 'Chemistry' },
                { value: 'Arts', label: 'Arts' },
                { value: 'English', label: 'English' },
                { value: 'Français', label: 'Français' },
                { value: 'Physical Education', label: 'Physical Education' },
                { value: 'Geography', label: 'Geography' },
                { value: 'Biology', label: 'Biology' },
                { value: 'Sociology', label: 'Sociology' },
                { value: 'Philosophy', label: 'Philosophy' },
                { value: 'History', label: 'History' },
              ]}
            />
            <Input
              label="Cost of your class per hour"
              name="cost"
              value={cost}
              onChange={event => setCost(event.target.value)}
              placeholder="U$"
            />
          </fieldset>

          <fieldset>
            <legend>
              Available schedules
              <button onClick={addNewScheduleItem} type="button">
                + New Schedule
              </button>
            </legend>
            {scheduleItems.map((scheduleItem, index) => (
              <ScheduleItem key={scheduleItem.week_day}>
                <Select
                  label="Week Day"
                  name="week_day"
                  value={scheduleItem.week_day}
                  onChange={event =>
                    setScheduleItemValue(index, 'week_day', event.target.value)
                  }
                  placeholder="Select one day"
                  options={[
                    { value: '0', label: 'Sunday' },
                    { value: '1', label: 'Monday' },
                    { value: '2', label: 'Tuesday' },
                    { value: '3', label: 'Wednesday' },
                    { value: '4', label: 'Thursday' },
                    { value: '5', label: 'Friday' },
                    { value: '6', label: 'Saturday' },
                  ]}
                />
                <Input
                  label="From"
                  name="from"
                  type="time"
                  value={scheduleItem.from}
                  onChange={event =>
                    setScheduleItemValue(index, 'from', event.target.value)
                  }
                />
                <Input
                  label="To"
                  name="to"
                  type="time"
                  value={scheduleItem.to}
                  onChange={event =>
                    setScheduleItemValue(index, 'to', event.target.value)
                  }
                />
              </ScheduleItem>
            ))}
          </fieldset>

          <FormFooter>
            <p>
              <img
                src={warningIcon}
                alt="Important warning"
                srcSet={warningIcon}
              />
              Important!
              <br />
              Fill in all the fields.
            </p>
            <SubmitButton type="submit" text="Register" marginTop="3.2rem" />
          </FormFooter>
        </form>
      </Main>
    </Container>
  );
};

export default TeacherForm;
