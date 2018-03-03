import { h } from 'hyperapp'
import topics from './topics.js'
import { coeff,plusorminus } from './utils.js'

 export const Question = ({topic, numbers, showAnswer, key}) => {
     const Question = topics[topic].component;
     return <Question  numbers={numbers} showAnswer={showAnswer} key ={key} />;
 };

export const Multiplication = ({numbers, showAnswer = true, key}) => {
  const x = numbers[2] || 3;
  const y = numbers[3] || 3;
  return (<li key={key}>{numbers[0]/10**(x-3)} &times; {numbers[1]/10**(y-3)} {showAnswer ? (<span class='answer'>= {numbers[0]*numbers[1]/10**(x+y-6)}</span>) : null}</li>)
 };

export const Division = ({numbers, showAnswer = true, key}) =>  (
      <li key={key}>{numbers[0]*numbers[1]} &divide; {numbers[1]} {showAnswer ? (<span class='answer'>= {numbers[0]}</span>) : null}</li>
 );

 export const Equation = ({numbers, showAnswer = true, key}) =>  (
       <li key={key}>{coeff(numbers[0])}<i>x</i> {plusorminus(numbers[3])} {numbers[1]} = {numbers[3]===1 ? numbers[0]*numbers[2] + numbers[1] : numbers[0]*numbers[2] - numbers[1]} {showAnswer ? (<span class='answer'><i>x</i> = {numbers[2]}</span>) : null}</li>
  );

export const Percent = ({numbers, showAnswer = true, key}) =>  (
        <li key={key}>{numbers[0]*5}% of {20*numbers[1]} {showAnswer ? (<span class='answer'>= {numbers[1]*numbers[0]}</span>) : null}</li>
   );

export const Brackets = ({numbers, showAnswer = true, key}) =>  (
  <li key={key}>{numbers[0]+1}({coeff(numbers[1])}<i>x</i> {plusorminus(numbers[3])} {numbers[2]}) {showAnswer ? (<span class='answer'> = {coeff((numbers[0]+1)*numbers[1])}<i>x</i> {plusorminus(numbers[3])} {(numbers[0]+1)*numbers[2]}</span>) : null}</li>
);
