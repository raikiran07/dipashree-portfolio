import { TypeAnimation } from 'react-type-animation';
 
const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        `Hello I'm M.Dipashri Singha`, // Types 'One'
        3000, // Waits 1s
       
        () => {
          console.log('Sequence completed');
        },
      ]}
      
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '3rem', display: 'block', color:'white' }}
    />
  );
};

export default ExampleComponent