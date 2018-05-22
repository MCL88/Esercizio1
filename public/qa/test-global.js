suite('Test Globale',()=>{
    test("La pagina ha un titolo valido", () =>{
        assert(document.title && document.title.match(/\S/)) && document.title.toUpperCase() !== "TODO";
    })
});