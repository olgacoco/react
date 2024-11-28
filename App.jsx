
import Counter from "./demostration"
import Intro from "./introduction"
import Timer from "./useEffect"




function App(){
  return(
    <>
    

    <div className="me">
      <Intro/>
      

    </div>
<h1 className="hell">use state example</h1>
    <div className="counter">
      <Counter/>
    </div>
<h2 className="Timer">use effect demostration</h2>
    <div className="border">
    <Timer/>
    </div>

    <div className="txt">
    <p>
        <h1>INTRODUCTION TO HOOKS IN REACT</h1>
      
      hooks : are special functions or methods used to 
      hook into certain points 
      in a program or system to add extra behavior or functionality.
       
      They allow the program to do something specific
       without changing its core code.
       <h2>EXAMPLES OF HOOKS IN REACT</h2>
       these are examples of hooks: 
       _usestate hook
       _use useEffect hook
       -use context hook
       -use Memo hook
       -use Reducer hook
       -use useCallback hook
       _use useLayoutEffect hook
       
       </p>
    </div>
    
    </>
  )
}

export default App