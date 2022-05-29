import React from 'react'
import { MenuButton, MenuList, Menu, MenuItem,} from '@chakra-ui/react'
import style from "./child1.module.css"
const Popbox = ({text,arr}) => {
  return (
    <div>
        <Menu isLazy>
        <MenuButton>{text}</MenuButton>
        <MenuList>
            {/* MenuItems are not rendered unless Menu is open */}
            {arr.map((elem)=>(
                 <MenuItem  alignItems={"start"}>
                     <div>

                        <p className={style.large}>{elem.h1}</p>
                 
                        <p>{elem.p}</p>

                     </div>
                 
                 </MenuItem>
            ))}
           
            {/* <MenuItem>Open Closed Tab</MenuItem>
            <MenuItem>Open File</MenuItem> */}
        </MenuList>
        </Menu>
    </div>
  )
}

export default Popbox