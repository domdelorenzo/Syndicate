import React, { useContext } from 'react';
import { FeedContext } from '../pages/Home';

export default function FeedElement(props) {
  const {setFeedurl} = useContext(FeedContext)
  // const [feed, setFeed] = useState({})
  // const getSubscription = async () => {
  //   const res = await axios.get(props.url)
  //   setFeed(res.data)
  //   return(res)
  // }
  const baseurl = 'https://cors-anywhere.herokuapp.com/'
  const selectFeed = (e) =>{
    e.preventDefault()
    let url = baseurl+e.target.getAttribute('feedurl')
    console.log(url)
    setFeedurl(url)
  }
  // useEffect(()=>{
  //   getSubscription()
  // },[])
  return (
    <div>
      <div onClick={selectFeed} feedurl={props.url} className='feed-entry'>{props.feed_name}</div>
    </div>
  )
}
