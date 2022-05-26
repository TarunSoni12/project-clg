import "./Header.css"

function Header({change, nameInput}){
    return(
        <div className="header">
            <div className="d-flex header-form">
            <select onChange={(event)=>change(event)} className="form-select" aria-label="Default select example">
                <option selected>Select Location</option>
                <option value="haryana">haryana</option>
                <option value="Delhi">Delhi</option>
                <option value="Amritsar">Amritsar</option>
                <option value="jabalpur">jabalpur</option>
                <option value="indore">indore</option>
                <option value="raipur">raipur</option>
            </select>
            <input onInput={(event)=>nameInput(event)} type="text" placeholder="Enter name...." className="form-control" id="inputName"></input>
            </div>
        </div>
    );
}

export default Header;
