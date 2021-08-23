import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
width: 100%;
max-width: 991px;
margin: 0 auto;
background-image: url('https://i.imgur.com/ivkIMHt.jpg');
background-size: cover;
background-position: center;
background-blend-mode: multiply;
`
export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-family: 'Raleway', sans-serif;
  color: #fff;
  `
  export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
    `;

  export const ListItem = styled.li`
  margin: .5rem 0;
  background: #000;
  color: #fff;
  padding: .5rem;
  `;

  export const LinkHome = styled(Link)`
  display: block;
  widht: 4rem;
  text-align: center;
  margin: 2rem auto;
  background-color: #4682B4;
  padding: .5rem 0;
  color: #fff;
  text-decoration: none;
  
  `;