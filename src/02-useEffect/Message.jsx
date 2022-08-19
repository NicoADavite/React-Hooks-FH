import { useEffect } from "react";

export const Message = ({msg}) => {

    useEffect(() => {
      console.log("me monté");
    
      return () => {
        console.log("me desmonté")
      } 
    }, [])
    
  return (
    <>
      <h2>{msg}</h2>
    </>
  );
};
