import { useState, useEffect } from "react"

export const useFetch = (data, match)=> {
   let [item, setitem] = useState([])
   let [availableSize, setavailableSize] = useState([])
   let [moreData, setmoreData] = useState([])
   let [image, setimage] = useState([])

   const {id, gender, genderItemIndex} = match.params
   const getItems = () => {
      if (gender) {
         setitem( item = data[id][gender][genderItemIndex] )
         setavailableSize( availableSize = data[id][gender][genderItemIndex].AvailableSizes )
         setmoreData(data[id][gender][genderItemIndex].MoreDetails)
         setimage(data[id][gender][genderItemIndex].image)
       }
   }

   useEffect(() => {
      getItems()
   }, [match, data])
   
   return {item, availableSize, moreData, image}
}