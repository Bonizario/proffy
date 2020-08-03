import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import Item from './styles';

const TeacherItem: React.FC = () => {
  return (
    <Item>
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
          alt="Diego Fernandes"
        />
        <div>
          <strong>Diego Fernandes</strong>
          <span>Chemistry</span>
        </div>
      </header>
      <p>
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
          <strong>U$ 55,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Get in touch
        </button>
      </footer>
    </Item>
  );
};

export default TeacherItem;
