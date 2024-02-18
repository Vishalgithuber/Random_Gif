// import React, { useState } from 'react';
// // import axios from 'axios';
// import Spinner from './Spinner';
// import useGif from '../hooks/useGif';

// // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

// const Tag = () => {
//     // const [gif, setGif] = useState('');
//     // const [loading, setLoading] = useState(false); // Initialize with boolean value

//     // async function fetchData() {
//     //     setLoading(true);
//     //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
//     //     try {
//     //         const { data } = await axios.get(url);
//     //         const imageSource = data.data.images.downsized_large.url;
//     //         setGif(imageSource);
//     //     } catch (error) {
//     //         console.error('Error fetching data:', error);
//     //     } finally {
//     //         setLoading(false);
//     //     }
//     // }

//     // useEffect(() => {
//     //     fetchData();
//     // }, []);
//     const [tag, setTag] = useState('car');

//     const {gif, loading, fetchData} = useGif();   

//     return (
//         <div className='bg-blue-400 w-1/2 rounded-xl items-center gap-y-10 mt-[15px] border border-black flex flex-col'>
//             <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>A Random GIF</h1>
//             {loading ? <Spinner /> : <img src={gif} width="450" alt='gif' />}
//             <input 
//                 className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
//                 onChange={(event) => setTag(event.target.value)}
//                 value={tag}
//                 />
//             <button
//                 onClick={() => fetchData(tag)}
//                 className="mb-[20px] w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] uppercase font-medium tracking-wide">
//                 Generate
//             </button>
//         </div>
//     );
// };

// export default Tag;

import React, { useState } from 'react'
// import axios from 'axios';
// import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Tag = () => {
  const [tag, setTag] = useState('car');

  const {gif, loading, fetchData} = useGif();


  return (
    <div className='lg:w-1/2 w-full bg-blue-500 rounded-xl border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-xl md:text-2xl underline uppercase font-bold'> Random {tag} Gif</h1>

    {
        loading ? (<Spinner/>) : (<img src= {gif} width="450" alt='gif' />)
    }

      <input 
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={(event) =>  setTag(event.target.value)}
        value={tag}
      />
      

      <button onClick={() => fetchData(tag)}
      className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] uppercase font-medium tracking-wide">

       Generate

      </button>

    </div>
  )
}

export default Tag




