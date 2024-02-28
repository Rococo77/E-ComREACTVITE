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
            <div onClick={() => IncrementPage(false)}>-</div>
            <div>
                {numPage + 1} / {nbrPage}
            </div>
            <div onClick={() => IncrementPage(true)}>+</div>
        </div>
    );
}

export default PaginationBar;
