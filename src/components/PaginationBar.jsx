function PaginationBar({ numPage, setnumPage, nbrPage }) {
    const IncrementPage = (choice) => {
        choice
            ? numPage !== nbrPage - 1
                ? setnumPage((prevNumPage) => prevNumPage + 1)
                : window.alert("Vous êtes à la dérniere page !")
            : numPage !== 0
            ? setnumPage((prevNumPage) => prevNumPage - 1)
            : window.alert("Vous êtes déjà à la page 0 !");
    };

    return (
        <div className="PaginationBar">
            <div onClick={() => IncrementPage(false)} className="selection" style={{ backgroundColor: "#0e0e0e" }}>
                -
            </div>
            <div className="numPageContainer">
                {numPage + 1} / {nbrPage}
            </div>
            <div onClick={() => IncrementPage(true)} className="selection" style={{ backgroundColor: "#f90" }}>
                +
            </div>
        </div>
    );
}

export default PaginationBar;
