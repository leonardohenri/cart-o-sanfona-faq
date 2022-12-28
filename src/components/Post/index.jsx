import { useState } from 'react';
import './styles.css'
import {FiChevronUp, FiChevronDown} from "react-icons/fi" 

export const PostCard = ({question , answer}) =>{
    const [isShowing,SetShowing] = useState(false);
    return(<div className="containerquestions">
      
            
            <h2 onClick={()=>{SetShowing(!isShowing)}}>{question}  {isShowing ? <FiChevronUp className='red'/> :<FiChevronDown className='green'/>  }</h2> 
            {isShowing && <p>{answer}</p>}
              
            
            </div>
    );
}
