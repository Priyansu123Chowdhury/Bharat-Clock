function CurrentTime(){
  let time = new Date();
  return(
    
<div className="Current lead fw-medium">This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()} </div>
  )
}
export default CurrentTime;