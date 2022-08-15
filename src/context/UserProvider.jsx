import { useState } from "react"
import {UserContext} from './UserContext'

import dataJSON from '../service/data.json'

export const UserProvider = ({children}) => {

  const [user] = useState(dataJSON);
  const [timeFrame, setTimeFrame] = useState('weekly');

  return (
    <UserContext.Provider value={{user, timeFrame, setTimeFrame}}>
      {children}
    </UserContext.Provider>
  )
}
