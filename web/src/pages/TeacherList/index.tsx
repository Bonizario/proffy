import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { Container, SearchTeachersForm, InputBlock, Main } from './styles';

const TeacherList: React.FC = () => {
  return (
    <Container>
      <PageHeader title="These are the available proffys.">
        <SearchTeachersForm>
          <InputBlock>
            <label htmlFor="subject">
              Subjects
              <input type="text" id="subject" />
            </label>
          </InputBlock>
          <InputBlock>
            <label htmlFor="week-day">
              Week Day
              <input type="text" id="week-day" />
            </label>
          </InputBlock>
          <InputBlock>
            <label htmlFor="time">
              Schedule
              <input type="text" id="time" />
            </label>
          </InputBlock>
        </SearchTeachersForm>
      </PageHeader>

      <Main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </Main>
    </Container>
  );
};

export default TeacherList;
