import React, { useState, FormEvent } from 'react';
import { Container, SearchTeachersForm, Main } from './styles';
import api from '../../services/api';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import SubmitButton from '../../components/SubmitButton';

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(event: FormEvent) {
    event.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setTeachers(response.data);
  }

  return (
    <Container>
      <PageHeader title="These are the available proffys.">
        <SearchTeachersForm onSubmit={searchTeachers}>
          <Select
            label="Subject"
            name="subject"
            placeholder="Select a subject"
            value={subject}
            onChange={event => setSubject(event.target.value)}
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
          <Select
            label="Week Day"
            name="week_day"
            value={week_day}
            onChange={event => setWeekDay(event.target.value)}
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
            label="Schedule"
            name="time"
            type="time"
            value={time}
            onChange={event => setTime(event.target.value)}
          />
          <SubmitButton type="submit" text="Search" marginTop="5.6rem" />
        </SearchTeachersForm>
      </PageHeader>
      <Main>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </Main>
    </Container>
  );
};

export default TeacherList;
