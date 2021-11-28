import {useState, useEffect } from  'react';
import {css} from '@emotion/css';
import './index.css'
import Data from './cssFilterData.json';


function App() {
  return (
    <>
      <div className="body">
        {Data && Data.map((property) => {
         return <Property 
                    pictureNumber={property.pictureNumber} 
                    property={property.property} 
                    unit={property.unit} 
                    range={property.range} 
                    range-word={property['range-word']}  
                />
        })}
        
      </div>
      </>
  );
}



const Property = ({property,unit,range:{min,default_,max,'max-char':maxChar},range_word,pictureNumber}) => {
  let unit_percent = '';
  let setPictureNumber;
  [pictureNumber,setPictureNumber] = useState(pictureNumber);
  const [sampleImage,setSampleImage] = useState('data:image/jpeg;base64,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');
  // eslint-disable-next-line
  unit = unit=='percent' ? '%' : unit ;
  if (unit === '%') {
     unit_percent = '( 0=0% , 1=100% , 2=200% )'
  }
  let range_list = [];
  
    let step = (max - min) / (pictureNumber-1) ;
    step = Math.floor(step);
    for(let i = parseInt(min) ; i < max; i += step ){
      range_list.push(i);
    }
      range_list.push(max);

  const handlePictureNumber = (event) => {
    const value = event.target.value;
    if(value < 10 && value > 2) {
      setPictureNumber(event.target.value);
    }
  };

  return (<>
        <div className={css`
            margin: 20px;
        `}>

            <h1 className={css`
                margin: 5px;
                padding: 5px;
                text-transform: capitalize;
                display:inline;
            `}>
                {property}({unit})
            </h1>
            <div className={css`
              display:inline-flex;
              align-items:center;
            `}>

              <input
                className={css`margin:10px;width:40px;`} 
                type="number"
                value={pictureNumber}
                onChange={(event)=>{handlePictureNumber(event)}}
              />
              <label htmlFor="">Image URL:</label>
              <input
                className={css`margin:5px;`} 
                type="text"
                value={sampleImage}
                onChange={(event) => setSampleImage(event.target.value)}
              />
            </div>
            <div className={css`
                margin: 5px;
                padding: 5px;
            `}>
                Range : {min} {maxChar || max} {unit_percent && ','} {unit_percent}
            </div>
            
            <ImageList pictureNumber={pictureNumber} property={property} unit={unit} range_list={range_list} sampleImage={sampleImage}/>

        </div>
        <hr />
        </>
  )
}


const ImageList = ({property,unit,range_list,pictureNumber,sampleImage}) => {
  let flexBasis = 100/pictureNumber + "%";
  return  (
      <div className={css`
        display: flex;
        flex-wrap:wrap;
        flex-direction: row;
        justify-content : space-around;
      `}>
        {range_list.map( number => {
              return <ImageItem flexBasis={flexBasis} property={property} number={number} unit={unit} sampleImage={sampleImage} />
        })}
      </div>
  )
}


const ImageItem = ({property,number,unit,flexBasis,sampleImage}) => {
    return (
        <div className={css`
            min-width:70px;
            width:calc(${flexBasis} - 10px);
            margin: 5px;
            & img {
              filter:${property}(${number}${unit});
            }
        `}>
            <img 
                className={css`
                  width: 100%;
                  // height: 100%;
                  // object-fit:cover;
            `}
                src={sampleImage} 
                alt=""
            />
            <div 
              className={css`
                display:block;
                text-align:center
              `
            }>
              {number}{unit}
            </div>
      </div>
    )
}





export default App;

