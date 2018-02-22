function random(a,b) {
  if (b === undefined) b = a, a = 1; // if only one argument is supplied, assume the lower limit is 1
  return Math.floor((b-a+1) * Math.random()) + a;
}

export const Mult = {
  name: 'multiplication',
  mix() { return [ random(12), random(12) ] },
  component({x, y, showAnswer, key})  {
      <li key={key}>\({x} \times {y}\) {showAnswer ? (<span>= {x*y}</span>) : null}</li>
   }

}

export const createRandomQuestions = () => Array.from({length: 10}).map(() => Mult.mix() );

export const uuid = () => ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
  (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
)