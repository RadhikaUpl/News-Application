
const Navbar=({setCategory})=>
{
    return(
        <>
       <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">NewsMag</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      
        <li class="nav-item">
          <div class="nav-link" onClick={()=>{setCategory("technology")}} style={{cursor:"pointer"}} >Technology</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={()=>{setCategory("science")}} style={{cursor:"pointer"}}>Science</div>
        </li>
        <li class="nav-item">
          <div class="nav-link"  onClick={()=>{setCategory("business")}} style={{cursor:"pointer"}}>Business</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={()=>{setCategory("health")}} style={{cursor:"pointer"}}>Health</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={()=>{setCategory("sports")}} style={{cursor:"pointer"}}>Sports</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={()=>{setCategory("entertainment")}} style={{cursor:"pointer"}}>Entertainment</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar;