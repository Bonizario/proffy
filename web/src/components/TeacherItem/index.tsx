import React from 'react';
import Item from './styles';
import api from '../../services/api';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  user_id: number;
  whatsapp: string;
}

export interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('connections', { user_id: teacher.id });
  }
  return (
    <Item>
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>
        {/* {teacher.bio} */}
        Enthusiast of the best advanced chemistry technologies.
        <br />
        <br />
        Passionate about blowing things up in the laboratory and changing
        people&apos;s lives through experiments. More than 200,000 people have
        experienced one of my explosions.
      </p>
      <footer>
        <p>
          Price/Hour
          <strong>U$ {teacher.cost}</strong>
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          onClick={createNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Get in touch
        </a>
      </footer>
    </Item>
  );
};

export default TeacherItem;
