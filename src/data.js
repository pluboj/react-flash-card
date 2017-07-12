import React from 'react';
import sch from './img/scheq.png';

export function store() {
	return [
  {
      id: 1,
      front:'First Law of Motion',
      back: 'An object at rest will remain at rest unless acted on by an unbalanced force. An object in motion continues in motion with the same speed and in the same direction unless acted upon by an unbalanced force. '
  },
  {
      id: 2,
      front:'Second Law of Motion',
      back: 'Acceleration is produced when a force acts on a mass. The greater the mass (of the object being accelerated) the greater the amount of force needed (to accelerate the object).'
  },
  {
      id: 3,
      front:'Third Law of Motion',
      back: 'For every action there is an equal and opposite re-action.'
  },
  {
      id: 4,
      front:'The Schrödinger equation',
      back: <img src={sch} alt='pic'/>,
  }
];

} 