import React from 'react';

export default function FeedElement(props) {
  // const [feed, setFeed] = useState({})
  // const getSubscription = async () => {
  //   const res = await axios.get(props.url)
  //   setFeed(res.data)
  //   return(res)
  // }

  // useEffect(()=>{
  //   getSubscription()
  // },[])
  return (
    <div>
      <div className='feed-entry'>{props.feed_name}</div>
    </div>
  )
}
