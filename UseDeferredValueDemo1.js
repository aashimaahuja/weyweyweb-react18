import * as React from 'react';
import {useState} from 'react';
import './styles.css';

const ItemList = ({ value }) => {
   
  const result = Array(90000)
    .fill(1)
    .map((_, index) => {
        return <li key={index}>{value+index}</li>
     });
  return <ul className='itemlist'>{result}</ul>;
};

export default function UseDeferredValueDemo1(){
  const [value, setValue] = useState(0);

//   React.useEffect(() => {
//     console.log(value)
//   },[value])

  return (
    <div style={{height: '100vh', overflow: 'scroll', marginTop: '64px'}}>
      <button
        style={{ margin: '16px', padding: '16px', width: '200px', cursor: 'pointer', fontSize: '32px', fontWeight: 'bold' }}
        onClick={() => {
          setValue((prevValue) => prevValue + 1);
        }}
      >
        {value}
      </button>

      <ItemList value={value} />
     
    </div>
  );
};
