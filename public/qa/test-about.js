suite("About Page",() =>{
    test("La pagina ha un link alla pagina contact", () =>{
        assert(document.querySelector('a[href="/contact"]').length !== 0);
    });
})