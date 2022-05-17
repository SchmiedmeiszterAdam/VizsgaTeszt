class TesztKerdes {
    constructor(elem, adat) {
        this.elem = elem
        this.adat = adat
        this.kivalasztva
        this.megjelenit()
        this.valaszok = this.elem.find('.valasz')
        for (let i = 0; i < this.valaszok.length; i++) {
            const element = this.valaszok[i];
            $(element).on("click", () => { 
                this.kivalasztva = element
                this.kattintas()
            })
        }
    }
    megjelenit() {
        this.elem.append("<div class = 'kerdes-tarolo'>" + this.adat.kerdes + "</div>")
        this.elem.append("<div class = 'valasz-tarolo'></div>")
        this.elem.find(".valasz-tarolo").append("<div class = 'valasz' id = '1'><p>" + this.adat.v1 + "</p></div>")
        this.elem.find(".valasz-tarolo").append("<div class = 'valasz' id = '2'><p>" + this.adat.v2 + "</p></div>")
        this.elem.find(".valasz-tarolo").append("<div class = 'valasz' id = '3'><p>" + this.adat.v3 + "</p></div>")
        this.elem.find(".valasz-tarolo").append("<div class = 'valasz' id = '4'><p>" + this.adat.v4 + "</p></div>")
    }
    kattintas() {
        let esemeny = new CustomEvent("valaszBejelolese", { detail: this })
        window.dispatchEvent(esemeny)
        this.valaszok.unbind()
    }
}